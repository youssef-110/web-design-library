---
name: Bulletproof
url: https://www.wearebulletproof.com/
category: studio
theme: mixed
mood: [luxurious, cinematic, editorial]
signature: A full-bleed brand-experience video under a giant uppercase grotesk headline whose lines are pushed to different horizontal positions, then a pale page where a single serif monogram is drawn in a thin line.
palette:
  - { hex: "#181713", role: dark hero and type }
  - { hex: "#F1F1F1", role: light canvas }
  - { hex: "#FFFFFF", role: text on video }
  - { hex: "#000000", role: video sections }
fonts:
  - { family: "Sequel Sans", role: display, weights: "400-500, uppercase, very tight tracking", free_alternative: "Inter Tight 500 uppercase, or Archivo 500" }
  - { family: "Mixta Pro", role: body statements, weights: "300 light with italic", free_alternative: "Fraunces 300, or Newsreader 300 with italic" }
radius: "8px on chips and buttons, nearly square"
stack: [Webflow, Lenis, Split words, CSS transitions, Autoplay video]
checked: 2026-11-18
visual_check: true
---

# Bulletproof

**In one line:** a brand experience agency that leads with spatial work on video, then switches to a quiet, pale editorial page with light serif statements.

## Colour
The first screen is a dark video with white type. After it, the page turns to a pale grey (#F1F1F1) with warm near-black text (#181713). There is no accent colour; all colour comes from the work in the videos.

## Type
Sequel Sans in uppercase at 86 to 173px with extremely tight tracking (about -0.06 to -0.1em) and line heights near 0.7 to 0.8, so lines lock together. Mixta Pro Light (a light serif) at 26 to 36px, often in italic, carries the body statements and gives a literary contrast. Interface labels are Sequel 11.5px uppercase.

## Layout and rhythm
The hero headline breaks into three lines placed at different horizontal offsets across the video ("create / desire through / disruption" style), reading as a staggered stack. Small outlined chip buttons sit top right with an arrow in a separate square. The pale sections are centred, with short serif statements and a large thin-line monogram drawn as an outline.

## Shape, depth and texture
Nearly square corners (8px), 1px dark outlines on chips, and almost no shadows. Video and outline drawing do all the visual work.

## Motion
Reveals blur in: transforms and `filter` animate over 0.8s on `cubic-bezier(0.19, 1, 0.22, 1)`. Opacity fades take 0.45s on `cubic-bezier(0.44, 0.01, 0, 0.93)`. Hovers combine a slight transform and filter at 0.2s. Headlines are split into words, a marquee runs headline ribbons, muted videos autoplay, and Lenis smooths the scroll.

## Rebuild notes
- Display: Sequel Sans uppercase, 86 to 173px, line height 0.7 to 0.8, tracking -0.06 to -0.1em. Inter Tight 500 uppercase at -0.06em is the closest free match; check that letters do not collide (SLOP44 sets a floor of -0.04em for wrapped text, so tighten only single-line display words).
- Statements: Mixta Pro Light 26 to 36px, line height 1.0 to 1.1, tracking -0.02 to -0.05em, with italic for emphasis.
- Staggered headline: one block per line, each with its own `margin-left` (0, about 20vw, about 45vw), all bottom-aligned over the video.
- Blur-in reveal: from `filter: blur(12px); transform: translateY(20px); opacity: 0` to rest, `transform 0.8s, filter 0.8s cubic-bezier(0.19, 1, 0.22, 1)`.
- Chips: 11.5px uppercase, 1px outline, 8px radius, with the arrow in a separate square chip butted to the label.

## Why it does not look generic
The type is set tighter than defaults allow, so the headline becomes a single carved shape. The switch from dark video to pale serif page mirrors the agency's work: spectacle first, then considered words.

## Steal this
- Break a short uppercase headline into lines placed at different horizontal offsets over full-bleed video.
- Pair a very tight uppercase grotesk with a light italic serif for running statements.
- Use blur plus a small rise for reveals instead of a plain fade-up.

## Not for
Products that must explain features clearly; most of the page is atmosphere. Brands without strong video of their own work.
