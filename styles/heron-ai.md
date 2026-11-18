---
name: Heron AI
url: https://heronaiapp.com/
category: ai
theme: light
mood: [technical, editorial, calm]
signature: An engraving-style drawing of a concrete modernist house on off-white paper, framed by blueprint hairlines with registration crosses, where small orange squares mark the issues the AI found.
palette:
  - { hex: "#F2F2F1", role: paper canvas }
  - { hex: "#FFFFFF", role: cells }
  - { hex: "#282828", role: ink at 100 and 72 percent }
  - { hex: "#B3B3AF", role: blueprint rules }
  - { hex: "#FA3600", role: issue markers, contact and accept }
fonts:
  - { family: "BT Grotesk", role: display and body, weights: "600-700 uppercase display, 400-500 body", free_alternative: "Schibsted Grotesk 700 uppercase, or Archivo 700" }
  - { family: "Geist Mono", role: labels and nav, weights: "500 uppercase at 8-12px", free_alternative: "Geist Mono (Google Fonts)" }
radius: "0px, square; round only for status dots"
stack: [GSAP 3 ScrollTrigger, GSAP SplitText, GSAP Observer, GSAP TextPlugin, Barba, Lenis, Webflow, Swiper, CSS keyframes, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Heron AI

**In one line:** an AI agent for architects' design tools presented as a drawing set: paper, hairline frames, an engraved building and orange markups.

## Colour
Off-white paper and white cells with dark ink at full and 72 percent opacity, grey hairlines for the frame, and one signal orange (#FA3600) used exactly as a reviewer's markup: issue squares on the drawing, the contact link and the primary button.

## Type
BT Grotesk in uppercase at weights 600 to 700 for headings from 20 to 47px, line height 1.0, tracking -0.02em. Body text is 13px at 400 to 500. Geist Mono at 8 to 12px uppercase labels nav cells, metadata and annotations; it is the second most used style on the page.

## Layout and rhythm
The page is a framed sheet: hairline rules divide the viewport into cells with small plus marks at the intersections, like a title block. Nav items are cells along the top with labels in their top-left corners. The hero drawing sits in the middle cell; the headline occupies the bottom-left cell, the description the next one, and a "discover more" link the last.

## Shape, depth and texture
Engraving and hatch textures on the illustrations, square cells, thin grey borders and orange 1px outlines on active elements. No shadows.

## Motion
GSAP drives 200-plus tweens: lines of split text rise with `autoAlpha` and `yPercent` (0.8s `power2.out`, 0.02s stagger); illustrations reveal with stepped mask-position animations (`steps(19)` over 0.58s) that look hand-drawn frame by frame; colours snap with `circ.in` at 0.15s; scale moves use `expo.out` at 1.6s. Dashed connector lines flow along diagrams, Barba handles page transitions and Lenis smooths the scroll. CSS transforms use `cubic-bezier(0.625, 0.05, 0, 1)` at 0.48s.

## Rebuild notes
- Frame: a CSS grid with 1px #B3B3AF borders; place 9px plus marks (two crossed 1px lines) at each intersection with absolute positioning.
- Headline: 40 to 47px uppercase weight 700, line height 1.0, tracking -0.02em, two lines in the bottom-left cell.
- Stepped mask reveal: put the illustration under a `mask-image` sprite strip of 19 frames and animate `mask-position` with `steps(19)` over 0.58s.
- Line reveal: split by lines, each line in an overflow-hidden wrapper, from `yPercent: 100; opacity: 0` with `power2.out`, 0.8s, 0.02s stagger.
- Markups: 10px orange squares placed on the drawing at issue points, each linked to a note in a side cell.

## Why it does not look generic
The interface is an architect's drawing sheet, so the audience recognises its own working material. Orange appears only where a reviewer would mark a problem, which explains the product without words.

## Steal this
- Frame the page as the audience's own document format (here a drawing sheet with a title block and registration marks).
- Use the accent colour only as markup on the main image, the way a reviewer would.
- Reveal illustrations with a stepped mask so they appear drawn rather than faded in.

## Not for
Consumer apps where a technical drawing sheet would feel cold. Products whose users do not work with drawings or documents.
