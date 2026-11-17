---
name: tldraw
url: https://tldraw.dev
category: devtool
theme: light
mood: [technical, friendly, minimal]
signature: The hero shows a code panel and a live drawable canvas side by side, framed in electric blue with the real tool palette hovering at its corner.
palette:
  - { hex: "#FEFEFE", role: canvas }
  - { hex: "#404047", role: text }
  - { hex: "#155DFC", role: accent }
  - { hex: "#0D0D0D", role: button-dark }
  - { hex: "#18181B", role: code-panel }
  - { hex: "#099268", role: green }
fonts:
  - { family: "Archivo", role: display-and-body, weights: "semibold 600 headline, regular 400 body", free_alternative: "Archivo (Fontsource / Google Fonts)" }
  - { family: "Geist Mono", role: code, weights: "400-500", free_alternative: "Geist Mono (Fontsource / Google Fonts)" }
radius: "6px buttons, 2-4px frames"
checked: 2026-11-17
visual_check: true
---

# tldraw

**In one line:** an SDK page that proves the product in the hero, with code on the left and a working canvas on the right.

## Colour
Off-white canvas (#FEFEFE) with charcoal-grey text (#404047) and black headlines. A single electric blue (#155DFC) is used for the Quick Start button, links and the canvas border; its toolbar uses a 12-colour swatch palette in the sample picker. The code panel is near-black (#18181B) with syntax colours in pink, blue, green and orange.

## Type
Archivo semibold at about 48px for the headline, tightly set over two lines, left aligned, with 14px regular body and key phrases in bold. Command and code use a monospace (Geist Mono). The npm command is a black pill with white mono text and a copy icon.

## Layout and rhythm
A single container about 750px wide. Nav with logo, six menus, GitHub star count and a blue Quick Start. Then headline, one-sentence subtitle, npm command with a text link, and a two-up demo: App.tsx code card and the canvas with a toolbar floating at its bottom and a style panel hanging off its top right corner. A logo strip follows between hairline rules, then a two-column "Why tldraw" grid.

## Shape, depth and texture
Corners are small, 2 to 6px. The canvas has a thick blue border; the toolbar and style panel use white rounded UI with a faint shadow, copied from the product. The code card has a window-style tab.

## Motion
Not observed.

## Why it does not look generic
The demo is the actual SDK mounted on the page, so the example code and the result sit next to each other. The hovering style picker anchors a real tool in a marketing layout.

## Steal this
- Place a code snippet beside the running output it produces in the hero.
- Command-as-button: a black pill with a monospace install command and copy icon, plus a plain text alternative link.
- Let a floating toolbar overlap the demo frame edge to prove it is a live interface.

## Not for
Non-technical audiences; the page relies on readers wanting to see code.
