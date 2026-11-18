---
name: Belgrade Arbor
url: https://belgradearbor.rs/en
category: commerce
theme: mixed
mood: [luxurious, warm, cinematic]
signature: An architectural render of a tree-branch facade revealed through a glass-refraction distortion with rainbow edges, then deep forest-green pages with a cream serif in tall capitals.
palette:
  - { hex: "#FDFBEF", role: cream canvas and text on green }
  - { hex: "#2E3A26", role: forest green text and sections }
  - { hex: "#314759", role: slate blue panels }
  - { hex: "#A68150", role: bronze logo and details }
  - { hex: "#CCBF99", role: sand rules }
  - { hex: "#E7FD55", role: lime link accent }
fonts:
  - { family: "PP Editorial Old", role: display, weights: "300-400 with italic, uppercase titles", free_alternative: "Gloock, or Playfair Display 400" }
  - { family: "Work Sans", role: body, weights: "400-500", free_alternative: "Work Sans (Google Fonts)" }
radius: "pills on the nav and buttons, 20 to 28px on cards"
stack: [Next.js, Lenis, WebGL, Autoplay video, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Belgrade Arbor

**In one line:** a residential and business complex sold before it is built, using the building's own tree motif, forest greens and a classical serif.

## Colour
Cream (#FDFBEF) and forest green (#2E3A26) alternate as the main pair, with green sections lit by soft radial gradients from a corner. Slate blue, sand and bronze come from the building materials. A lime (#E7FD55) marks text links such as "explore our apartments".

## Type
PP Editorial Old at 300 to 400: titles in capitals at 100 to 240px with line height 1.0, statements at 48 to 56px in italic with slight positive tracking (+0.02em). Work Sans carries body text at 14 to 16px and uppercase labels at 16 to 20px with +0.02em.

## Layout and rhythm
A dark floating pill nav (menu left, bronze logo centre, an outlined "inquire" pill right). The hero is a full-bleed render revealed with a refractive glass distortion. Green sections place a two-line capital headline top left, the last word partly faded, with a short paragraph and a lime link on the right, and a progress line bottom left.

## Shape, depth and texture
Pill shapes for nav and buttons, rounded cards (20 to 28px), soft radial lighting in green sections, and architectural renders with people blurred in motion.

## Motion
The hero render appears through a WebGL glass-refraction effect with chromatic edges. Headline words fade in letter by letter at the end of a line. Interface transitions run 0.5 to 0.65s on the standard ease (`cubic-bezier(0.4, 0, 0.2, 1)`). Looping videos and Lenis smoothing throughout.

## Rebuild notes
- Display capitals: serif 300 to 400, 100 to 151px (240px for the largest), line height 1.0, normal tracking. Italic statements 56px / 1.1 at +0.02em.
- Body: Work Sans 16px / 1.2, labels 20px uppercase / 1.5 at +0.02em.
- Green sections: `background: radial-gradient(at 100% 100%, #3E562E, #2F3A26)` so light seems to fall from one corner.
- Glass reveal: a WebGL plane sampling the render through a displacement map of vertical glass ribs, with a small RGB offset at the edges; animate the displacement strength from high to zero over 1.2s.
- Transitions: name the properties; the site uses `transition: all` widely (SLOP51).

## Why it does not look generic
The tree-branch facade gives the brand its motif and its name, and the greens and bronze come from it. The glass reveal suggests looking through the building's own windows.

## Steal this
- Take the palette from the building or product materials (stone, bronze, foliage) rather than from a brand guide.
- Reveal the hero image through a refractive glass effect instead of a fade.
- Light dark sections with a corner radial gradient so they feel like rooms, not flat panels.

## Not for
Tech or product brands; the classical serif and greens read as property and hospitality. Pages that cannot afford a WebGL hero on mobile.
