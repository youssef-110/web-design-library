---
name: Justin Jefferson
url: https://jjettas.com/
category: editorial
theme: dark
mood: [bold, loud, cinematic]
signature: A grainy deep-purple page where an athlete's own words are set in a condensed sports-jersey face, centred and stacked in tan capitals between oversized quote marks.
palette:
  - { hex: "#171220", role: purple-black canvas }
  - { hex: "#F4EFE6", role: cream text and light sections }
  - { hex: "#B0A89D", role: tan display text }
  - { hex: "#9E6DE9", role: purple accent }
  - { hex: "#EEAC1A", role: gold accent }
fonts:
  - { family: "Beachwood", role: display, weights: "variable 200-900, 700 uppercase for titles, 300 tracked for subtitles", free_alternative: "Anton, or Bebas Neue for tighter widths" }
  - { family: "Custom sans (fontBody)", role: body, weights: "400 and 800", free_alternative: "Inter 400 and 800" }
  - { family: "Custom mono (fontMono)", role: labels, weights: "500 uppercase, +0.16em", free_alternative: "JetBrains Mono 500" }
radius: "pills on controls, 4px on cards"
stack: [Next.js, Lenis, Canvas 2D, Autoplay video, CSS keyframes, CSS transitions]
checked: 2026-11-18
visual_check: true
---

# Justin Jefferson

**In one line:** a star receiver's personal site that reads like a team's broadcast package: club colours, film grain and huge condensed capitals carrying first-person quotes.

## Colour
A purple-black (#171220) with heavy film grain is the base, echoing the team's colours, with cream (#F4EFE6) for body text and cream sections. Display type is a warm tan (#B0A89D) rather than white. Purple (#9E6DE9) and gold (#EEAC1A) appear as accents on details only.

## Type
Beachwood, a condensed display, at weight 700 uppercase from 137 to 433px, line height 0.83 to 0.9 and tracking -0.015 to -0.03em; a weight 300 cut with wide tracking (+0.07em) sets subtitles. Body copy is a custom sans at 14 to 15px (weight 800 for 20 to 31px leads). A mono at 11px uppercase with +0.16em tracking labels sections.

## Layout and rhythm
A preloader shows the athlete's monogram with a percentage. Long chapters follow: a giant name over a hero, a "building something that lasts" section with floating cards and strips, and centred quote sections where a statement fills the screen between large quote marks with a two-line explanation under it. A monogram top left, a two-line menu icon top right and a sound toggle bottom right are the only chrome.

## Shape, depth and texture
Film grain over everything, soft vignettes and dark gradients over video. Cards float with soft shadows; controls are pills.

## Motion
Transforms on `cubic-bezier(0.22, 1, 0.36, 1)` over 0.65s; clip-path reveals over 0.38s on `cubic-bezier(0.16, 1, 0.3, 1)`. Rows slide in, grid cells drop in, strips enter, and cards float on slow loops (6.4 to 7.5s). Background text marquees drift in opposite directions over 90s, a partner marquee runs at 80s, and an equaliser animation shows the sound state.

## Rebuild notes
- Display: condensed 700 uppercase, 137 to 433px, line height 0.83 to 0.9, tracking -0.015 to -0.03em, colour #B0A89D on #171220.
- Quote block: 137px capitals, three to four lines, centred, with quote marks at 60 percent of the text size above; a 15px two-line caption below in cream.
- Grain: an SVG feTurbulence (baseFrequency about 0.9) layer at 8 to 12 percent opacity fixed over the page, with a radial vignette.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` at 0.65s for moves; `cubic-bezier(0.16, 1, 0.3, 1)` at 0.38s for clip-path reveals.
- Library rules to weigh: the endless marquees and floating loops are decoration (SLOP52, SLOP53); keep one, and give the sound toggle a real state.

## Why it does not look generic
The type looks like a jersey number and the palette is the team's, so the site feels like the athlete's world rather than a personal homepage template. Quotes are set as the main content, not as testimonials.

## Steal this
- Set a person's own sentence as the page's headline at poster scale, centred, between oversized quote marks.
- Choose the display face from the subject's uniform or signage (here sports lettering).
- Lay heavy film grain over a dark, saturated base so flat colour feels like broadcast footage.

## Not for
Corporate or service sites where first-person quotes would feel staged. Content that needs long reading, since the condensed display carries most of the page.
