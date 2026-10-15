#!/usr/bin/env python3
"""Parse data/keywords.md into keywords.js for the study app.

Stdlib only. Reads every markdown table found under each `## ` section of the
source note, plus the "Habits that find the answer" bullet list, and writes
window.PCA_KEYWORDS / window.PCA_HABITS as a plain <script> file (no fetch(),
so it works on a file:// page).

`**bold**` markers are preserved as-is in every field (not stripped) so the
app's own renderer can turn them into a highlighted span. Backtick keyword
spans are also left untouched.

Usage: python3 build_keywords.py [source.md] [dest.js]
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_SOURCE = SCRIPT_DIR / "data" / "keywords.md"
DEFAULT_DEST = SCRIPT_DIR / "keywords.js"

# Header text (lowercased) -> canonical field name. Anything not listed here
# is assigned positionally to whichever of keyword/answer/why is still open,
# in that order. "phase" is never filled positionally - it only ever comes
# from an explicit "Phase" column, and gets folded into `why` at the end.
HEADER_ALIASES = {
    "keyword": "keyword",
    "topic": "keyword",
    "setup": "keyword",
    "answer": "answer",
    "correct": "answer",
    "sla": "answer",
    "why": "why",
    "study hub says": "why",
    "phase": "phase",
}

SEPARATOR_RE = re.compile(r"^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$")
SECTION_RE = re.compile(r"^##\s+(.+?)\s*$")
BULLET_RE = re.compile(r"^\s*-\s+(.*\S)\s*$")


def split_row(line: str) -> list[str]:
    """Split a markdown table row into cells, dropping the outer empty cells
    produced by leading/trailing pipes."""
    parts = line.strip().split("|")
    if parts and parts[0].strip() == "":
        parts = parts[1:]
    if parts and parts[-1].strip() == "":
        parts = parts[:-1]
    return [p.strip() for p in parts]


def is_table_header(line: str, next_line: str | None) -> bool:
    if next_line is None:
        return False
    if "|" not in line:
        return False
    return bool(SEPARATOR_RE.match(next_line))


def parse_table(header_cells: list[str], data_lines: list[str], section: str) -> list[dict]:
    header_lower = [h.strip().lower() for h in header_cells]
    idx: dict[str, int] = {}
    for i, h in enumerate(header_lower):
        canonical = HEADER_ALIASES.get(h)
        if canonical and canonical not in idx:
            idx[canonical] = i

    used_cols = set(idx.values())
    remaining_cols = [i for i in range(len(header_cells)) if i not in used_cols]
    fallback_order = [k for k in ("keyword", "answer", "why") if k not in idx]
    for field, col in zip(fallback_order, remaining_cols):
        idx[field] = col

    rows = []
    for line in data_lines:
        cells = split_row(line)
        if not cells or all(c == "" for c in cells):
            continue

        def get(field: str) -> str:
            i = idx.get(field)
            if i is None or i >= len(cells):
                return ""
            return cells[i].strip()

        keyword = get("keyword")
        answer = get("answer")
        why = get("why")
        phase = get("phase")
        if phase:
            why = f"Phase: {phase}. {why}".strip().rstrip(".") + "." if why else f"Phase: {phase}"
        if not keyword and not answer:
            continue
        rows.append({"section": section, "keyword": keyword, "answer": answer, "why": why})
    return rows


def parse_habits(lines: list[str]) -> list[str]:
    habits = []
    for line in lines:
        m = BULLET_RE.match(line)
        if m:
            habits.append(m.group(1).strip())
    return habits


def parse_markdown(text: str) -> tuple[list[dict], list[str]]:
    lines = text.splitlines()
    sections: list[tuple[str, list[str]]] = []
    current_name = None
    current_lines: list[str] = []
    for line in lines:
        m = SECTION_RE.match(line)
        if m:
            if current_name is not None:
                sections.append((current_name, current_lines))
            current_name = m.group(1)
            current_lines = []
        else:
            current_lines.append(line)
    if current_name is not None:
        sections.append((current_name, current_lines))

    rows: list[dict] = []
    habits: list[str] = []
    for name, body in sections:
        if name.strip().lower() == "habits that find the answer":
            habits = parse_habits(body)
            continue

        i = 0
        while i < len(body):
            line = body[i]
            next_line = body[i + 1] if i + 1 < len(body) else None
            if is_table_header(line, next_line):
                header_cells = split_row(line)
                data_lines = []
                j = i + 2
                while j < len(body) and body[j].strip().startswith("|"):
                    data_lines.append(body[j])
                    j += 1
                rows.extend(parse_table(header_cells, data_lines, name))
                i = j
            else:
                i += 1
    return rows, habits


def generate_js(rows: list[dict], habits: list[str], source_name: str) -> str:
    header = (
        "// Generated file. Keyword reference for the PCA study app.\n"
    )
    body = (
        "window.PCA_KEYWORDS = " + json.dumps(rows, indent=2, ensure_ascii=False) + ";\n"
        "window.PCA_HABITS = " + json.dumps(habits, indent=2, ensure_ascii=False) + ";\n"
    )
    return header + body


def main(argv: list[str]) -> int:
    source = Path(argv[1]) if len(argv) > 1 else DEFAULT_SOURCE
    dest = Path(argv[2]) if len(argv) > 2 else DEFAULT_DEST

    text = source.read_text(encoding="utf-8")
    rows, habits = parse_markdown(text)
    sections_with_rows = {r["section"] for r in rows}

    dest.write_text(generate_js(rows, habits, source.name), encoding="utf-8")
    print(f"wrote {len(rows)} rows from {len(sections_with_rows)} sections")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
