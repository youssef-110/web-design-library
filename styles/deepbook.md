---
name: DeepBook
url: https://deepbook-v2-wip.webflow.io/
category: fintech
theme: dark
mood: [technical, bold, cool]
signature: A pinned split screen where a flat blue text panel steps through product names while an isometric line illustration beside it morphs from one financial primitive into the next.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#FFFFFF", role: text and light sections }
  - { hex: "#1E6EF3", role: accent panels and primary button }
  - { hex: "#1B1B1B", role: nav pill }
  - { hex: "#6A7681", role: hero line field }
fonts:
  - { family: "TWK Everett", role: display, weights: "500 display, 400 for 48px statements", free_alternative: "Inter Tight 500, or Host Grotesk 500" }
  - { family: "TWK Everett", role: body, weights: "400-500", free_alternative: "Inter (already loaded by the site as a fallback)" }
radius: "2 to 8px, nearly square"
stack: [GSAP 3 ScrollTrigger, GSAP SplitText, GSAP MorphSVG, GSAP DrawSVG, GSAP CustomEase, Lenis, Canvas 2D, Webflow]
checked: 2026-11-18
visual_check: true
---

# DeepBook

**In one line:** a developer-facing DeFi protocol site that explains a financial stack with pinned, scroll-scrubbed diagrams on a black page, using one electric blue as the only colour.

## Colour
Black canvas for most of the scroll, with one white section for the security story and a closing black band. A single blue (#1E6EF3) fills whole panels, the waitlist strip and the primary button; it is never used for text on black. Secondary text is white at 50 percent opacity rather than a grey.

## Type
One grotesk (TWK Everett) carries everything at weight 500, with tight negative tracking of -2 to -3 percent on every size. Display lines sit at 102px and 81px with a line height of 1.0, statements at 48px weight 400 with 1.15 line height, and the body at 18px. Sentence case throughout; small labels at 12px.

## Layout and rhythm
A 1440px container with a floating pill nav (dark #1B1B1B, blue Docs button) under a thin blue announcement strip. The hero is a full-viewport canvas of short vertical dashes that form slow wave bands, with the headline set low and centred. The signature section is a 4768px tall pinned stage: a square blue panel on the left steps through four statements with a dot progress indicator, while a white square on the right shows isometric line drawings on a dotted grid.

## Shape, depth and texture
Nearly square corners (2 to 8px), thin plus marks at panel corners, dotted grids, and isometric illustrations drawn in black lines with blue faces. No photography and no gradients beyond a black fade at the hero edges.

## Motion
The hero dash field animates on a canvas. Scrolling into the stack pins it for four viewport heights and scrubs each stage over 900px; the right-hand drawings morph between shapes with MorphSVG. Small isometric "cube" dividers between sections scrub over about 630px with a 1.1 second smoothing. Headings and info items reveal with opacity and a short rise on enter. Lenis smooths the scroll.

## Rebuild notes
- Type scale: 102 / 81 / 48 / 40 / 18 / 16 / 15 / 12px. Display weight 500, line height 1.0, tracking -0.02em. Statements 48px weight 400, line height 1.15, tracking -0.03em. Body 18px, line height 1.2, tracking -0.03em.
- Container 1440px max; text columns capped at about 470 to 740px.
- Pinned stack: ScrollTrigger on the stack wrapper, `scrub: true`, 3600px total, split into four 900px steps; each step crossfades the left statement and morphs the right drawing (MorphSVG, 0.5 to 0.75s eases inside the scrubbed timeline).
- Section dividers: ScrollTrigger with `scrub: 1.1`, start when the divider enters, end 630px later.
- Reveals: opacity and y with a custom ease, 0.6s, stagger 0.1s, toggled once on enter.
- Hover and nav: y moves at 0.25s `power3.out`; CSS transitions on transform at 0.4s `cubic-bezier(0.16, 1, 0.3, 1)`; small pops use `back.out(1.7)` at 0.35s.
- Hero field: a canvas of evenly spaced 2px vertical dashes in #6A7681 whose lengths and offsets follow travelling sine bands; black linear fade at top and bottom.
- Library rules to weigh: the pin lasts four viewport heights, which MOT26 caps at two. Split it or shorten it when you borrow the idea.

## Why it does not look generic
Financial primitives become physical objects (blocks, plates, bricks) in isometric line art instead of charts or 3D coins. The single blue is used as a material that fills panels, not as a highlight sprinkled on text. The explanation happens in one pinned place instead of a grid of feature cards.

## Steal this
- Explain a stack of capabilities in one pinned split screen: a solid colour panel steps through short statements on the left while a drawing on the right morphs to match, with a dot progress indicator.
- Draw abstract products as isometric line objects on a dotted grid, with one face filled in the accent colour, so diagrams feel like hardware.
- Keep every size of one grotesk at weight 500 with -2 to -3 percent tracking for a dense, engineered voice.

## Not for
Products for a general audience that expects warmth or photography. Pages that must work without heavy JavaScript, since the core explanation lives in a pinned, scrubbed sequence.
