---
name: MUBI
url: https://mubi.com
category: consumer-app
theme: dark
mood: [cinematic, serious, minimal]
signature: A near-black film still with a one-line all-caps headline and a hard-edged email field fused to a navy Get Started button.
palette:
  - { hex: "#0D0D0F", role: canvas }
  - { hex: "#FFFFFF", role: text }
  - { hex: "#001489", role: button }
  - { hex: "#001AAF", role: primary-token }
  - { hex: "#FFC000", role: accent-token }
fonts:
  - { family: "Riforma", role: display-and-body, weights: "medium 500 headline, regular 400 body", free_alternative: "Inter (Fontsource / Google Fonts, weight 500)" }
radius: "0px, square field and button"
checked: 2026-11-17
visual_check: true
---

# MUBI

**In one line:** a film streaming service that opens on a darkened still of a woman in a hat, the pitch in capitals, and an email form.

## Colour
The tokens report a white background and grey text, but the live page is near-black (#0D0D0F), the picture is dimmed so heavily that only the face and hair read, and all type is white. The one colour is a deep navy (#001489) in the Get Started button. The yellow #FFC000 appears in the stylesheet as an accent, though not on this first screen.

## Type
Riforma, a Swiss-style grotesque. The headline is about 60px, set in all caps at medium weight, left aligned, one line, with slightly open spacing. Section labels such as "TRY 7 DAYS FREE" are 26px caps. Small print under the form is 12px with underlined links. Log in is small caps at the top right with a three-line menu icon.

## Layout and rhythm
A 210px left margin holds everything: logo top left, headline in the upper quarter, then a long empty stretch where the face of the still sits slightly right of centre, then the offer label and form in the lower quarter. The vertical gap between headline and form lets the picture breathe. The form is 616px wide, a white input and a navy button side by side with no gap.

## Shape, depth and texture
Everything is square. The input is a solid white block, the button a solid navy block, both 64px tall. No shadows or borders. The film still, moving or frozen, carries a grainy, near-monochrome texture with a purple hat as the only colour hint.

## Motion
Not observed.

## Why it does not look generic
Streaming landing pages usually show a poster wall. MUBI shows a single, nearly unlit frame and one sentence, which treats the service as curation by a single taste instead of a catalogue.

## Steal this
- Dim a single film still to near-black and let one subject glow out of it behind a caps headline.
- Fuse an input and a button into one rectangle with no radius or gap so the form reads as a single action.
- Put the headline top and the form bottom, leaving the middle empty for the picture.

## Not for
Products that must demonstrate breadth of content up front, such as a general-purpose video library.
