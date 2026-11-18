---
name: Mecha Capital
url: https://mecha-xyz.webflow.io/
category: fintech
theme: light
mood: [editorial, technical, calm]
signature: A fixed left column with an outlined isometric letter and a numbered index of investments, beside a right column where a light serif manifesto at 60 to 80px gives way to staggered robotics footage.
palette:
  - { hex: "#FFFFFF", role: canvas }
  - { hex: "#262933", role: ink at 100, 60 and 45 percent }
  - { hex: "#EBF0F0", role: cool panels }
  - { hex: "#EBEAE0", role: warm panels }
  - { hex: "#911A46", role: join action card }
fonts:
  - { family: "Flecha M", role: display, weights: "400", free_alternative: "Newsreader 400, or Instrument Serif" }
  - { family: "Neue Haas Grotesk", role: body and labels, weights: "400, 10px uppercase labels", free_alternative: "Inter 400" }
radius: "0 to 1px, square"
stack: [GSAP 3 ScrollTrigger, GSAP SplitText, GSAP CustomEase, GSAP DrawSVG, GSAP Observer, Lenis, Webflow, Autoplay video, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Mecha Capital

**In one line:** a robotics investment firm that writes like a journal: a serif manifesto, a numbered portfolio index and quiet technical drawings on white.

## Colour
White with ink (#262933) at three opacities (100, 60 and 45 percent) for hierarchy, and pale cool and warm grey panels for groups. One deep wine colour (#911A46) fills the "join" card fixed at the bottom right. Footage of robots and machines supplies the rest.

## Type
Flecha M, a light, sharp serif, sets the manifesto at 80px and statements at 60px with line height 0.92 and -0.02em tracking. Neue Haas Grotesk handles everything else at 10 to 16px, with 10px uppercase labels at +0.01em as the most used style.

## Layout and rhythm
Two columns. The left third is fixed: the wordmark, an outlined isometric "M" drawn in thin lines and a numbered index of portfolio companies whose active row highlights as you scroll. The right two thirds scroll: the manifesto, then staggered photographs and videos of each company. Top-right nav items sit in boxed tabs with 1px borders, the active one filled black. Small outlined pill tags are joined by a line ("PE discipline", "VC upside").

## Shape, depth and texture
Square boxes and 1px borders at 15 percent black, thin-line isometric drawings, and no shadows. The wine card has a small corner mark.

## Motion
Section ScrollTriggers scrub with heavy smoothing (`scrub: 2`, and `scrub: 5` on the hero over 1300px), so movement trails the scroll. Each portfolio section has a scrubbed timeline and a toggled one, which drives the active index row. Line drawings draw in (DrawSVG), text splits (SplitText) and custom eases shape the reveals. Accordions open with height transitions (0.2 to 0.8s).

## Rebuild notes
- Display: light serif 400, 80px and 60px, line height 0.92, tracking -0.02em, colour #262933.
- Labels: 10px uppercase, line height 1.5, +0.01em; body 12px / 1.32, +0.02em; secondary text at 60 and 45 percent opacity instead of greys.
- Layout: `grid-template-columns: 1fr 2fr`, left column `position: sticky; top: 0; height: 100svh` with the index pinned to its bottom.
- Index sync: one ScrollTrigger per company section, `onToggle` sets the active row; the bar under the active row grows with that section's progress.
- Smoothing: `scrub: 2` for section moves and `scrub: 5` for the hero, so motion lags the wheel by about two to five seconds' worth of easing.
- Line drawings: SVG outline paths drawn with DrawSVG (or `stroke-dasharray` and `pathLength`) when the section enters.

## Why it does not look generic
An investment firm reads like a field journal of machines: a serif manifesto, isometric technical drawings and a numbered index, instead of logos and growth charts. Heavy scrub smoothing gives the page a mechanical, weighted feel.

## Steal this
- Fix a numbered index of items in a left column and highlight the row of the section in view.
- Pair a light serif manifesto with 10px uppercase labels and nothing in between.
- Join two small outlined tags with a line to show a relationship ("this, plus that") instead of writing it.

## Not for
Consumer products that need bright, friendly energy. Phones, unless the fixed left column collapses into a top index.
