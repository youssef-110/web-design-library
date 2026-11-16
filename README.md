# Web design library

A reference library of real, well-designed websites, written for AI coding agents and the people who direct them. Each entry describes one site: its colours, type, layout, depth and motion, why it does not look generic, and three techniques worth borrowing.

The point is taste, not templates. An agent that reads two or three entries before it designs makes decisions that come from somewhere. An agent that reads none produces the average of the internet.

## What is in here

| Path | What it is |
|---|---|
| [`INDEX.md`](INDEX.md) | Every reference in one table, grouped by category, with mood, signature move and palette |
| [`index.json`](index.json) | The same data, machine-readable |
| [`styles/`](styles) | One Markdown file per site, all in the same format |
| [`PATTERNS.md`](PATTERNS.md) | What the best entries have in common, and the moves that mark a page as AI-made |
| [`USING.md`](USING.md) | How an agent should pick and apply references |
| [`skill/SKILL.md`](skill/SKILL.md) | The same instructions packaged as a Claude Code skill |
| [`TEMPLATE.md`](TEMPLATE.md) | The entry format, for adding a site |
| [`scripts/build-index.mjs`](scripts/build-index.mjs) | Validates entries and rebuilds the index |

## Use it

Point your agent at this repository and tell it to follow `USING.md`. In short:

1. State the product, the audience and the feeling in one sentence.
2. Read `INDEX.md` and pick two or three entries: one for the overall world, one for type, one for a specific component or motion idea. Pick at least one from outside your product's category.
3. Read those entries in full. Take the technique from "Steal this"; do not copy the palette or the layout.
4. Write down the one move that will make your page recognisable with the logo covered, then build.

As a Claude Code skill:

```bash
git clone https://github.com/youssef-110/web-design-library ~/.claude/skills/web-design-library
```

Then ask for it by name ("use the web design library") when you start a design task.

## Add a site

1. Copy `TEMPLATE.md` to `styles/<site>.md`.
2. Look at the live site. Record only colours, fonts and measurements you can see or measure. Write the analysis in your own words.
3. Run `node scripts/build-index.mjs --check`. It validates the entry and regenerates `INDEX.md` and `index.json`.

## How the entries were made

Each entry was written from the brand's own public website on the date in its `checked` field. Colours, font names and measurements are observations of that site on that day; sites change. The analysis is original writing. No screenshots, logos or site copy are stored here.

The idea of a design reference written for AI agents was inspired by [Refero Styles](https://styles.refero.design/), a much larger gallery with a full DESIGN.md per site. Nothing in this repository is copied from Refero. If you want their files, use their site or their official MCP connector.

All brand names and trademarks belong to their owners. This library describes their public websites for education and commentary and is not affiliated with any of them.

## Licence

Text in `styles/`, `PATTERNS.md` and `USING.md`: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Scripts: MIT.
