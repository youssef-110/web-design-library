# Web design library

A web design skill for AI coding agents: a library of real, well-designed websites to learn taste from, and a numbered rule set for building pages that do not look AI-generated.

The references supply taste. The rules supply the craft and the checks. An agent that reads two or three references and follows the rules makes decisions that come from somewhere. An agent that reads nothing produces the average of the internet.

## What is in here

| Path | What it is |
|---|---|
| [`SKILL.md`](SKILL.md) | The skill: the workflow from brief to verified build, and which rules to load for which task |
| [`rules/`](rules) | Ten rule files, about 440 numbered rules: process, typography, colour, layout, components, motion, copy, accessibility, performance, anti-slop |
| [`rules/anti-slop.md`](rules/anti-slop.md) | The catalogue of patterns that mark a page as generated, each with what to do instead |
| [`CHECKLIST.md`](CHECKLIST.md) | The pre-ship check and the honest report format |
| [`scripts/slop-scan.mjs`](scripts/slop-scan.mjs) | A dependency-free scanner for the checkable anti-slop patterns |
| [`INDEX.md`](INDEX.md) | 91 site references in one table, grouped by category, with mood, signature move and palette |
| [`index.json`](index.json) | The same data, machine-readable |
| [`styles/`](styles) | One Markdown file per site, all in the same format |
| [`PATTERNS.md`](PATTERNS.md) | What the strong references have in common |
| [`recipes/`](recipes) | Build write-ups for techniques proven on a shipped page: working code, fallbacks, pitfalls |
| [`USING.md`](USING.md) | How to pick and apply references |
| [`SOURCES.md`](SOURCES.md) | The design skills the rules were informed by |
| [`TEMPLATE.md`](TEMPLATE.md) | The entry format, for adding a site |
| [`scripts/build-index.mjs`](scripts/build-index.mjs) | Validates entries and rebuilds the index |

## Install as a Claude Code skill

```bash
git clone https://github.com/youssef-110/web-design-library ~/.claude/skills/web-design-library
```

Then start any design task with "use the web design library". Other agents: point them at this repository and tell them to follow `SKILL.md`.

## The workflow in six steps

1. **Brief.** One sentence: what kind of page, for whom, feeling how.
2. **Subject world.** List five physical things from the product's subject. The direction comes from this list, not from the product's category.
3. **References.** Pick two or three from `INDEX.md`, at least one from outside the category. Take technique, never appearance.
4. **Commit.** Four lines before any code: world, signature, palette, type. Check them against `rules/anti-slop.md`.
5. **Build.** Tokens first, then every section, state and breakpoint, with real content.
6. **Verify.** In a browser, with `CHECKLIST.md` and the scanner, then report what was and was not verified.

## Scan a project for slop

```bash
node scripts/slop-scan.mjs path/to/src
```

It reports file, line, rule ID and a one-line fix, and exits 1 on errors. A clean scan is a floor, not a pass: most of the catalogue needs eyes on the page. `--self-test` checks the scanner itself.

## Add a site

1. Copy `TEMPLATE.md` to `styles/<site>.md`.
2. Look at the live site. Record only colours, fonts and measurements you can see or measure. Write the analysis in your own words.
3. Run `node scripts/build-index.mjs --check`. It validates the entry and regenerates `INDEX.md` and `index.json`.

## How it was made

Each site entry was written from the brand's own public website on the date in its `checked` field, and checked against a screenshot of it. Colours, font names and measurements are observations of that site on that day; sites change. The analysis is original writing. No screenshots, logos or site copy are stored here.

The rules are original writing, informed by the design skills credited in [`SOURCES.md`](SOURCES.md). No text was copied from them.

The idea of a design reference written for AI agents was inspired by [Refero Styles](https://styles.refero.design/), a much larger gallery with a full DESIGN.md per site. Nothing in this repository is copied from Refero. If you want their files, use their site or their official MCP connector.

All brand names and trademarks belong to their owners. This library describes their public websites for education and commentary and is not affiliated with any of them.

## Licence

Text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Scripts: MIT.
