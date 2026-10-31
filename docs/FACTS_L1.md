# Verified Facts at L1 (2026-10-31)

lowriskquotes.com publishes the official UK figures its guides state as Verified Facts
(`verified-facts/0.3`, conformance **L1**, static files, unsigned). Spec:
https://databutler.dev/protocol/facts. Discovery: https://lowriskquotes.com/.well-known/facts.json.

## Records (4), all verified 2026-10-31 against the live page, quote in each record

| Key | Value | Source | Stated in |
|---|---|---|---|
| `uk-eng/permitted-development/front-garden-hard-surface-area` | 5 m2 | GPDO 2015 Sch 2 Pt 1 Class F.2, https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1 | patio, driveway guides |
| `uk-eng/permitted-development/max-curtilage-coverage` | 50 % | GPDO 2015 Sch 2 Pt 1 Class A.1(b), same page | conservatory guide |
| `uk-eng/building-regulations/exempt-conservatory-max-floor-area` | 30 m2 | Building Regulations 2010 Sch 2 Class 7, https://www.legislation.gov.uk/uksi/2010/2214/schedule/2 | conservatory guide |
| `uk/gas-safety/gas-safe-registration-required` | rule | HSE domestic gas FAQs, https://www.hse.gov.uk/gas/domestic/faqs.htm | new-boiler guide |

Keys follow spec §3.2: the three England-only rules use the ISO 3166-2 subdivision namespace `uk-eng` (as in `uk-sct/...`), and the GB-wide Gas Safe rule uses `uk`.

All are `changeCadence: irregular`, `nextExpectedChange: null`: they move only when an amending
statutory instrument is made, and there is no calendar for that. No `nextScheduledRefresh` is set,
because nothing re-checks them automatically yet.

None overlaps Data Butler's index (742 keys, read 2026-10-31). Data Butler has `uk/vat/*`, but the
site does not mention VAT, CIS or the trading allowance, so those are not published here.

Left out on purpose: the conservatory guide's line "since October 2010 most new conservatories need
to comply" (the Schedule 2 text does not support it; 1 October 2010 is only when the 2010 Regulations
came into force); Boiler Plus controls (no official page checked); the 2.2 m loft head height and the 1:60
patio fall (trade rules of thumb, not statute); every cost range (estimates). The guides state these
figures without citing a source. Linking each one to the page above would help both readers and
corroboration.

## How it is built

- Source: `web/data/facts-source.json`. Edit only this file, then run `npm run facts` in `web/`.
- Generator and checker are vendored unchanged from physics-star-cat/databutler (branch facts-v03,
  commit d4e2bf3) in `web/vendor/verified-facts/`, laid out as `facts-static.js` names in its header.
- `web/scripts/build-facts.cjs` writes `public/.well-known/facts.json`, `public/f/index.json` and
  `public/f/<key>.json`. `--check` (run by `npm test` and `npm run build`) fails if those files are stale,
  then runs the L1 conformance check over `public/` offline. `--online` also fetches every source (item 4).
- `/.well-known/changes.json` names `facts` (L1 item 5) through `data/changes/publisher.json`.
- Served by Vercel from `public/` as `application/json`. With `trailingSlash: true`, `.json` paths are not
  redirected (checked with `next start`). `/f/` has no index page and returns 404: `facts.index` is `/f/index.json`,
  and there is no `/f` app route or `/api/f` to collide with.

After deploy: `node web/vendor/verified-facts/facts-check.js https://lowriskquotes.com --level L1`.

## Cost of adoption (measured)

- **Timer: 3 minutes 11 seconds** of wall clock (20:16:52Z to 20:20:03Z), from creating `facts-source.json`
  to the vendored checker passing at L1 on the built output, all seven L1 items including the source fetches.
  An agent (Claude Opus 5.5) did the work. A person would take much longer.
- **Not in the timer:** reading the spec, the recipe and the repo, and searching the guides for official
  figures, all of which came before the timer started and were not measured. Also not in it: wiring
  `npm test` and `build`, llms.txt, the `/api` note, the serving check and this note, all done after it stopped.
- **Steps inside the timer: 9.** 1 branch and skeleton file; 2 fetch and read the three source pages; 3
  overlap check against the Data Butler index; 4 vendor 8 files; 5 write the 4 records; 6 write
  `build-facts.cjs`; 7 add `facts` to changes.json (publisher.json plus one line in build-changes.cjs);
  8 generate and run the offline check; 9 run the online check (item 4).
- **Records: 4.**
