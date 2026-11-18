# Web design library

A web design skill for AI coding agents. It pairs a library of real, well-designed websites with a numbered rule set, so an agent builds pages that start from studied references and do not look AI-generated.

The references supply taste. The rules supply the craft and the checks. An agent that reads two or three references and follows the rules makes decisions that come from somewhere. An agent that reads nothing produces the average of the internet.

| | |
|---|---|
| **116 site references** | One file per site in 14 categories, each written from the live site and checked against a screenshot of it |
| **25 measured in a browser** | Motion stack, easing, durations and scroll ranges probed in a headless browser, written up as rebuild notes |
| **437 numbered rules** | Ten files: process, typography, colour, layout, components, motion, copy, accessibility, performance, anti-slop |
| **41 scanner patterns** | A dependency-free scanner for the anti-slop rules a machine can check |
| **A pre-ship checklist** | 18 checks on the rendered page and a report format that separates verified from not verified |

## Install

### Claude Code

For every project:

```bash
git clone https://github.com/youssef-110/web-design-library ~/.claude/skills/web-design-library
```

For one project only, clone it into that project's `.claude/skills/web-design-library` instead.

The skill loads by itself for any task that designs, builds, redesigns or reviews a web page. To ask for it by name, say "use the web design library". To update:

```bash
git -C ~/.claude/skills/web-design-library pull
```

### Other agents

Clone the repository anywhere the agent can read, and tell it to follow `SKILL.md`. Every path inside is relative to that file.

### Requirements

The Markdown needs nothing. The scripts need [Node.js](https://nodejs.org) 22 or newer and no npm packages. `scripts/probe-site.mjs` also needs a local Chrome or Edge.

## The workflow in six steps

`SKILL.md` holds the full version. In short:

1. **Brief.** One sentence: what kind of page, for whom, feeling how.
2. **Subject world.** List five physical things from the product's subject. The direction comes from this list, not from the product's category.
3. **References.** Pick two or three from `INDEX.md`, at least one from outside the category. Take technique, never appearance.
4. **Commit.** Four lines before any code: world, signature, palette, type. Check them against `rules/anti-slop.md`.
5. **Build.** Tokens first, then every section, state and breakpoint, with real content.
6. **Verify.** In a browser, with `CHECKLIST.md` and the scanner, then report what was and was not verified.

## What is in here

| Path | What it is |
|---|---|
| [`SKILL.md`](SKILL.md) | The skill: the workflow from brief to verified build, which rules to load for which task, and what to do when rules collide |
| [`rules/`](rules) | The ten rule files. Every rule has an ID (PRO, TYP, COL, LAY, CMP, MOT, CPY, A11, PRF, SLOP) an agent can cite |
| [`rules/anti-slop.md`](rules/anti-slop.md) | The catalogue of patterns that mark a page as generated, each with what to do instead |
| [`CHECKLIST.md`](CHECKLIST.md) | The pre-ship check and the honest report format |
| [`INDEX.md`](INDEX.md) | Every reference in one table, grouped by category, with mood, signature move and palette, then grouped by measured motion stack |
| [`index.json`](index.json) | The same data, machine-readable |
| [`styles/`](styles) | One Markdown file per site, all in the format of [`TEMPLATE.md`](TEMPLATE.md) |
| [`PATTERNS.md`](PATTERNS.md) | What the strong references have in common, and a short list of the marks of a generated page |
| [`recipes/`](recipes) | Build write-ups for techniques proven on a shipped page: working code, fallbacks, pitfalls |
| [`USING.md`](USING.md) | How to pick and apply references |
| [`SOURCES.md`](SOURCES.md) | The design skills the rules were informed by |
| [`scripts/`](scripts) | The scanner, the index builder and the site probe, described below |

## Find a reference

`INDEX.md` groups every entry by category: ai, commerce, community, consumer-app, devtool, editorial, education, fintech, food, hardware, health, mobility, productivity and studio. Its last table, "By motion stack", lists the measured entries by tool (Lenis, GSAP ScrollTrigger, WebGL, the View Transitions API and so on), so a reference can be found by technique as well as by look.

To filter by mood, theme or category, query `index.json`:

```bash
node -e "const i=require('./index.json'); for (const e of i.filter(e => e.mood.includes('warm') && e.theme === 'light')) console.log(e.slug, '|', e.signature)"
```

## Scripts

### Scan a project for slop

```bash
node scripts/slop-scan.mjs path/to/src
```

It reports file, line, rule ID and a one-line fix for HTML, JSX, TSX, Vue, Svelte, Astro, CSS, SCSS, JS, TS and Markdown files, and skips `node_modules`, `dist`, `build` and similar folders.

- `--json` prints the findings as JSON.
- `--self-test` runs every pattern against a known bad and a known good snippet.
- A line containing `slop-ok` is skipped, for a deliberate case such as a quoted bad example.
- Exit code 1 means at least one error-level finding, 2 means no paths were given.

A clean scan is a floor, not a pass: most of the catalogue needs eyes on the page.

### Rebuild the index

```bash
node scripts/build-index.mjs --check
```

Validates every entry in `styles/` (required fields, sections, hex values, no em or en dashes, rebuild notes when a stack is listed) and regenerates `INDEX.md` and `index.json`. With `--check` it exits 1 on any problem. Never edit `INDEX.md` or `index.json` by hand.

### Measure a live site

```bash
node scripts/probe-site.mjs <tmp-dir> <slug>=<url>
```

Opens the site in headless Chrome or Edge and writes `<slug>.json` (type scale, colours, borders, radii, container widths, CSS transitions and animations, GSAP tweens and ScrollTriggers, smooth scroll, WebGL and framework hints) plus four screenshots at different scroll depths. Several `<slug>=<url>` pairs can be given at once.

- For a site behind an entry or consent screen, use `<slug>=<url>|<button text>` to press that button first. Always pick the decline or no-sound option.
- Set `CHROME_PATH` if the browser is not in a usual install path. If the browser will not start from Node, launch it yourself with `--headless=new --remote-debugging-port=9333` and run the script with `NOSPAWN=1`.
- Write to a folder outside the repository. The screenshots are for looking at, not for committing.

## Add a site

1. Copy `TEMPLATE.md` to `styles/<site>.md`.
2. Look at the live site, or measure it with `scripts/probe-site.mjs`. Record only colours, fonts and measurements you saw or measured, and write the analysis in your own words. If you measured the motion, fill `stack` and the "Rebuild notes" section.
3. Run `node scripts/build-index.mjs --check`. It validates the entry and regenerates `INDEX.md` and `index.json`.

Store no screenshots, logos, code or site copy in the library.

## How it was made

Each site entry was written from the brand's own public website on the date in its `checked` field, and checked against a screenshot of it. Colours, font names and measurements are observations of that site on that day; sites change. The analysis is original writing. No screenshots, logos or site copy are stored here.

The rules are original writing, informed by the design skills credited in [`SOURCES.md`](SOURCES.md). No text was copied from them.

The idea of a design reference written for AI agents was inspired by [Refero Styles](https://styles.refero.design/), a much larger gallery with a full DESIGN.md per site. Nothing in this repository is copied from Refero. If you want their files, use their site or their official MCP connector.

All brand names and trademarks belong to their owners. This library describes their public websites for education and commentary and is not affiliated with any of them.

## Licence

Text: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Scripts: MIT. See [`LICENSE`](LICENSE).
