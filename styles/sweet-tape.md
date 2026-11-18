---
name: Sweet Tape
url: https://sweet-tape.com/
category: commerce
theme: mixed
mood: [playful, loud, tactile]
signature: Condensed black type set wider than the screen on crumpled lime paper, with 3D tape rolls tumbling across the letters and a paper tab marked "pull me" hanging from the top edge.
palette:
  - { hex: "#034102", role: deep green, base and type }
  - { hex: "#B6FE00", role: lime paper field }
  - { hex: "#FA8005", role: orange product field }
  - { hex: "#FCD805", role: yellow product field }
  - { hex: "#F4F3EF", role: paper white }
fonts:
  - { family: "Futura PT Condensed", role: display, weights: "800, uppercase at 87 to 550px", free_alternative: "League Gothic, or Barlow Condensed 800" }
  - { family: "Inter Tight", role: body, weights: "600", free_alternative: "Inter Tight (Google Fonts)" }
  - { family: "Nothing You Could Do", role: handwritten notes, weights: "400", free_alternative: "Nothing You Could Do (Google Fonts)" }
radius: "circles for product badges, 25 to 77px on stickers and panels"
stack: [Next.js, Lenis, WebGL, Split words, CSS transitions, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Sweet Tape

**In one line:** a family tape brand that behaves like a sticker book: shouting condensed type, crumpled paper backgrounds and real 3D tape rolls you can almost peel.

## Colour
Two greens do most of the work: a deep forest green (#034102) for type and dark bands, and an acid lime (#B6FE00) as the paper colour. Each product line brings its own field colour (orange, yellow, sky blue) on its packaging and section. There is no grey; every surface is a printed colour.

## Type
Futura PT Condensed at 800 weight is the brand voice, uppercase, from 87px up to 550px, with tight line heights (0.73 to 0.82) and tracking around -0.03em, so words fill and overflow the screen. Inter Tight 600 at 16px handles the few sentences of body text. A handwritten script adds small annotations.

## Layout and rhythm
Each section is built around one huge word or phrase that runs off both edges, with products placed over it. The hero stacks a small "we're here to" line with the logo badge, then two lines of giant type, then a curved green horizon from which a tape roll rises. Long scroll sections (one over 8800px) move products across giant words.

## Shape, depth and texture
Crumpled paper texture on the colour fields, die-cut circular product badges with drop shadows, rendered 3D tape rolls, and a torn paper tab for the menu. The tape metaphor is literal: things peel, stick and pull.

## Motion
Springy, overshooting easing on interactions: `cubic-bezier(0.34, 1.56, 0.64, 1)` at 0.4 to 0.45s for transforms and translates, so stickers bounce into place. Products rotate and drift across the giant type as you scroll, headings are split into words, footer links roll on hover, and Lenis smooths the scroll. A custom cursor and a sound toggle add to the toy-like feel.

## Rebuild notes
- Giant type: Futura PT Condensed 800 (League Gothic as the free stand-in), uppercase, 87 to 550px, line height 0.73 to 0.82, tracking -0.03em; let it overflow with `white-space: nowrap` and `overflow: clip` on the section.
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` at 400 to 450ms for anything that lands; settle easing `cubic-bezier(0.22, 1, 0.36, 1)` at 750ms for larger moves.
- Paper texture: a tiled photo of crumpled paper multiplied over the flat colour (`background-blend-mode: multiply`), not a noise filter.
- Product badges: circles with a 1 to 2px darker rim and an offset drop shadow (about 0 12px 24px at 25 percent), so they read as stickers.
- Library rules to weigh: overshoot easing is SLOP50 for interfaces; here it is the brand's voice. Keep it on objects, not on menus and form controls.

## Why it does not look generic
Every visual idea comes from tape: peeling tabs, stuck-on badges, crumpled backing paper, rolls that tumble. The typography is set at a size that turns the slogan into a physical banner.

## Steal this
- Turn the menu into an object from the product's world (here a paper tab you pull) instead of a hamburger icon.
- Let one word per section run off both edges at poster size, and move the product across it on scroll.
- Use a real paper texture blended into flat brand colours so the page feels printed.

## Not for
Serious, regulated or premium products; the bounce and shouting type read as a toy. Sites that need dense information, since most sections carry one word.
