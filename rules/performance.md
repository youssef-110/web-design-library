# Performance (PRF)

A slow page is a design failure the visitor meets before the design. Load this for every build that ships, and for any work on fonts, images, video or scripts.

## Targets and budgets

- **PRF1. Three numbers, measured on a phone profile.** Largest Contentful Paint 2.5 seconds or less, Interaction to Next Paint 200ms or less, Cumulative Layout Shift 0.1 or less. Test with the CPU throttled four times and a slow 4G network, not on your desktop connection.
- **PRF2. Budget the first load of a marketing page.** Compressed: 100 KB of JavaScript, 50 KB of CSS, 150 KB of fonts, 200 KB for the hero image, 600 KB in total before interaction. When you go over, say so and say why.
- **PRF3. Measure before and after, and fix the largest item first.** Guessing wastes time on the wrong asset. Name the LCP element before you optimise anything.

## Fonts

- **PRF4. WOFF2 only, served from the same origin.** A third-party font stylesheet costs an extra connection and blocks rendering.
- **PRF5. Two families and four files at most.** A variable font replaces three or more static weights. Subset to the scripts you use.
- **PRF6. Preload the one or two fonts used in the first screen.** `<link rel="preload" as="font" type="font/woff2" crossorigin>`. Preloading more competes with the hero image.
- **PRF7. Fonts cause no layout shift.** `font-display: swap` with a metric-matched fallback ([typography.md](typography.md) TYP34).
- **PRF8. No icon fonts.** Inline SVG or an SVG sprite.

## Images

- **PRF9. Every image declares its size.** `width` and `height` attributes, or `aspect-ratio` in CSS, so the box is reserved before the file arrives.
- **PRF10. Serve AVIF or WebP at the size displayed.** `srcset` with `sizes`, a fallback through `picture`, and never more than twice the rendered pixel width. Aim for 200 KB for a hero, 100 KB for content images, 30 KB for thumbnails.
- **PRF11. The LCP image is a plain `img` in the HTML.** Not a CSS background, not inserted by script, not lazy. Give it `fetchpriority="high"`.
- **PRF12. Everything below the fold is lazy.** `loading="lazy"` and `decoding="async"`.
- **PRF13. SVG for logos, icons and diagrams.** Optimise the file. Inline it only when it is small or needs `currentColor`.
- **PRF14. No text baked into images.** It cannot scale, be translated or be read aloud. Heavy PNG screenshots get cropped and compressed, or rebuilt as real markup.
- **PRF15. A placeholder has the final aspect ratio.** A flat colour taken from the image, or a blurred preview under 1 KB.

## Video

- **PRF16. Video, never GIF.** `<video autoplay muted loop playsinline poster="...">` with MP4 and WebM sources. A hero loop is 10 seconds or less, has no audio track, and weighs 2 to 4 MB at most.
- **PRF17. The poster is an image like any other.** Optimise it; it is often the LCP element. Use `preload="metadata"` in the first screen and `preload="none"` below it.
- **PRF18. Video stops when nobody is watching.** Pause it off screen and in a hidden tab. Under reduced motion, show the poster with a play button.
- **PRF19. Third-party embeds load on click.** Show a static preview for a video player or map and load the iframe when the visitor asks for it.

## Scripts

- **PRF20. The page works before JavaScript runs.** Content, navigation, links and forms are in the HTML ([process.md](process.md) PRO32).
- **PRF21. Nothing blocks rendering except critical CSS and the theme script in PRF31.** Every other script is `type="module"` or `defer`.
- **PRF22. No library for what the platform does.** `details`, `dialog`, `popover`, scroll snap, `:has()`, view transitions, IntersectionObserver. Any dependency over 20 KB compressed is named in the report with its size and its reason.
- **PRF23. Heavy widgets load on demand.** Charts, maps, editors and animation libraries arrive through `import()` when they scroll into view or are asked for.
- **PRF24. Third parties wait.** Analytics, chat and tag managers load after the page is interactive. `preconnect` only to origins used in the first screen, and to four at most.
- **PRF25. Keep the main thread free during interaction.** No task longer than 50ms in response to input. Break long work into chunks, use passive listeners for touch and wheel, and read layout before you write it, never interleaved.
- **PRF26. Long lists render lazily.** Past about 100 rows, use `content-visibility: auto` with `contain-intrinsic-size`, or virtualise.

## Layout shift

- **PRF27. Reserve space for everything that arrives late.** Images, video, embeds, banners and web fonts.
- **PRF28. Never insert content above what the visitor is reading.** A late banner goes in a reserved slot or overlays the page. A cookie notice is fixed to the bottom.
- **PRF29. A skeleton is the size of what replaces it.**
- **PRF30. Animate transforms, not layout.** See [motion.md](motion.md) MOT12.
- **PRF31. No flash of the wrong theme.** A small inline script in the `head` sets the theme attribute before first paint.

## CSS and paint

- **PRF32. Ship the CSS the page uses.** One stylesheet when it is under 50 KB. Remove unused framework output. No `@import` chains.
- **PRF33. Bound the expensive effects.** `backdrop-filter`, large blurs, wide shadows and fixed backgrounds stay on small areas. Check them on a mid-range phone profile, where they fail first.

## What to measure and report

- **PRF34. Report numbers with their conditions.** The LCP element and its time, CLS, and INP or Total Blocking Time in the lab, plus total transfer size and request count, with the throttling used.
- **PRF35. Say when you could not measure.** "Performance not measured: no browser tool in this session" is an acceptable line. A claimed score that was never run is not.
- **PRF36. When you control hosting, cache properly.** Hashed file names with long-lived immutable caching, a short lifetime for HTML, and Brotli compression.
