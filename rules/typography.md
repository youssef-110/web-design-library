# Typography (TYP)

Type carries the voice of a page more than any other choice. Load this for any build, and first on a redesign.

## Choosing faces

- **TYP1. Choose the face from the subject and write the reason in one sentence.** "A condensed grotesque, because shipping labels are set in one" is a reason. "Modern and clean" is not.
- **TYP2. Treat the first font that comes to mind as taken.** The reflex picks are Inter, Geist, Poppins, DM Sans, Space Grotesk and Manrope, and on the serif side Playfair Display and Fraunces. Use one only when the brief names it, the project already ships it, or TYP4 applies.
- **TYP3. Find the alternative by classification, then by the real headline.** Name the kind of lettering the subject uses (condensed grotesque, slab, humanist sans, old-style serif, wide geometric). Shortlist three faces of that kind from Fontsource, Google Fonts or Fontshare. Set the actual headline in each and choose with your eyes. Check the weights and language coverage before committing.
- **TYP4. Pages for working and reading may use a neutral face.** A dashboard or docs page can use `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` or one plain interface family. Expression is not the job there.
- **TYP5. One family, or two that are clearly different.** A second family needs a job the first cannot do: a display voice, or code. Pair by contrast (serif with sans, narrow with wide), never two similar sans. A third family needs a written reason.
- **TYP6. A serif is a decision, not a mood.** Use one when the subject's world prints in serif and you can say so, and set it roman. See [Granola](../styles/granola.md) and [Anthropic](../styles/anthropic.md). "Premium" is not a reason.
- **TYP7. When you cannot license the brand's face, pick a free one for its own character.** Not the nearest lookalike of a default. Library entries list a `free_alternative` as a starting point.

## Scale

- **TYP8. Use five roles at most.** Display, heading, body, small, and data or code if needed. Name the tokens by role (`--text-display`), not by size.
- **TYP9. Adjacent roles differ by 1.25 times or more.** For example 16, 20, 28, 40, 64. Two sizes within 2px of each other are one size: merge them.
- **TYP10. Reading text is 16px or larger.** Interface text in dense tools may be 14px. Nothing on the page is under 12px. Inputs are 16px so phones do not zoom on focus.
- **TYP11. Display type is fluid, with a floor and a ceiling.** For example `font-size: clamp(2.25rem, 1.2rem + 4.5vw, 5rem)`. Cap near 96px unless type is the signature, as with the 110px serif at [Granola](../styles/granola.md). Tools use fixed sizes.
- **TYP12. A headline is two lines at 1280 wide and three at 390.** If it runs longer, cut words or reduce the size. Never fix it by narrowing the column.

## Weight

- **TYP13. Choose the headline weight on purpose.** Either light or regular at large size ([Revolut](../styles/revolut.md), [Mercury](../styles/mercury.md)) or heavy ([Wise](../styles/wise.md), [Flighty](../styles/flighty.md)). Weight 600 on everything is the template.
- **TYP14. Three weights per page at most, and load only those.** Body at 400, emphasis at 500 or 600. Set `font-synthesis: none` so the browser never fakes a bold or an italic.
- **TYP15. Light weights need size.** Nothing lighter than 400 below 24px.
- **TYP16. Weight never changes on hover or selection.** The text reflows. Change colour, underline or background instead.

## Measure, leading and tracking

- **TYP17. Lines of running text are 45 to 75 characters.** `max-width: 65ch` on the text block. A paragraph never spans the full container.
- **TYP18. Line height falls as size rises.** Display 1.0 to 1.15, headings 1.15 to 1.3, body 1.5 to 1.7. Use unitless values. On a dark background add a little: 1.6 where you would use 1.5.
- **TYP19. Tracking depends on size.** Display minus 0.01 to minus 0.025em, never tighter than minus 0.04em. Body 0. Capitals plus 0.05 to plus 0.1em. One letter-spacing value for every size is a bug.
- **TYP20. Left-align anything longer than three lines.** Centre only short display lines. Never justify text on the web.
- **TYP21. Balance headings and tidy paragraphs.** `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. Then look for a stranded last word at each breakpoint and fix it with the copy or the width.
- **TYP22. Sentence case for headings, buttons and labels.** Capitals only for short labels of one to three words. Brand names keep their own casing.

## Numerals and characters

- **TYP23. Use the real characters.** Curly quotes and apostrophes, the ellipsis character, a multiplication sign in dimensions, a non-breaking space between a number and its unit. No em or en dashes ([copy.md](copy.md) CPY34).
- **TYP24. Monospace is for code, data, IDs and keyboard keys.** Not for dates, labels or atmosphere.
- **TYP25. Numbers that line up or change use tabular figures.** `font-variant-numeric: tabular-nums` on table columns, prices in a list, timers and counters. Leave prose numbers proportional.
- **TYP26. Links in running text are underlined.** `text-underline-offset: 0.15em` and a set thickness. Colour alone does not mark a link.

## Hierarchy inside a sentence

- **TYP27. Build hierarchy inside the headline instead of stacking label, headline and sub-line.** Two tones in one sentence: the first clause at full strength, the rest at about 60 percent ([Stripe](../styles/stripe.md), [Intercom](../styles/intercom.md)). Or two faces in one paragraph ([Anthropic](../styles/anthropic.md)).
- **TYP28. Split by clause, never by word.** One word in italic, in the accent colour or in a pill is the commonest tell on a generated page. Do it only when it is already the brand's own system, as with the pill word at [Notion](../styles/notion.md).
- **TYP29. No label above a heading by default.** The heading carries itself. Keep one on the page only when it holds a fact the heading does not.
- **TYP30. Each level of hierarchy changes two things.** Size and weight, or size and colour. A level that differs by one small step in one property will not be seen.
- **TYP31. Three text tones at most.** Primary, secondary and muted, all meeting the contrast targets in [color.md](color.md) COL23.

## Loading and fallback metrics

- **TYP32. Self-host WOFF2 and subset it.** Two families and four files at most. Use a variable font when you need three or more weights of one family. A Latin subset is usually 20 to 60 KB.
- **TYP33. `font-display: swap` for text, `optional` for decorative faces.** Preload only the one or two files used in the first screen, with `crossorigin`.
- **TYP34. Give the fallback the same metrics as the web font.** Declare a local fallback face with `size-adjust`, `ascent-override`, `descent-override` and `line-gap-override`, and put it second in the stack. For example `@font-face { font-family: "Display Fallback"; src: local("Arial"); size-adjust: 96%; ascent-override: 92%; descent-override: 24%; line-gap-override: 0%; }`. The numbers are per face: tune them until blocking the web font moves no line.
- **TYP35. Check the font that rendered.** In the browser, confirm the computed face is the intended one and not the fallback (`document.fonts.check('1rem "Family Name"')`). A page that looks plain is often a font that failed to load.
- **TYP36. Wait for `document.fonts.ready` before measuring or splitting text.** Otherwise line breaks are computed for the wrong face.
