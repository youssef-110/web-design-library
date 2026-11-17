# Components (CMP)

Buttons, forms, navigation, cards, tables, tabs, dialogs and the states every one of them needs. Load this for app interfaces, forms and any page with controls.

## Every interactive element

- **CMP1. Build all the states with the element, not afterwards.** Default, hover, focus-visible, pressed, disabled and loading for everything; selected and error where they apply. A control with only its resting state is unfinished.
- **CMP2. Hit targets are 44 by 44px on touch.** 48px for the main action on a phone, 32px at least in dense pointer-only tools, and never under 24px. Extend a small visual with padding or a pseudo-element. Keep 8px between neighbours and never let two targets overlap.
- **CMP3. Feedback starts the instant the pointer goes down.** An `:active` style within 100ms: `transform: scale(0.97)` or a darker fill. Never scale below 0.95.
- **CMP4. Nothing is available on hover alone.** Whatever hover shows can also be reached by tap and by keyboard. Hover styles sit inside `@media (hover: hover) and (pointer: fine)`.
- **CMP5. Native elements first.** `button`, `a`, `input`, `select`, `details`, `dialog`. For a combobox, menu or tabs, use a headless library (Radix, Base UI, React Aria) instead of writing focus management by hand.
- **CMP6. Restyle the kit before you use it.** A component library in its default radius, grey and shadow is recognisable at a glance. Map its tokens to yours first.

## Buttons

- **CMP7. One filled button per view.** That is the primary action. Secondary actions are outlined or tinted; tertiary ones are text. Two filled buttons side by side means you have not decided.
- **CMP8. The label is a verb and an object.** One to three words, sentence case, never wrapping: "Save changes", "Send invite". The same words follow through: an "Archive" button leads to an "Archived" message.
- **CMP9. Sizes come from the scale.** Height 40 to 48px (36 in dense tools), padding such as 12px by 20px, radius from the radius scale. Buttons in a row share one height.
- **CMP10. Loading keeps the width.** Swap the label for a spinner in place, block a second press, set `aria-busy`, and name the operation ("Saving") if it runs longer than a second.
- **CMP11. Prefer an enabled button that validates over a disabled one.** If a control must be disabled, say why next to it.
- **CMP12. Buttons do; links go.** Actions are `button type="button"`. Navigation is `a href`, so it opens in a new tab on request. An icon-only button needs an `aria-label` and a tooltip.
- **CMP13. Undo beats confirm.** For anything recoverable, act at once and offer Undo for 5 to 10 seconds. Confirm only what cannot be reversed, in a dialog that names the object and repeats the verb on the button: "Delete Q3 report". A bare question with Yes and No tells the user nothing.

## Forms and validation

- **CMP14. A visible label above every field.** A placeholder shows an example format only, and never replaces the label.
- **CMP15. One column.** Size each field to its expected content (a postcode field is short). Mark the optional fields when most are required.
- **CMP16. Set `type`, `inputmode`, `autocomplete` and `name` on every field.** `email`, `tel`, `one-time-code`, `current-password`. Text in inputs is 16px. Never block paste.
- **CMP17. Validate when the field loses focus, and again on submit.** Not on every keystroke. Once a field shows an error, recheck it on input so the error clears the moment it is fixed.
- **CMP18. The error sits under its field and says how to fix it.** "Enter a date after 1 March", with an icon as well as colour, linked by `aria-describedby`, with `aria-invalid` on the input.
- **CMP19. On a failed submit, focus the first invalid field and keep everything typed.** With more than three errors, add a summary at the top that links to each.
- **CMP20. Submit stays enabled until it is pressed.** Then it shows progress and ignores a second press. A server error returns the form with its data intact.
- **CMP21. Rules come before the attempt.** Password requirements and format hints appear before typing, not after failure.
- **CMP22. Choose the control by the number of options.** Radios for two to five visible choices, a select for more, a switch only for a setting that applies at once. The label of a checkbox or radio is part of its target.

## Navigation

- **CMP23. One line, 56 to 72px tall, seven items at most.** The current page is marked visibly and with `aria-current="page"`. If the items do not fit at 1024 wide, shorten labels or drop some.
- **CMP24. Sticky only on long pages, and it must not cover content.** Set `scroll-margin-top` on anchor targets to the header height plus 16px.
- **CMP25. On a phone, a labelled menu button or a bottom bar.** The button carries `aria-expanded` and opens a full-height panel. A bottom bar suits an app with three to five destinations. The items match the desktop navigation.
- **CMP26. The plumbing is part of the design.** A skip link as the first focusable element, legal links in the footer, a way back from every page, and a 404 page in the site's own voice.
- **CMP27. The navigation follows the world.** A floating glass pill is not a default. See the pictogram row at [teenage engineering](../styles/teenage-engineering.md) and the plain text links at [Pentagram](../styles/pentagram.md).

## Cards, and when not to use them

- **CMP28. A card is for an object the user opens, selects or drags.** A listing, a file, a product, as in the photo cards at [Airbnb](../styles/airbnb.md).
- **CMP29. A card is not for grouping text.** Features, steps and paragraphs get spacing, a rule or a heading. The test: remove the border, background and shadow. If nothing is lost, it was never a card.
- **CMP30. Never nest cards, and keep radii concentric.** Inner radius equals outer radius minus the padding between them: a 20px panel with 12px padding holds 8px corners.
- **CMP31. The whole card is one link.** Stretch a single `a` over it with a pseudo-element. No nested links and no click handler on the container.
- **CMP32. Size cards by importance.** The lead item is larger. Six identical tiles say that nothing matters more than anything else.

## Tables

- **CMP33. Tabular data goes in a real `table`.** With `th scope` and a `caption`. Do not rebuild it from divs.
- **CMP34. Text left, numbers right.** Numbers use tabular figures and the same count of decimals. A header aligns with its column.
- **CMP35. Rows are 40 to 48px (32 to 36 in dense tools), divided by one rule.** Do not combine rules with zebra stripes. Highlight the row under the pointer when rows are long.
- **CMP36. Headers stay in view, and sortable headers are buttons.** `position: sticky` on the header row and `aria-sort` on the active column. On a phone, stack each row with its labels, or scroll the table inside its own container with the first column fixed.
- **CMP37. Truncate by field.** Never cut numbers, dates or amounts. Wrap names. Cut file names and IDs in the middle. Any truncated value can be read in full on hover and on focus.

## Tabs

- **CMP38. Tabs switch between views of one thing.** Not between pages, and not to hide content that should be read in order. Two to six tabs; beyond that use a select or a side list.
- **CMP39. Use the tab pattern in full.** `role="tablist"`, arrow keys to move, Tab to enter the panel. Selection shows by underline or fill as well as colour, at constant weight. The active tab is in the URL.

## Dialogs, toasts and tooltips

- **CMP40. A dialog is for a decision that must interrupt, or a short focused task.** Everything else goes inline, on its own page or in a side panel. Never open one on page load.
- **CMP41. Use `dialog` with `showModal()` or a headless equivalent.** Focus moves in and is held, Escape closes, focus returns to the trigger, the page behind is inert and does not scroll.
- **CMP42. 480 to 640px wide, with a title that states the decision.** One primary action. On a phone it becomes a bottom sheet.
- **CMP43. A toast confirms a background result.** One line and one action at most, visible for 4 to 6 seconds, announced through `aria-live="polite"`. An error that needs action goes inline, not in a toast.
- **CMP44. A tooltip names an icon-only control.** It never holds essential information. It shows on focus as well as hover, after about 500ms the first time and at once for its neighbours.

## Empty, loading and error states

- **CMP45. Design the empty state first.** It is the first thing a new user sees. Say what will appear here and offer one action. Separate first use from no results ("No invoices match 'northwind'", with a way to clear the filter) and from failure.
- **CMP46. Loading depends on the wait.** Under 300ms show nothing. From 300ms to 2 seconds show a skeleton with the shape and size of the result. Past 2 seconds say what is happening. Past 10 seconds show progress and offer cancel.
- **CMP47. An error state says what failed, why if known, and what to do.** It appears where the failure happened, with a retry, and it keeps the user's work. Never `alert()`.
- **CMP48. Success is confirmed in place and briefly.** The button reads "Saved" with a check for two seconds. Routine saves are not celebrations.
- **CMP49. Break every component with worst-case data before you call it done.** Use the list in [process.md](process.md) PRO31.
- **CMP50. State that matters lives in the URL.** Filters, the active tab, the page number and the open item survive a refresh and can be shared.
