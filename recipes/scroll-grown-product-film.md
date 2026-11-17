# Recipe: scroll-grown product film

A landing page hero where a small product film sits in the middle of a quiet page and grows to full width as the visitor scrolls, then the same scenes reappear as product tiles. Built and verified for the [DeepEcho Reel](../styles/deepecho-reel.md) entry. Uses only CSS, inline SVG and about 60 lines of plain JavaScript. No libraries.

Read this after the four-line commitment, when the signature is "the product explained in motion". It is one technique; the brief, the subject world and `rules/anti-slop.md` still decide everything else.

## When it fits

- The product has two to five distinct capabilities that can each be shown as a short, flat scene (input becoming output).
- The page is otherwise quiet: white or one neutral, one grotesk, colour reserved for the media.
- You can draw the scenes. If the product needs a real screenshot or live data above the fold, use the product itself instead (SLOP4: never fake product UI out of divs and call it a screenshot).

Not for: single-feature products, dark "premium" pages chosen by reflex (SLOP22), or pages that already have another scroll-linked moment (MOT23 allows one).

## Parts

1. **Stage.** A sticky section, at most 270vh tall so the pin lasts under two viewport heights (MOT26).
2. **Film.** A 16:9 box holding stacked SVG scenes, a caption, one progress bar per scene and a pause button.
3. **Scenes.** One SVG per capability, one flat colour field each, animated with CSS keyframes that only run while the scene has the class `on`.
4. **Tiles.** The same scenes cloned into a product grid further down, fitted inside instead of cropped.
5. **Optional extras.** A word-by-word darkening paragraph (view timeline) and a load sequence. Use at most one of them besides the stage.

## 1. Stage and growth (CSS scroll timeline, MOT25)

The static layout is the default: headline above, film full width below. The scroll version only exists inside `@supports` and `no-preference`, so browsers without scroll timelines and reduced-motion users get a finished page.

```html
<section class="stage">
  <div class="sticky">
    <h1>Headline in one or two lines.</h1>
    <div class="reel" id="reel" role="region" aria-label="Product film">
      <div class="reel-in"><!-- scenes --></div>
      <div class="reel-ui"><!-- caption, progress bars, pause --></div>
    </div>
  </div>
</section>
```

```css
.stage{padding:112px var(--gut) 40px;display:grid;gap:28px}
.reel{position:relative;width:100%;aspect-ratio:16/9;border-radius:28px;overflow:hidden;transform-origin:50% 50%}

@supports (animation-timeline:view()){
  @media (prefers-reduced-motion:no-preference){
    .stage{height:270vh;padding:0;display:block;view-timeline-name:--stage}
    .sticky{position:sticky;top:0;height:100svh;display:grid;place-items:center;overflow:hidden}
    .reel{--s0:.3;width:min(1400px,calc(100vw - 2 * var(--gut)),calc((100svh - 120px) * 16 / 9));
      transform:scale(var(--s0));animation:grow linear both;animation-timeline:--stage;animation-range:contain 0% contain 72%}
    @keyframes grow{to{transform:scale(1)}}
    .sticky h1{position:absolute;left:var(--gut);bottom:clamp(24px,5vh,56px);
      animation:headOut linear both;animation-timeline:--stage;animation-range:contain 8% contain 34%}
    @keyframes headOut{to{opacity:0;transform:translateY(-30px)}}
    .reel-ui{animation:uiIn linear both;animation-timeline:--stage;animation-range:contain 50% contain 70%}
    @keyframes uiIn{from{opacity:0}}
  }
  @media (prefers-reduced-motion:no-preference) and (max-width:820px){
    .stage{height:200vh}
    .reel{--s0:.62} /* at .3 the film is a stamp on a phone */
  }
}
```

Notes:

- Scale with `transform`, never `width`, so the growth never triggers layout (PRF rules on animating layout properties).
- `contain 0%` to `contain 72%` is the whole sticky phase minus a short hold at full size. The film reaches full width before the next section arrives.
- The width cap `(100svh - 120px) * 16 / 9` keeps the full-size film inside the viewport on wide, short screens.

## 2. Scenes (SVG plus CSS)

Each scene is one SVG with `viewBox="0 0 1600 900"`, a flat colour field and two or three objects that tell one input-to-output story. Rules that kept them from looking generated:

- One field colour per product and one darker and one lighter tint of it for a wide ribbon stroke behind the objects. No gradients, glows or blur.
- Real content in the objects: actual words in a transcript card, actual translated sentences in pills. Text in the SVG uses the page font through CSS (`.scene text{font-family:var(--sans)}`).
- Every keyframe is written as `from` only, with `animation-fill-mode:both`. With animation off (reduced motion, still image, no support) every element sits in its final, readable state for free.
- Animations live under `.on` so removing and re-adding the class restarts the scene.
- Never set an animated `transform` on an element that also has a `transform` attribute; the CSS wins and the element jumps to the origin. Position with an outer `<g transform>`, animate an inner `<g>`.
- `transform-box:fill-box; transform-origin:center` on anything that scales or rotates.
- Loops only where the loop is the product (audio bars, players moving on a pitch). Decorative spins and pulses become one-time moves (SLOP52).
- No `id` inside scenes: they are cloned. Use `pathLength="1"` with `stroke-dasharray:1` for line draws instead of measured lengths.

```css
.scene{position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .7s var(--ease)}
.scene.on{opacity:1}
.bar,.pop{transform-box:fill-box;transform-origin:center}
.on .bar{animation:bar .9s ease-in-out infinite alternate;animation-delay:calc(var(--i) * -.17s)}
@keyframes bar{from{transform:scaleY(.28)}}
.on .rib{stroke-dasharray:1;animation:draw 2.2s var(--ease) both}
@keyframes draw{from{stroke-dashoffset:1}}
.on .card{animation:rise .9s var(--ease) both;animation-delay:calc(.15s + var(--i,0) * .2s)}
@keyframes rise{from{opacity:0;transform:translateY(46px)}}
```

## 3. Timing, pause and off-screen (no timers)

A progress bar per scene drives the sequence. When the active bar's fill animation ends, the next scene starts. Pausing the film, scrolling it off screen and switching tabs all reduce to pausing that one animation, and reduced motion removes it, which leaves the scene chooser as manual buttons.

```css
.seg i{display:block;height:3px;transform:scaleX(0);transform-origin:left}
.seg.done i{transform:scaleX(1)}
.seg.on i{animation:fill 6s linear forwards}
@keyframes fill{to{transform:scaleX(1)}}
.reel.paused .seg.on i,.reel.off .seg.on i,
.reel.paused .scene *,.reel.off .scene *{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){.seg.on i{animation:none;transform:scaleX(1)}}
```

```js
const reel = document.getElementById('reel');
const scenes = [...reel.querySelectorAll('.scene')];
const segs = [...reel.querySelectorAll('.seg')];
const cap = reel.querySelector('.cap');   // aria-live caption inside .reel-ui
let cur = 0;
function show(i){
  cur = (i + scenes.length) % scenes.length;
  scenes.forEach((s, k) => s.classList.toggle('on', k === cur));
  segs.forEach((s, k) => { s.classList.remove('on'); s.classList.toggle('done', k < cur); });
  void segs[cur].offsetWidth;            // restart the fill animation
  segs[cur].classList.add('on');
  cap.textContent = scenes[cur].dataset.cap;
}
segs.forEach((s, k) => {
  s.addEventListener('click', () => show(k));
  s.querySelector('i').addEventListener('animationend', () => { if (k === cur) show(cur + 1); });
});
new IntersectionObserver(([e]) => reel.classList.toggle('off', !e.isIntersecting), {threshold: .15}).observe(reel);
document.addEventListener('visibilitychange', () => reel.classList.toggle('off', document.hidden));
show(0);
```

Autoplay that lasts more than five seconds needs a visible pause control (WCAG 2.2.2). Keep the caption in an `aria-live="polite"` element and mark the SVGs `aria-hidden`.

## 4. Tiles that reuse the scenes

```js
const io = new IntersectionObserver(es => es.forEach(e =>
  e.target.firstElementChild.classList.toggle('on', e.isIntersecting)), {threshold: .35});
document.querySelectorAll('[data-scene]').forEach(m => {
  const c = scenes[+m.dataset.scene].cloneNode(true);
  c.classList.remove('on');
  c.setAttribute('preserveAspectRatio', 'xMidYMid meet');   // narrow tiles must not crop the story
  m.appendChild(c);
  m.style.background = c.querySelector('rect').getAttribute('fill');  // letterbox in the field colour
  io.observe(m);
});
```

The hero uses `slice` because it is exactly 16:9. Tiles are not, so `meet` plus a background in the field colour shows the whole scene with invisible bands. With `slice`, side elements (translation pills, captions) get cut off in the narrow column.

## 5. Optional: word-by-word darkening (view timeline)

```js
const p = document.getElementById('scrub');
const words = p.textContent.split(' ');
p.innerHTML = words.map((w, i) => `<span class="w" style="--k:${(i / words.length * 40).toFixed(2)}%">${w}</span>`).join(' ');
```

```css
@supports (animation-timeline:view()){
  @media (prefers-reduced-motion:no-preference){
    .scrub .w{animation:ink linear both;animation-timeline:view();
      animation-range:cover calc(18% + var(--k)) cover calc(30% + var(--k))}
    @keyframes ink{from{color:var(--ink-4)}}
  }
}
```

Words are ink by default, so the paragraph reads correctly without support. Use this on one paragraph only; on several it becomes the fade-up cliché in a new costume (SLOP48).

## 6. Optional: load sequence that cannot strand content

Hide only when a script has marked the page, and reveal on a plain timer as well as on fonts. `requestAnimationFrame` does not fire in background or hidden tabs, so a reveal waiting on it can leave the page invisible.

```css
@media (prefers-reduced-motion:no-preference){
  .js .hw > span{transform:translateY(108%)}
  .js.ready .hw > span{transform:none;transition:transform 1.1s var(--ease);transition-delay:calc(.25s + var(--w) * 55ms)}
  .js .reel-in{clip-path:inset(42% 42% round 28px)}
  .js.ready .reel-in{clip-path:inset(0 round 28px);transition:clip-path 1.2s var(--ease) .1s}
}
```

```js
const root = document.documentElement;
root.classList.add('js');
const ready = () => root.classList.add('ready');
Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1200))]).then(() => setTimeout(ready, 30));
setTimeout(ready, 1600);   // belt and braces
```

## Pitfalls found while building it

- **Hidden tabs and preview panes freeze `requestAnimationFrame` and transitions.** Screenshots taken there show stale frames. Verify end states with `getComputedStyle` before believing a screenshot.
- **A `backdrop-filter` on the header makes it the containing block for `position:fixed` children.** A mobile menu sheet inside that header gets clipped to the header's height. Put the blur on a `::before` pseudo-element, or move the sheet out of the header.
- **Tooltips and labels at the edges of a grid add scroll width even at `opacity:0`.** Use `display:none` until shown, and anchor edge items to the inside.
- **Grid and flex children default to `min-width:auto`.** A `<pre>` or a nowrap table inside one will push the page sideways on phones. Give those children `min-width:0`.
- **`100vh` is cut off by mobile browser bars.** Use `100svh` for the sticky stage.

## Checks before shipping

Run the normal `CHECKLIST.md`, plus:

- Scroll the stage at 1440 and 390 wide: the film reaches full size before the next section, the headline never overlaps it, nothing scrolls sideways at 320.
- Turn on reduced motion: static layout, film full size, no autoplay, scene buttons still switch scenes.
- Open in a browser without scroll timelines (Firefox at the time of writing): same static layout, no errors.
- Leave the tab and come back: the film resumes where it paused.
- `node scripts/slop-scan.mjs <file>`: expect warnings only for loops that show the product working and, if the brief pinned it, uppercase mono navigation. Everything else should be clean.
