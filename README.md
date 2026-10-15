# PCA study app

An offline study aid for the Google Cloud Professional Cloud Architect exam. I built it from my own mock exam misses and study notes. It has:

- concept diagrams for the topics I kept getting wrong (private pools, Cloud NAT, hybrid paths, VPC Service Controls, GKE scaling and others)
- decision tables that turn a requirement in the question into a product choice
- a searchable keyword to product reference, with 187 rows across 17 sections
- quick cards for the four exam case studies: EHR Healthcare, Altostrat Media, Cymbal Retail and KnightMotives Automotive

![Searching the keyword reference for "Cloud Run"](docs/screenshots/keywords-search.png)

![The case studies tab](docs/screenshots/case-studies-tab.png)

Live version: https://davidrusho.com/tools/pca-study/
Write-up: https://davidrusho.com/posts/pca-study-app/

## Run it

Open `index.html` in a browser. There's no build step and no server to run: the page is static, and the keyword data loads from a plain script tag, so it works when opened straight from disk.

## Edit the keywords

The keyword reference is generated. Edit `data/keywords.md`, then run:

```
python3 build_keywords.py
```

That rewrites `keywords.js`, so don't edit `keywords.js` by hand (the next run overwrites it). The script reads each markdown table under a `## ` heading, plus the bullets under "Habits that find the answer". It uses only the Python standard library.

## Tests

```
python3 test_build_keywords.py
```

## Disclaimer

These are my personal study notes. They are not affiliated with or endorsed by Google, and they contain no real exam questions. Where I quote Google Cloud documentation, the quote is attributed and linked to the page it came from. Google Cloud documentation content is licensed under CC BY 4.0. Check the current documentation before relying on anything here, since products change.

## Licence

The code is MIT licensed, see `LICENSE`. The IBM Plex fonts in `fonts/` are licensed under the SIL Open Font License 1.1, see `fonts/OFL.txt`.
