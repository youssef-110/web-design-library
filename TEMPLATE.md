---
name: Example Site
url: https://example.com
category: fintech            # one of: ai, devtool, fintech, productivity, consumer-app, health, commerce, food, hardware, studio, editorial, mobility, education, community
theme: light                 # light | dark | mixed
mood: [calm, editorial]      # 2 to 4 words from: calm, bold, playful, editorial, technical, luxurious, warm, cool, loud, minimal, tactile, cinematic, friendly, serious
signature: One sentence naming the single move that makes this site recognisable with the logo covered.
palette:
  - { hex: "#ffffff", role: canvas }
  - { hex: "#111111", role: text }
  - { hex: "#ff5a00", role: accent }
fonts:
  - { family: "Family Name", role: display, weights: "600-800", free_alternative: "Free Font on Fontsource or Google Fonts" }
  - { family: "Family Name", role: body, weights: "400-500", free_alternative: "same" }
radius: "0-4px sharp"        # short description: sharp, 8px soft, 20px+ round, pills
stack: [GSAP 3 ScrollTrigger, Lenis]   # optional: motion and rendering stack as measured (scripts/probe-site.mjs). If present, "## Rebuild notes" is required
checked: 2026-11-16          # date the live site was looked at
visual_check: true           # true only if the page was seen (screenshot or browser), not just its tokens
---

# Example Site

**In one line:** what the page feels like and who it is for, in your own words.

## Colour
How colour is used, not only which colours: what share of the page is neutral, where the accent appears, what it never touches. Two to four sentences.

## Type
Display and body faces, weights, size relationships, tracking, case. What the type does that a default would not. Two to four sentences.

## Layout and rhythm
Grid, container width, alignment, section rhythm, density, how the hero is composed. Two to four sentences.

## Shape, depth and texture
Radii, borders, shadows, imagery style (photo, 3D, illustration, product UI), texture. Two to three sentences.

## Motion
What moves and how (only what you could observe or the page clearly shows). Write "not observed" if unknown.

## Rebuild notes
Optional, required when `stack` is set. The measured numbers an agent needs to rebuild the feel without the site's code: type scale (px, weight, line height, tracking), container widths and gutters, easing curves and durations, scroll ranges (pinned or scrubbed, and over how many viewport heights), text-splitting method, and which free font gets closest. Facts from `scripts/probe-site.mjs` or the browser, written as a short list. Never paste the site's code, copy or assets.

## Why it does not look generic
The one to three decisions that came from this brand's subject rather than from a template.

## Steal this
- Three transferable techniques, each one concrete enough to apply to another product. Technique, not the look.

## Not for
One or two cases where copying this direction would be a mistake.
