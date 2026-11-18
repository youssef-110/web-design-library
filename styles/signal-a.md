---
name: Signal-A Studio
url: https://signal-a.studio/
category: studio
theme: light
mood: [editorial, bold, minimal]
signature: A full-width justified statement in capitals where each line mixes an ultralight condensed serif with heavy grotesk words, so the paragraph reads as a typographic pattern.
palette:
  - { hex: "#FFFFFF", role: canvas }
  - { hex: "#000000", role: type and rules }
  - { hex: "#D9D9D9", role: image placeholders and panels }
fonts:
  - { family: "PP Editorial New", role: display serif, weights: "100 ultralight, uppercase", free_alternative: "Instrument Serif in capitals, or Playfair Display 400 condensed with letter-spacing" }
  - { family: "Neue Haas Grotesk Text", role: display sans and body, weights: "400-700 uppercase", free_alternative: "Inter Tight 700" }
  - { family: "GT America Mono", role: navigation and labels, weights: "300 uppercase", free_alternative: "IBM Plex Mono 300" }
radius: "0 to 10px"
stack: [GSAP 3 ScrollTrigger, GSAP Observer, Lenis, Webflow, Swiper, CSS keyframes, Custom cursor]
checked: 2026-11-18
visual_check: true
---

# Signal-A Studio

**In one line:** a Warsaw and Berlin interface studio that introduces itself with one justified paragraph built from two typefaces, set like a poster.

## Colour
Black on white only. Grey (#D9D9D9) blocks hold images while they load. No accent colour; emphasis comes entirely from type weight.

## Type
The statement is set in capitals across the full width, justified, at roughly 72px (measured from the screenshot): most words in an ultralight condensed serif (PP Editorial New, weight 100), with the key words in a heavy grotesk. A smaller block below repeats the trick at about 17px in grotesk capitals with wide justified spacing. Navigation and metadata use GT America Mono at 12px uppercase, weight 300.

## Layout and rhythm
Six nav items spread across the top, each sitting on a full-width hairline. Two city names and their times sit under the right-hand items. The studio name appears in parentheses, centred, then the statement fills the width, then a narrower justified paragraph and a large image block.

## Shape, depth and texture
Hairline rules, square image blocks, a solid black dot as a bullet before the statement. No shadows or gradients.

## Motion
GSAP with ScrollTrigger and Observer drive section motion, Lenis smooths the scroll, Swiper runs carousels and two marquees scroll horizontally (20 and 30s loops). A custom cursor follows the pointer.

## Rebuild notes
- Statement: `text-align: justify; text-align-last: justify; text-transform: uppercase`, about 5vw (72px at 1440), line height 0.95; base face an ultralight condensed serif; wrap emphasised words in a heavy grotesk span at the same size.
- Secondary block: about 17px grotesk capitals, line height 1.0, justified with wide word gaps, placed in the middle four of six columns.
- Nav: six equal columns, label in 12px mono capitals, a 1px rule under each column.
- Library rules to weigh: the city times are ornament unless the studio's two locations matter to the visitor (SLOP11).

## Why it does not look generic
The mixed-typeface justified paragraph turns a plain "about us" sentence into the hero image. The two faces mirror the studio's claim (craft and engineering) without saying it.

## Steal this
- Justify a one-sentence statement across the full width in capitals and switch typeface on the words that matter.
- Pair an ultralight condensed serif with a heavy grotesk at the same size for contrast inside a line.
- Put each nav label on its own full-width hairline in a six-column grid.

## Not for
Long-form reading; justified capitals tire quickly beyond one paragraph. Languages with long compound words, which break the justification.
