// Measures a live site for a library entry: type scale, colours, layout numbers, motion stack
// (GSAP tweens and ScrollTriggers, CSS transitions and animations, smooth scroll, WebGL canvases)
// and four screenshots at different scroll depths. Uses a local Chrome or Edge over the DevTools
// protocol; no npm packages (needs Node 22+ for the built-in WebSocket).
//
//   node scripts/probe-site.mjs <outDir> <slug>=<url>[|<button text>] ...
//
// For sites behind an entry or consent screen, add |<button text> to press that button first
// (matched by the start of its text, case-insensitive). Always pick the decline or no-sound option.
//
// Writes <outDir>/<slug>.json and <slug>-0..3.jpg. Read the JSON, look at the screenshots, then
// write the entry in your own words. The screenshots are for you; do not commit them (README rules).
// Browser path: set CHROME_PATH, or the script tries the usual install paths. If the browser will not
// start from Node in your shell, launch it yourself with --headless=new --remote-debugging-port=9333
// and run the script with NOSPAWN=1.
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [outDir, ...pairs] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
import { existsSync } from 'node:fs';
const EDGE = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'
].find(p => existsSync(p));
if (!EDGE && !process.env.NOSPAWN) { console.error('No Chrome or Edge found. Set CHROME_PATH.'); process.exit(1); }
const PORT = 9333;
const sleep = ms => new Promise(r => setTimeout(r, ms));

const edge = process.env.NOSPAWN ? { kill(){} } : spawn(EDGE, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${join(outDir, '.edge')}`,
  '--window-size=1440,900', '--hide-scrollbars', '--mute-audio', '--autoplay-policy=no-user-gesture-required', 'about:blank'], { stdio: 'ignore' });

async function target() {
  for (let i = 0; i < 120; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' }); return await r.json(); }
    catch (e) { if (i === 119) console.error(e); await sleep(250); }
  }
  throw new Error('Edge did not start');
}

function client(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0; const pending = new Map(); const waiters = [];
  ws.onmessage = ev => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { const { res, rej } = pending.get(m.id); pending.delete(m.id); m.error ? rej(new Error(m.error.message)) : res(m.result); }
    else if (m.method) for (const w of [...waiters]) if (w.method === m.method) { waiters.splice(waiters.indexOf(w), 1); w.res(m.params); }
  };
  const ready = new Promise(r => ws.onopen = r);
  const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
  const once = (method, ms) => new Promise(res => { const w = { method, res }; waiters.push(w); setTimeout(() => { const k = waiters.indexOf(w); if (k >= 0) { waiters.splice(k, 1); res(null); } }, ms); });
  return { ready, send, once, close: () => ws.close() };
}

// Runs inside the page. Returns plain JSON.
const PROBE = String.raw`(() => {
  const hex = c => { const m = c && c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(s => parseFloat(s)); if (p.length > 3 && p[3] < 0.05) return null; return '#' + p.slice(0, 3).map(v => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase() + (p.length > 3 && p[3] < 1 ? '@' + p[3] : ''); };
  const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && parseFloat(s.opacity) > 0.02; };
  const all = [...document.querySelectorAll('body *')];
  const top = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => k + ' x' + Math.round(v));
  const inc = (map, k, v = 1) => map.set(k, (map.get(k) || 0) + v);
  // type: group text-bearing elements by computed style
  const type = new Map(); const typeSize = [];
  for (const e of all) {
    const own = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    if (!own || !vis(e)) continue;
    const s = getComputedStyle(e);
    const key = [s.fontFamily.split(',')[0].replace(/["']/g, '').trim(), s.fontSize, s.fontWeight, s.fontStyle === 'italic' ? 'italic' : '', 'lh ' + s.lineHeight, 'ls ' + s.letterSpacing, s.textTransform !== 'none' ? s.textTransform : ''].filter(Boolean).join(' | ');
    inc(type, key, own.length);
  }
  const typeRows = [...type.entries()].map(([k, v]) => ({ k, v, px: parseFloat(k.split(' | ')[1]) }));
  const bySize = typeRows.sort((a, b) => b.px - a.px).slice(0, 14).map(r => r.k + ' (chars ' + r.v + ')');
  const byUse = [...type.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => k + ' (chars ' + v + ')');
  // colours: backgrounds by area, text by characters, borders by count
  const bg = new Map(), fg = new Map(), bd = new Map(), radius = new Map(), maxw = new Map(), trans = new Map();
  const vw = innerWidth;
  for (const e of all) {
    if (!vis(e)) continue;
    const s = getComputedStyle(e), r = e.getBoundingClientRect();
    const b = hex(s.backgroundColor); if (b) inc(bg, b, Math.min(r.width * r.height, vw * 3000) / 1000);
    if (s.backgroundImage && s.backgroundImage.includes('gradient')) inc(bg, 'gradient: ' + s.backgroundImage.slice(0, 90), 1);
    const own = [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    if (own) { const c = hex(s.color); if (c) inc(fg, c, e.textContent.trim().length); }
    if (parseFloat(s.borderTopWidth) > 0 && s.borderTopStyle !== 'none') { const c = hex(s.borderTopColor); if (c) inc(bd, s.borderTopWidth + ' ' + c); }
    if (s.borderTopLeftRadius !== '0px') inc(radius, s.borderTopLeftRadius);
    if (s.maxWidth !== 'none' && r.width > 300) inc(maxw, s.maxWidth);
    if (s.transitionDuration !== '0s') inc(trans, s.transitionProperty.slice(0, 60) + ' / ' + s.transitionDuration + ' / ' + s.transitionTimingFunction);
  }
  const fonts = [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/["']/g, '') + ' ' + f.weight + (f.style !== 'normal' ? ' ' + f.style : '')))];
  const fontLinks = [...document.querySelectorAll('link[href]')].map(l => l.href).filter(h => /font|typekit|googleapis/.test(h)).slice(0, 6);
  const scripts = [...document.scripts].map(s => s.src).filter(Boolean).map(u => { try { const x = new URL(u); return x.hostname.replace('www.', '') + x.pathname.split('/').slice(-2).join('/'); } catch { return u; } }).slice(0, 40);
  const W = window, html = document.documentElement;
  const libs = {
    gsap: W.gsap && W.gsap.version, ScrollTrigger: !!W.ScrollTrigger, ScrollSmoother: !!W.ScrollSmoother, SplitText: !!W.SplitText, Flip: !!W.Flip, CustomEase: !!W.CustomEase, Observer: !!W.Observer, DrawSVG: !!W.DrawSVGPlugin,
    lenis: !!(W.lenis || W.Lenis || html.classList.contains('lenis') || html.className.includes('lenis')), locomotive: !!(W.LocomotiveScroll || html.classList.contains('has-scroll-smooth') || document.querySelector('[data-scroll-container]')),
    barba: !!W.barba, swup: !!W.swup, three: W.THREE && W.THREE.REVISION, pixi: !!W.PIXI, ogl: !!W.OGL,
    webflow: !!(html.dataset.wfSite || W.Webflow), webflowIX: document.querySelectorAll('[data-w-id]').length, framer: document.querySelectorAll('[data-framer-name]').length,
    next: !!(W.__NEXT_DATA__ || document.getElementById('__next')), nuxt: !!(W.__NUXT__ || document.getElementById('__nuxt')), astro: !!document.querySelector('astro-island'), sveltekit: !!document.querySelector('[data-sveltekit-hydrate],[data-sveltekit-preload-data]'),
    lottie: !!(W.lottie || W.bodymovin || document.querySelector('lottie-player,dotlottie-player')), rive: !!W.rive, spline: !!document.querySelector('spline-viewer'), swiper: !!document.querySelector('.swiper'), splitWords: document.querySelectorAll('.word,.char,[data-split],.split-line,.line-inner').length,
    canvases: [...document.querySelectorAll('canvas')].filter(vis).map(c => Math.round(c.getBoundingClientRect().width) + 'x' + Math.round(c.getBoundingClientRect().height)).slice(0, 5),
    videos: [...document.querySelectorAll('video')].map(v => (v.autoplay ? 'autoplay ' : '') + (v.loop ? 'loop ' : '') + (v.muted ? 'muted' : '')).slice(0, 6),
    customCursor: [...document.querySelectorAll('[class*=cursor]')].filter(e => getComputedStyle(e).position === 'fixed').length,
    scrollBehavior: getComputedStyle(html).scrollBehavior
  };
  // gsap tween and ScrollTrigger census
  let tweens = null, triggers = null;
  if (W.gsap) {
    try {
      const kids = W.gsap.globalTimeline.getChildren(true, true, true);
      const em = new Map();
      for (const t of kids) { const v = t.vars || {}; const ease = typeof v.ease === 'string' ? v.ease : (v.ease ? 'custom fn' : (t.timeline ? 'inherit' : 'default power1.out')); const props = Object.keys(v).filter(k => !/^(ease|duration|delay|stagger|onComplete|onUpdate|onStart|scrollTrigger|paused|repeat|yoyo|overwrite|immediateRender|id|data|callbackScope|lazy|inherit|defaults|onReverseComplete|onRepeat|smoothChildTiming|autoRemoveChildren)$/.test(k)).slice(0, 6).join(','); inc(em, (t.getChildren ? 'timeline' : 'tween') + ' ' + (t.duration && t.duration().toFixed(2)) + 's ' + ease + ' [' + props + ']' + (v.stagger ? ' stagger ' + JSON.stringify(v.stagger).slice(0, 40) : '')); }
      tweens = { count: kids.length, top: top(em, 18) };
    } catch (e) { tweens = 'error ' + e.message; }
  }
  if (W.ScrollTrigger) {
    try { triggers = W.ScrollTrigger.getAll().slice(0, 25).map(st => { const t = st.trigger; const tn = t ? (t.tagName.toLowerCase() + (t.className && typeof t.className === 'string' ? '.' + t.className.trim().split(/\s+/).slice(0, 2).join('.') : '')) : '-'; return tn + ' start ' + Math.round(st.start) + ' end ' + Math.round(st.end) + (st.pin ? ' PIN' : '') + (st.vars.scrub !== undefined ? ' scrub ' + st.vars.scrub : '') + (st.vars.toggleActions ? ' ' + st.vars.toggleActions : ''); }); }
    catch (e) { triggers = 'error ' + e.message; }
  }
  const anims = new Map();
  for (const a of document.getAnimations()) { const t = a.effect && a.effect.getTiming ? a.effect.getTiming() : {}; inc(anims, (a.animationName || a.transitionProperty || a.constructor.name) + ' ' + t.duration + 'ms ' + t.easing + (t.iterations === Infinity ? ' infinite' : '')); }
  const keyframes = []; for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) if (r.type === 7) keyframes.push(r.name); } catch {} }
  const header = document.querySelector('header,nav,[class*=header],[class*=nav]');
  const hr = header && header.getBoundingClientRect();
  const sections = [...(document.querySelector('main') || document.body).children].filter(vis).slice(0, 16).map(e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); const h = e.querySelector('h1,h2,h3'); return e.tagName.toLowerCase() + ' h' + Math.round(r.height) + ' bg ' + (hex(s.backgroundColor) || '-') + (h ? ' | ' + h.textContent.trim().replace(/\s+/g, ' ').slice(0, 60) : ''); });
  return { url: location.href, title: document.title, viewport: innerWidth + 'x' + innerHeight, pageHeight: document.documentElement.scrollHeight,
    fonts, fontLinks, typeBySize: bySize, typeByUse: byUse, bg: top(bg, 10), text: top(fg, 8), borders: top(bd, 6), radius: top(radius, 8), maxWidth: top(maxw, 6), transitions: top(trans, 10),
    libs, tweens, triggers, anims: top(anims, 12), keyframes: [...new Set(keyframes)].slice(0, 20), header: hr ? { tag: header.tagName.toLowerCase(), h: Math.round(hr.height), pos: getComputedStyle(header).position, bg: hex(getComputedStyle(header).backgroundColor) } : null, sections, scripts };
})()`;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/157.0.0.0 Safari/537.36 Edg/157.0.0.0';

async function shot(c, file, y) {
  const r = await c.send('Page.captureScreenshot', { format: 'jpeg', quality: 62 });  // current viewport; device scale 0.6 keeps files small
  writeFileSync(file, Buffer.from(r.data, 'base64'));
}
const evalJson = async (c, expr) => { const r = await c.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); return r.result && r.result.value; };

const t = await target();
const c = client(t.webSocketDebuggerUrl); await c.ready;
await c.send('Page.enable'); await c.send('Runtime.enable'); await c.send('Network.enable');
await c.send('Network.setUserAgentOverride', { userAgent: UA });
await c.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 0.6, mobile: false });

for (const pair of pairs) {
  const [slug, rest] = [pair.slice(0, pair.indexOf('=')), pair.slice(pair.indexOf('=') + 1)];
  const [url, clickText] = rest.split('|');  // optional: text of an entry or consent button to press first (use the decline option)
  const out = { slug, url };
  try {
    const loaded = c.once('Page.loadEventFired', 45000);
    await c.send('Page.navigate', { url });
    await loaded; await sleep(6000);
    if (clickText) {
      const hit = await evalJson(c, `(() => { const t = ${JSON.stringify((clickText||'').toLowerCase())}; const el = [...document.querySelectorAll('button,a,[role=button],div,span')].find(e => e.children.length < 3 && e.textContent.replace(/\s+/g, ' ').trim().toLowerCase().startsWith(t)); if (el) { el.click(); return true; } return false; })()`);
      out.clicked = clickText + (hit ? ' ok' : ' NOT FOUND');
      await sleep(6000);
    }
    await shot(c, join(outDir, `${slug}-0.jpg`), 0);
    out.atLoad = await evalJson(c, PROBE);
    const H = out.atLoad ? out.atLoad.pageHeight : 6000;
    // walk down the page so scroll-triggered motion and lazy media run, then sample
    for (let y = 0; y <= Math.min(H, 16000); y += 450) { await evalJson(c, `(window.lenis && window.lenis.scrollTo ? window.lenis.scrollTo(${y}, {immediate:true}) : 0, window.scrollTo(0, ${y}), 1)`); await sleep(160); }
    for (const [i, frac] of [[1, 0.12], [2, 0.35], [3, 0.6]]) {
      const y = Math.round(H * frac);
      await evalJson(c, `(window.lenis && window.lenis.scrollTo ? window.lenis.scrollTo(${y}, {immediate:true}) : 0, window.scrollTo(0, ${y}), 1)`);
      await sleep(1800);
      await shot(c, join(outDir, `${slug}-${i}.jpg`), 0);
    }
    out.afterScroll = await evalJson(c, `(() => { const p = ${PROBE}; return { anims: p.anims, transitions: p.transitions, triggers: p.triggers, tweens: p.tweens, pageHeight: p.pageHeight, sections: p.sections }; })()`);
  } catch (e) { out.error = e.message; }
  writeFileSync(join(outDir, `${slug}.json`), JSON.stringify(out, null, 1));
  console.log(slug, out.error ? 'ERROR ' + out.error : 'ok', out.atLoad ? out.atLoad.pageHeight : '');
}
c.close(); edge.kill();
process.exit(0);


