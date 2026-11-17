# Motion (MOT)

What motion is for, with values you can type. Load this for any animation work and before adding a single transition to a build.

## What motion is for

- **MOT1. Name the job in one word before you write the animation.** Feedback (the interface heard you), orientation (where this came from or went), state (what changed), continuity (bridging a jump) or explanation (showing how something works). If none fits, do not animate.
- **MOT2. How often it is seen sets the budget.** Seen a hundred times a day, or triggered from the keyboard: no animation. Seen dozens of times a day (hover, toggles): 150ms or less, colour or opacity only. Occasional (dialogs, menus, toasts): the standard values below. Rare (first run, success, the page signature): expressive motion is allowed.
- **MOT3. What the user is reading or acting on does not move for decoration.** Numbers, tables, form fields and body text stay still.
- **MOT4. Motion is never the only signal.** Every animated change also leaves a static trace: a colour, an icon, a word.

## Durations and easing

- **MOT5. Define motion tokens once.** `--dur-press: 120ms; --dur-fast: 160ms; --dur-base: 220ms; --dur-slow: 300ms; --dur-signature: 600ms; --ease-out: cubic-bezier(0.22, 1, 0.36, 1); --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);`. If the project already has motion tokens, use those.
- **MOT6. Durations by element.** Press 100 to 150ms. Hover colour 100 to 150ms. Tooltip 120 to 180ms. Menu or popover 150 to 220ms. Dialog or drawer 200 to 300ms, up to 400ms for a sheet taller than half the screen. Interface motion stays under 300ms otherwise.
- **MOT7. Leaving is faster than arriving.** An exit takes about two thirds of the entrance: open in 220ms, close in 150ms. Never put a delay on a close.
- **MOT8. Easing follows direction.** Entering or leaving: ease-out. Moving between two places on screen: ease-in-out. Colour or opacity alone: `ease`. Progress bars and spinners: `linear`. Never ease-in on interface; the slow start reads as lag. No bounce and no elastic curves.
- **MOT9. Travel is small.** An entrance moves 8 to 16px or scales from 0.96 to 1 (0.98 for a tooltip), with opacity from 0. Bigger surfaces travel a little further. Nothing enters from `scale(0)`.
- **MOT10. Motion starts where the cause is.** A menu grows from its trigger (`transform-origin` at the trigger's corner). A dialog grows from the centre. A toast leaves by the edge it came in from.
- **MOT11. When it feels slow, shorten it first.** Then reduce the distance. Adding a delay is the last resort.

## What may animate

- **MOT12. Animate `transform` and `opacity`.** Colour, background, border colour and shadow may change for state. On small elements, `clip-path`, `mask` and a small blur (under 10px) are allowed if they stay smooth. Never animate `width`, `height`, `top`, `left`, `margin` or `padding`. An accordion opens with `grid-template-rows: 0fr` to `1fr`.
- **MOT13. Name the properties.** `transition: transform 160ms var(--ease-out), opacity 160ms var(--ease-out)`. Never `transition: all`.
- **MOT14. Transitions for anything interactive, keyframes for one-shot sequences.** A transition retargets from where it is, so a second click mid-way reverses smoothly. Nothing blocks input while it animates.
- **MOT15. Use the cheapest tool that does it.** CSS transition, then `@starting-style` for entry, then CSS scroll timelines and view transitions, then the Web Animations API, then a library: Motion for gestures, layout and exit in React; GSAP for timelines and scrubbing. No library for a fade, and never two animation libraries on one page.
- **MOT16. Springs belong to gestures.** After a drag or flick, the release continues at the finger's velocity. No overshoot by default; a little only after a real throw.
- **MOT17. `will-change` is a repair, not a habit.** Add it after you have seen a dropped first frame, on `transform` or `opacity` only, and remove it when the animation ends.

## Entrances

- **MOT18. The page is complete and visible with scripts off.** Nothing rests at `opacity: 0` waiting for an observer. If you hide before revealing, hide under a class that JavaScript adds (`.js .reveal`), or use CSS alone.
- **MOT19. Nothing above the fold fades in on load.** It delays the largest paint and makes the page feel slow. The one exception is the signature (MOT34).
- **MOT20. No scroll reveals by default.** The identical fade-up on every section is the best-known mark of a generated page. If one section needs a reveal: opacity plus 12px or less, 200 to 300ms, once, and never on running text.
- **MOT21. Stagger only a real list, once.** 40 to 60ms between items and 300ms in total, so stagger the first six and bring the rest in together. Never restagger when the user scrolls back.
- **MOT22. Hover changes colour or shadow in about 120ms.** No lift on every card, no scale above 1.02, and no hover motion at all on things that cannot be clicked.

## Scroll-linked motion

- **MOT23. Tie motion to scroll only when scroll position means something.** A sequence, progress through a process, a product assembling. One such section per page at most.
- **MOT24. Scrub one to one, both ways.** The animation is a function of scroll position and reverses when the user scrolls back. Never change scroll speed or direction, never hijack the wheel, and do not add a smooth-scroll library.
- **MOT25. Prefer CSS scroll timelines.** `animation-timeline: view()` or `scroll()`, inside `@supports`, with a static layout as the fallback. Next choice IntersectionObserver, then GSAP ScrollTrigger. Never a `scroll` event listener.
- **MOT26. A pin lasts two viewport heights at most.** The user can always scroll past it. On phones, replace pinned sequences with a plain stacked layout.
- **MOT27. With ScrollTrigger, mind the order and the cleanup.** Create triggers from the top of the page down, refresh after fonts and images load, kill them on unmount, and remove `markers` before shipping.
- **MOT28. Parallax is one layer moving less than 10 percent of the viewport.** On decoration only, never on text, and off under reduced motion.
- **MOT29. `scroll-behavior: smooth` is for in-page anchors only.** Set it inside a `prefers-reduced-motion: no-preference` query.

## Reduced motion

- **MOT30. The reduced path ships with the animation, not later.** Under `prefers-reduced-motion: reduce`, remove travel, scale, parallax, scroll-linked effects, loops and autoplay. Keep fades of 150ms or less that show a state change.
- **MOT31. Write movement inside a `no-preference` query.** `@media (prefers-reduced-motion: no-preference) { .sheet { transition: transform var(--dur-base) var(--ease-out); } }`. Stillness becomes the default and nothing has to be undone.
- **MOT32. End states are complete.** With reduced motion on, nothing is left hidden or half-way. A scrubbed sequence shows its final frame or a static version.
- **MOT33. Loops are for live state only.** A spinner while loading, a dot while recording. They pause off screen and in a hidden tab. Anything that moves by itself for more than 5 seconds has a pause control, and nothing flashes more than three times a second.

## Signature moments and decoration

- **MOT34. One authored moment per page, drawn from the subject.** A label printing, a needle settling, a page turning: something only this product would do. 500 to 800ms, once, never blocking input.
- **MOT35. Everything else is functional and close to invisible.** If a visitor notices the ordinary transitions, they are too slow or too large.
- **MOT36. Decoration is off by default.** Typewriter headlines, counting numbers, pulsing dots, floating shapes, cursor followers, magnetic buttons, tilting cards, marquees and shimmer on static text. Each is allowed only when real data drives it or the brief asks for it.
- **MOT37. No splash screen on a page that loads in under a second.**
- **MOT38. Check motion at one tenth speed.** Slow it down in the browser's animation tools and watch the origin and the overlap between states. Trigger it twice quickly. Turn reduced motion on. Throttle the CPU four times and watch for dropped frames.
