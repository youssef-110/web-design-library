---
name: David Estrada
url: https://david-estrada.dev/
category: studio
theme: mixed
mood: [bold, friendly, playful]
signature: Section titles in a black grotesk at 130 to 300px, with glossy 3D app icons floating in and around the letters and project mockups overlapping the words.
palette:
  - { hex: "#0A0806", role: dark sections and text }
  - { hex: "#FFFFFF", role: light sections and text on dark }
  - { hex: "#C85000", role: hire button and closing section }
  - { hex: "#17140F", role: raised surfaces on dark }
fonts:
  - { family: "Neue Haas Grotesk Display", role: display, weights: "700 for giant titles, 400 for 50px statements", free_alternative: "Inter Display 700, or Inter Tight 700" }
  - { family: "Satoshi", role: body, weights: "500", free_alternative: "Satoshi (Fontshare, free)" }
radius: "20px on cards and buttons, 12px on small controls"
stack: [WordPress, CSS keyframes, CSS transitions, WebGL, Split words]
checked: 2026-11-18
visual_check: true
---

# David Estrada

**In one line:** a freelance web designer's portfolio that sells through scale and objects: enormous black words, glossy 3D tool icons and real project mockups overlapping the type.

## Colour
Sections alternate between near-black (#0A0806, a warm black) and white, so the page reads in bands. One burnt orange (#C85000) is used for the hire button and the closing contact band, nowhere else. The hero headline uses white for the first clause and grey for the second.

## Type
Neue Haas Grotesk Display at 700 sets section titles between 130 and 303px, with tracking of -0.04em and line height 0.9, so words become graphic blocks. Statements use the same family at 400 and 50px with -0.025em. Body copy is Satoshi 500 at 16 to 23px with a 1.4 line height.

## Layout and rhythm
Full-width bands. The hero is a two-tone headline, a big orange button with the designer's face in it and a text link, then the name in giant type along the bottom with 3D icons (design and CMS tools) floating at different depths. Work entries place a large mockup over the giant section word, with the project title and a case-study link on the right.

## Shape, depth and texture
20px rounded cards and buttons, glossy rendered 3D app tiles, and real website screenshots in device frames. No borders; depth comes from overlap and the 3D objects.

## Motion
Headlines split into words that rise in (1.1s) and then change colour word by word as you scroll (0.6s colour transitions on 196 word spans). Cards translate (1.1s) and scale (0.9s) in on one easing, `cubic-bezier(0.16, 1, 0.3, 1)`. Named keyframes cover a coin pop, a slot opening, a slide wipe and a slow 7s float on the 3D feature. No GSAP: CSS keyframes and transitions driven by a small script.

## Rebuild notes
- Giant titles: 130 to 303px (clamp around 21vw), weight 700, line height 0.9, tracking -0.04em.
- Statements: 50px weight 400, line height 1.08, tracking -0.025em. Body: 16px / 1.4 Satoshi 500; lead text 21.6 to 23px.
- One easing for the whole site: `cubic-bezier(0.16, 1, 0.3, 1)`. Durations: colour 0.6s, translate 1.1s, scale 0.9s, hover 0.25 to 0.3s.
- Word colour scrub: split headings into word spans, toggle a class per word as its position passes a scroll threshold, transition `color 0.6s`.
- Float: one 3D object with a 7s infinite translate-and-rotate keyframe; keep it to one element and stop it under reduced motion.
- 3D icons: rendered tiles (WebGL or pre-rendered PNG sequences) positioned absolutely around the giant word, each at a different scale for depth.

## Why it does not look generic
The tools of the trade (design app, CMS, page builder, freelance platform) appear as physical objects instead of a logo strip. The giant words act as the layout grid for the work rather than as decoration above it.

## Steal this
- Use a section's title at 20vw as the backdrop, and overlap the section's main image across it.
- Put a face inside the primary button for a one-person business, so the action reads as "hire this person".
- Run the whole site on one easing curve with three durations (fast hover, medium colour, slow movement).

## Not for
Teams or companies; the design depends on one personality. Content with long titles, which break the giant-word layout.
