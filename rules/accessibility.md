# Accessibility (A11)

The floor every build meets, whatever the brief says. The target is WCAG 2.2 level AA. These rules are not traded for style. Load this for every build and every review.

## Semantics

- **A11.1. Use the element that does the job.** `header`, `nav`, `main`, `footer`, `button`, `a`, `label`, `table`, `ul`, `dialog`. Reach for ARIA only when no element exists for the pattern.
- **A11.2. The document identifies itself.** `lang` on `html`, a unique `title`, one `main`, one `h1`, and heading levels in order with none skipped.
- **A11.3. Source order, visual order and tab order agree.** Do not rearrange with `order` or absolute positioning in a way that changes what comes next.
- **A11.4. Every control has a name that matches what is visible.** Icon-only buttons get an `aria-label`. Decorative images get `alt=""` and decorative icons get `aria-hidden="true"`.
- **A11.5. Alt text says what the image tells the reader here.** Under about 125 characters, and never starting "image of". A chart gets a text summary or a data table nearby.
- **A11.6. Structure is marked up as structure.** Lists are lists, quotes are `blockquote`, tabular data is a `table`. Two `nav` regions on a page each get a label.

## Keyboard

- **A11.7. Complete the main task with the keyboard alone.** Tab reaches every control in order, Enter and Space activate, Escape closes, arrow keys move inside menus, tabs and lists. Do this pass yourself before reporting.
- **A11.8. No traps and no positive `tabindex`.** A modal dialog holds focus and releases it on close; nothing else does. Hidden content is not focusable.
- **A11.9. A skip link is the first focusable element.** It goes to `main` and becomes visible when focused.
- **A11.10. Custom widgets follow the published ARIA pattern for their role.** Or use the native element or a headless library ([components.md](components.md) CMP5).

## Focus

- **A11.11. Focus is always visible.** A `:focus-visible` outline 2px thick, offset 2px, at 3:1 against the colours next to it. Never `outline: none` without a replacement.
- **A11.12. Focus is never hidden behind fixed chrome.** Set `scroll-padding-top` to the height of a sticky header so focused and anchored content clears it.
- **A11.13. Move focus when the context changes.** Into a dialog when it opens and back to the trigger when it closes. To the main heading after a route change. To the next item after a deletion. To the first invalid field after a failed submit.
- **A11.14. The ring works on every surface.** Where a single colour fails on some backgrounds, use two tones: an outline in one and a 2px `box-shadow` ring in the other.

## Contrast and colour

- **A11.15. Meet the numbers in every state and theme.** Text 4.5:1, large text 3:1, controls and focus rings 3:1 ([color.md](color.md) COL23, COL24).
- **A11.16. Never rely on colour alone.** Links in running text are underlined. Errors have an icon and a sentence. Chart series differ by label or pattern as well as hue.
- **A11.17. Text over an image is measured at its worst point.** See COL25.

## Forms

- **A11.18. Every input has a `label`.** Related inputs sit in a `fieldset` with a `legend`. Required fields say so in words and carry `required`.
- **A11.19. Errors are text, tied to their field and announced.** `aria-describedby` to the message, `aria-invalid` on the input, and `role="alert"` or a live region so a screen reader hears it.
- **A11.20. Help the browser fill the form.** `autocomplete` tokens on personal fields, paste allowed everywhere, and no time limit without a warning and a way to extend it.
- **A11.21. Targets are 24 by 24px at the least, 44 by 44px on touch.** See CMP2.
- **A11.22. Status changes are announced without moving focus.** `aria-live="polite"` for saves, result counts and toasts. Reserve `assertive` for errors that cannot wait.
- **A11.23. Labels stay visible while the field is filled.** Instructions come before the field they apply to.

## Motion

- **A11.24. Honour `prefers-reduced-motion`.** Follow [motion.md](motion.md) MOT30 to MOT33. Nothing flashes more than three times a second. Anything that moves by itself for more than 5 seconds can be paused.
- **A11.25. Media is under the user's control.** No audio on autoplay. Video has controls, and captions when there is speech.
- **A11.26. No information arrives only through animation or hover.** Carousels have previous and next buttons and do not advance by themselves.

## Zoom and reflow

- **A11.27. Never disable zoom.** No `user-scalable=no` and no `maximum-scale`.
- **A11.28. The page reflows at 320 CSS pixels wide.** That is 1280 at 400 percent zoom. No sideways scrolling except inside tables, maps and code blocks.
- **A11.29. Text can grow to 200 percent without clipping.** Size in `rem`, let containers grow (`min-height`, not `height`), and keep text out of images.
- **A11.30. User text spacing does not break the layout.** Line height 1.5, paragraph spacing 2em, letter spacing 0.12em and word spacing 0.16em must all fit without overlap or cut-off.
- **A11.31. Works in portrait and landscape.**
- **A11.32. Content that appears on hover or focus can be dismissed, hovered and read.** Escape closes it, the pointer can move onto it, and it stays until the user leaves.

## Forced colours and user preferences

- **A11.33. Test with forced colours on.** Emulate `forced-colors: active`. Backgrounds and shadows disappear in that mode, so anything drawn only with them vanishes. Give buttons, inputs and cards a real border (`border: 1px solid transparent` is enough) and draw focus with `outline`, not `box-shadow` alone.
- **A11.34. Icons inherit the text colour.** Use `currentColor` in SVG so icons follow the forced palette. Use `forced-color-adjust: none` only for things that are about colour, such as swatches and chart keys.
- **A11.35. Respect contrast and transparency preferences.** Under `prefers-contrast: more`, strengthen borders and drop translucency. Under `prefers-reduced-transparency`, make blurred surfaces solid.

## How to check

- **A11.36. Run an automated audit, then do the manual passes.** Axe or Lighthouse finds roughly a third of problems. The keyboard pass, the 200 percent zoom, the 320px reflow and a quick screen reader pass (headings list, landmarks, form labels) find the rest. In the report, say which of these you ran.
