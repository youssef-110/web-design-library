---
name: web-design-library
description: Reference library of real, well-designed websites with colour, type, layout and technique notes. Use before designing or redesigning any web page, landing page or brand surface, so design decisions come from studied references and the product's own subject instead of category defaults.
---

# Web design library

The library root is the parent of this folder. All paths below are relative to it.

Before you design anything:

1. Read `USING.md` and follow its six steps. They are short.
2. Read `INDEX.md` to choose two or three references (one for the world, one for type, one for a detail; at least one outside the product's category).
3. Read the chosen files in `styles/` in full.
4. Read `PATTERNS.md`, section "Marks of a generated page", and check your plan against it before writing code.

Hard rules:

- Take technique, never appearance. Do not copy a palette, a layout, a logo, an illustration or site copy from any referenced brand.
- Never work from a single reference.
- State your four-line commitment (world, signature, palette, type) to the person you work for before building.
- When you finish, name the references that shaped the work in your hand-off.

To add a reference, copy `TEMPLATE.md`, fill it in from the live site in your own words, and run `node scripts/build-index.mjs --check`.
