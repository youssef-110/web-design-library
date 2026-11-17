---
name: Spotify
url: https://spotify.com
category: consumer-app
theme: dark
mood: [bold, friendly, loud]
signature: A near-black three-panel app shell where album art supplies all the colour and a single white pill is the only call to action.
palette:
  - { hex: "#000000", role: canvas }
  - { hex: "#121212", role: surface }
  - { hex: "#1F1F1F", role: surface-raised }
  - { hex: "#FFFFFF", role: text }
  - { hex: "#7C7C7C", role: border }
  - { hex: "#1ED760", role: accent }
fonts:
  - { family: "SpotifyMixUITitle", role: display, weights: "bold 700", free_alternative: "Figtree (Fontsource / Google Fonts, weight 700)" }
  - { family: "SpotifyMixUI", role: body, weights: "regular 400, bold 700 for nav", free_alternative: "Figtree (Fontsource / Google Fonts)" }
radius: "full pills on buttons and search, about 8px on cards, circles for artists"
checked: 2026-11-17
visual_check: true
---

# Spotify

**In one line:** the logged-out homepage is the player itself, a dark browsing shell that lets cover art do the selling.

## Colour
The page is black with panels one step lighter (#121212 for the library and main well, #1F1F1F for the search field). White carries every piece of text and the primary button. The brand green #1ED760 is tokenised as accent, but at the fold it barely shows; the colour on screen comes from album covers and a purple to blue gradient banner pinned to the bottom edge.

## Type
Headings such as "Trending songs" are bold, tight and about 24px, left aligned on the shelf. Track and artist lines are 14 to 16px regular, with the artist line dimmed grey. Nav links are bold small text, so the hierarchy is carried by weight and grey, not by size jumps.

## Layout and rhythm
A fixed app shell: a slim top bar with logo left, a centred home button plus wide search pill, and Log in right. Below it a 400px library column sits beside the main well, both as separate rounded panels with an 8px gap. The well is stacked horizontal shelves (songs, artists, albums), each seven covers wide, with a "Show all" link at the right edge and a cut-off eighth card hinting at scroll.

## Shape, depth and texture
Song covers are rounded squares; artist photos are full circles in black and white treatment. Panels are flat with no shadow, separated only by the black gap. The sticky sign-up banner is the one gradient surface.

## Motion
Not observed.

## Why it does not look generic
It skips the marketing hero entirely and shows the real product with real content, so the first screen proves the catalogue. Circles for people and squares for records encode content type in shape.

## Steal this
- Show the working product, with its real shelves, as the logged-out homepage instead of a hero image.
- Use shape to label content type: circular crops for people, rounded squares for objects.
- Keep the chrome monochrome (black, dark greys, white) so user imagery provides all colour, then reserve one gradient strip for the sign-up prompt.

## Not for
Products without strong visual assets per item; the dark grey shell turns dull with thumbnails alone.
