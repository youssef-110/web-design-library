# Colour (COL)

Neutrals do most of the work. Colour gets a job. Load this for any build and for any theme or contrast question.

## Neutrals first

- **COL1. Build the neutrals before you pick an accent.** Canvas, raised surface, border, and three text tones. The page should look finished in neutrals alone; if it does not, colour will not save it.
- **COL2. Tint every neutral toward one hue.** The brand's hue or the world's. In OKLCH keep chroma between 0.005 and 0.02, for example canvas `oklch(98.5% 0.006 95)` and text `oklch(22% 0.015 95)`. Never mix warm greys and cool greys on one page.
- **COL3. Pure black and pure white are choices, not defaults.** Untinted `#000` on `#fff` reads as unstyled, and swapping in `#0a0a0a` or `#111` is the same reflex. Use stark black or white only when it is the world you committed to, as at [Uber](../styles/uber.md) and [teenage engineering](../styles/teenage-engineering.md).
- **COL4. Expect about 90 percent of the page to be neutral.** The exception is a page whose signature is a colour field, such as the lime hero at [Wise](../styles/wise.md).

## One job per colour

- **COL5. Give the accent one job and write it down.** The primary action ([Airbnb](../styles/airbnb.md)), the wordmark only ([Monzo](../styles/monzo.md)), or product imagery only ([ElevenLabs](../styles/elevenlabs.md), [Figma](../styles/figma.md)). An accent that marks buttons, links, icons and headings marks nothing.
- **COL6. Two hues at most, plus the state colours.** A page with no accent at all is allowed and is often stronger: [Anthropic](../styles/anthropic.md), [Pentagram](../styles/pentagram.md).
- **COL7. A colour keeps its job from the first screen to the last.** No new colour appears in section six.
- **COL8. If the page is loud, it is loud with one flat colour at page scale.** See [Wise](../styles/wise.md) and [Impossible Foods](../styles/impossible-foods.md). Five accents sprinkled on grey is not bold, it is busy.
- **COL9. Take the hue from the subject, not the category.** If someone could guess the palette from "fintech" or "AI tool", change it. Indigo and violet only when they are the brand.
- **COL10. An existing brand colour stays, including purple.** Build tinted neutrals around it and use it consistently.
- **COL11. A gradient must depict something.** Light, a material, data. The ribbon at [Stripe](../styles/stripe.md) is an object. No gradient as background filler, and no gradient text.

## Text on colour, borders and shadows

- **COL12. Text on a coloured surface is a tint of that hue, never grey.** [Wise](../styles/wise.md) sets dark green `#163300` on lime `#9FE870`. Grey on colour looks washed out and usually fails contrast.
- **COL13. Tint shadows toward the surface hue.** On a warm canvas, `0 1px 2px oklch(30% 0.03 60 / 0.08), 0 8px 24px oklch(30% 0.03 60 / 0.06)`. Neutral black at 10 percent is the stock shadow.
- **COL14. One light source.** Every shadow has a downward offset and a blur, in the same direction. A coloured shadow with no offset is a glow, and glows are out.
- **COL15. A shadow says the thing floats; a border says it is a part.** Menus, dialogs and dragged items get a shadow. Inputs, tables and dividers get a border. Not both on one box, and never both on every card in a row.
- **COL16. A border is a step on the neutral scale, 1px.** Dividers can be faint. The edge of an input or control must reach 3:1 against what surrounds it.

## Dark themes

- **COL17. Choose light or dark from where the page is used.** Write the sentence: who, where, in what light. A trading tool watched all day in a dim room can be dark. If you cannot name a reason for dark, use light.
- **COL18. A dark canvas is tinted and sits at 12 to 18 percent lightness.** Text sits at 90 to 97 percent, not pure white, which glares. [Linear](../styles/linear.md) uses `#08090A` under `#F7F8F8`. True black only under COL3.
- **COL19. In dark themes, height is lightness.** Each raised level is 3 to 5 percent lighter than the one below. Shadows barely show on dark; use a 1px border at white 8 to 12 percent alpha.
- **COL20. Lower the chroma of large coloured areas in dark.** Keep the accent recognisable, then recheck every text and control pair.
- **COL21. One theme per page.** A marketing page commits to one. A tool ships both through tokens. A single dark band in a light page is allowed only as the one deliberate switch, never for variety.
- **COL22. Tell the browser the theme.** `color-scheme` on the root and a `theme-color` meta tag, so form controls, scrollbars and the mobile browser bar match.

## Contrast targets

- **COL23. Body text 4.5:1 minimum; aim for 7:1.** Large text (24px and up, or 19px bold and up) 3:1 minimum. Placeholder and helper text are text: 4.5:1.
- **COL24. Non-text 3:1.** Icons that carry meaning, input borders, focus rings and chart marks, each against its neighbours.
- **COL25. Text over a photograph is measured at its worst spot.** Place the text over a quiet region, as the low-left headline at [Monzo](../styles/monzo.md) does, or add a gradient scrim behind the text only.
- **COL26. Compute contrast; do not judge it by eye.** Find the lowest pair in each theme and state the ratio in your report. Check hover, disabled and error states too.

## State colours

- **COL27. Four states: success, warning, danger, info.** Each has a text-safe tone and a surface tint. Derive them at the same lightness and chroma family as the palette so they do not look pasted in.
- **COL28. Colour is never the only signal.** Pair it with an icon, a word or a shape. An error is a red border, an icon and a sentence.
- **COL29. Keep danger distinct from the accent.** If the brand colour is red, destructive actions use an outlined style with an icon and an explicit verb.
- **COL30. Hover and pressed states shift lightness by 4 to 8 percent in the same hue.** Do not use opacity: it lets the background through and changes the colour unpredictably.
- **COL31. Colour the browser's own furniture.** `::selection`, `caret-color`, `accent-color`, scrollbar colours and the focus ring come from the palette. Browser-blue selection on a warm page gives the page away.

## Tokens

- **COL32. Two layers of tokens.** A raw scale (`--grey-1` to `--grey-12`, `--brand-1` to `--brand-12`) and roles on top (`--canvas`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, `--on-accent`, `--danger`). Components read roles only.
- **COL33. Themes remap roles in one place.** One `[data-theme="dark"]` block or one `prefers-color-scheme` query. No per-component dark overrides.
- **COL34. Build new palettes in OKLCH.** Step lightness evenly for a ramp and let chroma fall toward both ends. Equal lightness steps then look equal.
- **COL35. No raw colour values in components.** At the end, search component styles for `#`, `rgb(` and `oklch(`. Each hit becomes a token or is removed.

## Checks

- **COL36. Look at the page in greyscale.** Desaturate a screenshot. The hierarchy should still read, and the primary action should still be the strongest thing on the screen. If it only stood out by hue, raise its lightness contrast.
- **COL37. Simulate colour-vision deficiency.** In the browser's rendering tools, switch on the red-green simulations. Success and danger must still differ, by lightness of 20 percent or more or by icon and word.
