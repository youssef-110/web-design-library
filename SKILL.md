---
name: web-design-library
description: Use for any task that designs, builds, redesigns or reviews a website, landing page, web app interface or component, so the work starts from studied references and a numbered rule set (process, type, colour, layout, components, motion, copy, accessibility, performance, anti-slop) and does not look AI-generated.
---

# Web design library

A reference library of real, well-designed websites plus a compact rule set for designing and building web pages. The references supply taste. The rules supply the craft and the checks. This file routes; the detail lives in `rules/`.

All paths are relative to this file's folder.

| Path | What it holds |
|---|---|
| `INDEX.md` | Every reference in one table: category, mood, signature, palette |
| `styles/` | One file per site: colour, type, layout, motion, techniques to borrow |
| `PATTERNS.md` | What the strong references share |
| `rules/` | The rule files, one per topic, each rule with an ID |
| `recipes/` | Build write-ups for techniques proven on a shipped page, with working code and the pitfalls found |
| `CHECKLIST.md` | The pre-ship check and the report format |
| `scripts/slop-scan.mjs` | A scanner for the patterns in `rules/anti-slop.md` |

## Workflow

Follow the steps in order. Steps 1 to 4 take a few minutes and decide most of the result.

1. **Brief.** Read the request, the repository and any links. Write one sentence: a (kind of page) for (who arrives, in what mood), that should feel (two or three words). Ask at most three questions, only about things that change the result. Detail: `rules/process.md` PRO1 to PRO7.
2. **Subject world.** Before opening a reference, list five physical things from the product's subject: objects, places, documents, tools, materials. The direction comes from this list, not from the product's category. PRO8 to PRO11.
3. **References.** Open `INDEX.md` and choose two or three entries: one for the world, one for type, one for a detail. At least one is from outside the product's category. Read each chosen file in `styles/` in full and take the technique, never the appearance. PRO12 to PRO16.
4. **Four-line commitment.** Write and show these before any code:
   - World: the subject-derived idea, in a phrase.
   - Signature: the one element a visitor would remember.
   - Palette: neutrals plus at most two colours, each with a job.
   - Type: display face, body face, and the one move that is not a default.

   Check the four lines against `rules/anti-slop.md`. Three or more matches means a new plan. PRO17 to PRO23.
5. **Build.** Load the rule files for the task from the table below. If a chosen reference links a recipe in `recipes/`, read it before writing that part: it carries the working code and the traps already hit. Define tokens first, then build every section, state and breakpoint with real content. PRO30 to PRO32.
6. **Verify.** Open the result in a browser and run `CHECKLIST.md` from top to bottom, including `node scripts/slop-scan.mjs <files or folders>`. Fix what fails, then write the report in the format at the end of the checklist. PRO33 to PRO39.

## Which rules to load

Always load `rules/process.md` and `rules/anti-slop.md`. Add the rows that match the task.

| Task | Load from `rules/` |
|---|---|
| Landing or marketing page | `layout`, `typography`, `color`, `copy`, `motion`, `components` |
| App interface, dashboard, settings | `components`, `layout`, `typography`, `color`, `accessibility` |
| Form or checkout flow | `components`, `copy`, `accessibility` |
| Docs, article or blog page | `typography`, `layout`, `copy`, `accessibility` |
| Portfolio or gallery | `layout`, `typography`, `motion`, `performance` |
| Redesign of an existing site | `process` (PRO24 to PRO29) first, then the files for whatever you change |
| Animation or transition work | `motion`, `accessibility` (A11.24 to A11.26), `performance` |
| Copy, labels, error messages | `copy` |
| Design review or critique | `anti-slop`, then the file for each problem found |
| Anything that ships | `accessibility` and `performance`, even when not listed above |

Each file is `rules/<name>.md`. Rule IDs use these prefixes: PRO, TYP, COL, LAY, CMP, MOT, CPY, A11, PRF, SLOP. Cite the ID when you explain a decision or a review finding.

## When rules collide

- The brief outranks the rules. A font, palette, layout or motion level the person pinned is done exactly and done well, even if `rules/anti-slop.md` lists it.
- The accessibility floor and honesty about what exists are never traded, whatever the brief says.
- Between two rules, the more specific one wins. A rule about tables beats a rule about layout in general.
- If something has no rule, decide, and say that you decided.

## Non-negotiables

1. **No placeholder code.** No comments that promise work later, no ellipsis standing in for code, no stub sections. If you must stop, stop at a clean boundary and say what is missing.
2. **Real content.** Believable copy in the product's own terms. No filler text, no placeholder names, no invented customers, quotes, prices or statistics. Label sample data as sample.
3. **Real states.** Every interactive element has hover, focus-visible, pressed, disabled and loading states. Every view that loads data has empty, loading and error states.
4. **Visible without JavaScript.** Content, navigation, links and forms are in the HTML. Nothing waits at opacity 0 for a script.
5. **Verify in a browser.** At 390 and 1440 wide, with no horizontal overflow at 320, by keyboard, with reduced motion on, with zero console errors. If you have no browser tool, say so and list each check as not run.
6. **Report honestly.** What was done, what was verified and how, what was not verified. Never claim a check that did not run. Name the references that shaped the work.

## What not to do with the references

- Do not copy a palette, a layout, a logo, an illustration, a photograph or a sentence from any referenced brand.
- Do not work from one reference alone, and do not average three into a safe middle.
- Do not present the result as affiliated with a referenced brand.

## Add a reference

1. Copy `TEMPLATE.md` to `styles/<site>.md`.
2. Look at the live site. Record only colours, fonts and measurements you can see or measure, and write the analysis in your own words. Store no screenshots, logos or site copy.
3. Run `node scripts/build-index.mjs --check`. It validates the entry and rebuilds `INDEX.md` and `index.json`.

## Sources

The rules are original writing informed by the design skills credited in `SOURCES.md`.
