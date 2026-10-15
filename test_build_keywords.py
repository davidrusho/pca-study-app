#!/usr/bin/env python3
"""Stdlib unittest for build_keywords.py's markdown-table parser.

Run: python3 test_build_keywords.py
"""
import unittest

import build_keywords as bk

FIXTURE = """\
## Habits that find the answer

- **Rule out** each option `by requirement`.
- Second habit **bold** text stays plain.

## Section Three Col

| Keyword | Answer | Why |
|---|---|---|
| `foo bar` | **Baz** | Because reasons |

## Section Two Col

| Keyword | Answer |
|---|---|
| `alpha` | **Beta** |

## Section No Table

Just prose, no table here. Nothing to parse.

## Migration-shaped

| Phase | Keyword | Answer |
|---|---|---|
| Assess | `discover on-prem` | **Migration Center** |
"""


class TestParseMarkdown(unittest.TestCase):
    def setUp(self):
        self.rows, self.habits = bk.parse_markdown(FIXTURE)

    def test_row_count(self):
        # one row from the 3-col table, one from the 2-col table, one from
        # the migration-shaped (phase) table = 3 total; the no-table section
        # contributes nothing.
        self.assertEqual(len(self.rows), 3)

    def test_three_column_row(self):
        row = next(r for r in self.rows if r["section"] == "Section Three Col")
        self.assertEqual(row["keyword"], "`foo bar`")
        self.assertEqual(row["answer"], "**Baz**")
        self.assertEqual(row["why"], "Because reasons")

    def test_two_column_row_has_empty_why(self):
        row = next(r for r in self.rows if r["section"] == "Section Two Col")
        self.assertEqual(row["keyword"], "`alpha`")
        self.assertEqual(row["answer"], "**Beta**")
        self.assertEqual(row["why"], "")

    def test_phase_column_folds_into_why(self):
        row = next(r for r in self.rows if r["section"] == "Migration-shaped")
        self.assertEqual(row["keyword"], "`discover on-prem`")
        self.assertEqual(row["answer"], "**Migration Center**")
        self.assertIn("Assess", row["why"])

    def test_bold_preserved_in_answers(self):
        # Every fixture row's answer carries **bold** in the source; the
        # builder must leave it there for the app's renderer to style.
        for row in self.rows:
            self.assertIn("**", row["answer"])

    def test_habits_list(self):
        self.assertEqual(len(self.habits), 2)
        self.assertEqual(self.habits[0], "**Rule out** each option `by requirement`.")
        self.assertIn("**", self.habits[0])
        self.assertIn("**", self.habits[1])

    def test_generated_header_names_no_private_paths(self):
        js = bk.generate_js(self.rows, self.habits, "private-note.md")
        self.assertTrue(js.startswith("// Generated file."))
        self.assertNotIn("private-note.md", js)
        self.assertNotIn("build_keywords", js)


if __name__ == "__main__":
    unittest.main()
