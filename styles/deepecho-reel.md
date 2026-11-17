---
name: DeepEcho Reel
url: https://deepecho-directions.vercel.app/option-e-reel.html
category: ai
theme: light
mood: [minimal, cinematic, technical]
signature: A small product film sits in the centre of a white page and grows to full width as you scroll, cycling through flat motion-graphic scenes, one colour field per product, while the headline waits in the bottom-left corner.
palette:
  - { hex: "#FDFDFC", role: canvas }
  - { hex: "#0C0C0D", role: text }
  - { hex: "#F2F2EF", role: surface }
  - { hex: "#FFD43B", role: "transcription field" }
  - { hex: "#3D5AFE", role: "translation field" }
  - { hex: "#B5EF5A", role: "live field" }
  - { hex: "#FF8A5B", role: "voice field" }
fonts:
  - { family: "Host Grotesk", role: display, weights: "500 at -0.04em, 800 for the wordmark", free_alternative: "Host Grotesk (Google Fonts)" }
  - { family: "Host Grotesk", role: body, weights: "400-500", free_alternative: "same" }
  - { family: "DM Mono", role: labels, weights: "500, 12px uppercase at 0.04em, nav and buttons only", free_alternative: "DM Mono (Google Fonts)" }
radius: "28px on the film, 16px on tiles and panels, pills on buttons and the nav group"
checked: 2026-11-18
visual_check: true
---

# DeepEcho Reel

**In one line:** an in-house landing page for a European speech AI company, built in the manner of a B2B design agency site: a quiet white page where all colour lives inside short product films.

This entry documents a page built in this library's own workflow, so the build technique is written up in full in [recipes/scroll-grown-product-film.md](../recipes/scroll-grown-product-film.md).

## Colour
About 95 percent of the page is a warm off-white canvas and near-black ink, with one pale panel grey for grouped content. Each product owns one saturated field (yellow, cobalt, lime, coral) that appears only inside its film scene and its product tile, never on text, buttons or backgrounds. The interface itself has no accent: primary buttons are ink pills, secondary buttons are panel-grey pills.

## Type
One grotesk at weight 500 does every heading, set tight at -0.04em, from a 64px hero line to a 112px closing line. Long intro paragraphs run at 26 to 42px in the same weight, so the page reads as a few large statements rather than many small blocks. A mono face appears only as 12px uppercase in the nav and on pill buttons; tags and labels are sentence case.

## Layout and rhythm
Full-bleed layout with a 16 to 32px gutter instead of a centred container. The hero is a sticky stage 270vh tall: the film starts at 30 percent scale in the centre (62 percent on phones) and the headline sits bottom-left. Below it the products form a 12-column grid of unequal tiles (7 and 5 columns, then 5 and 7) with captions and tag chips underneath, followed by a who-it-is-for row, a case card, a language row, five numbered process panels and a closing line at display size.

## Shape, depth and texture
Flat throughout: no gradients, glows or blur on content. Depth comes only from the film growing and from one soft offset shadow on the film's control pill. Imagery is drawn, not photographed: SVG scenes of waveforms, transcript cards, translation pills, a pitch with captions, and two voice cards with a consent badge.

## Motion
On load the headline words rise out of a mask, the film opens from its centre with a clip-path and the nav settles. Scrolling scales the film from small to full width with a CSS scroll timeline while the headline fades. Scenes change every six seconds, driven by a progress bar under each scene label, with a pause button; the film pauses off screen and in background tabs. The intro paragraph darkens word by word with a view timeline. Product tiles replay their scene only while visible. All of it falls back to a static layout without scroll timelines or with reduced motion.

## Why it does not look generic
The colour is assigned per product and confined to the media, so the page stays editorial while the product reads as vivid. The film is the product explained in motion (speech becoming text, one sentence becoming four languages), not a decorative loop. The scroll moment is the only scroll-linked effect on the page, which makes it feel authored.

## Steal this
- Start the hero media at roughly a third of its size in the middle of a white stage and let a CSS view timeline scale it to full width over the first two viewport heights, with the headline parked in a corner that the growing media never needs.
- Give each product one flat colour field and draw its scene in SVG; reuse the same scene, set to fit inside, as the product tile further down so the film and the grid agree.
- Drive scene changes from the animationend of a visible progress bar instead of a timer, so pause, off-screen and reduced motion all work by pausing one animation.

## Not for
Products that need a real screenshot or live data above the fold, since the film explains rather than shows. Brands with a single product, where one colour field per product has nothing to distinguish.
