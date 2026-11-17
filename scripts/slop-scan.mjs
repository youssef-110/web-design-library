#!/usr/bin/env node
// Scans files for the machine-checkable patterns in rules/anti-slop.md.
// Usage: node scripts/slop-scan.mjs [--json] <file or folder> ...
//        node scripts/slop-scan.mjs --self-test
// Exit code 1 when an error-level pattern is found (or the self-test fails), 0 otherwise.
// A line containing "slop-ok" is skipped, for the rare deliberate case (a quoted bad example, a brand really named Acme).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const MARKUP = ['.html', '.jsx', '.tsx', '.vue', '.svelte', '.astro'];
const SCOPES = {
  markup: MARKUP,
  style: ['.css', '.scss', ...MARKUP],
  script: ['.js', '.ts', ...MARKUP],
  copy: ['.md', ...MARKUP],
  code: ['.css', '.scss', '.js', '.ts', ...MARKUP],
};
const EXTENSIONS = new Set(Object.values(SCOPES).flat());
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.astro', 'vendor']);

// Each pattern: rule (ID in rules/anti-slop.md), sev, scope, re (global), fix, and one bad and one good snippet for the self-test.
// Optional: max (matches allowed per file), unless (skip the file when this matches), check (extra test on a match), ext (self-test file type).
// Dash, arrow and emoji characters are written as escapes so this file never contains them.
const PATTERNS = [
  { rule: 'SLOP11', sev: 'warn', scope: 'markup', re: /scroll (?:to (?:explore|discover|begin)|down)\b/gi,
    fix: 'Delete the scroll cue. Let the next section peek into the first screen.',
    bad: '<span class="cue">Scroll to explore</span>', good: '<p>Scroll position is saved between visits.</p>' },
  { rule: 'SLOP19', sev: 'warn', scope: 'style',
    re: /\b(?:from|via|to)-(?:purple|violet|indigo|fuchsia)-\d{2,3}\b|gradient\([^;{}]*?(?:\b(?:purple|violet|indigo|blueviolet|rebeccapurple)\b|#(?:6366f1|8b5cf6|a855f7|7c3aed|4f46e5|9333ea)\b)/gi,
    fix: 'Purple or indigo gradient. Take the hue from the subject, and drop the gradient unless it depicts something.',
    bad: '.hero { background: linear-gradient(90deg, #8b5cf6, #3b82f6); }', good: '.hero { background: linear-gradient(180deg, #0b3d2e, #14532d); }' },
  { rule: 'SLOP20', sev: 'error', scope: 'style', re: /background-clip:\s*text|\bbg-clip-text\b/gi,
    fix: 'Gradient text. Use one solid colour and carry emphasis with size or weight.',
    bad: 'h1 { -webkit-background-clip: text; color: transparent; }', good: 'h1 { background-clip: padding-box; }' },
  { rule: 'SLOP21', sev: 'warn', scope: 'style', re: /(?:box-shadow|drop-shadow)[^;{}]*?\b0(?:px)?\s+0(?:px)?\s+(?:[2-9]\d|\d{3,})px/gi,
    fix: 'Zero-offset glow. Use a shadow with a downward offset, or none.',
    bad: '.card { box-shadow: 0 0 40px rgba(139, 92, 246, 0.5); }', good: '.card { box-shadow: 0 1px 2px rgba(20, 30, 20, 0.08); }' },
  { rule: 'SLOP27', sev: 'warn', scope: 'style',
    re: /border-(?:left|right|inline-start|inline-end)(?:-width)?:\s*(?:[3-9]|\d{2,})px|\bborder-[lr]-(?:4|8)\b/gi,
    fix: 'Thick side stripe. Use a tinted background, a full border, or an icon and a word.',
    bad: '.note { border-left: 4px solid #f59e0b; }', good: '.note { border-left: 1px solid #d4d4d4; }' },
  { rule: 'SLOP34', sev: 'error', scope: 'copy', re: /\p{Emoji_Presentation}|\p{Extended_Pictographic}\uFE0F/gu,
    fix: 'Emoji in markup. Use an icon from the project icon set, or no icon.',
    bad: '<h2>\u{1F680} Launch faster</h2>', good: '<h2>Launch day checklist</h2>' },
  { rule: 'SLOP38', sev: 'warn', scope: 'style', max: 2, re: /text-transform:\s*uppercase|\buppercase\b[^"'`\n]{0,60}\btracking-/g,
    fix: 'Uppercase labels used more than twice. Use sentence case, or drop the label.',
    bad: '.a { text-transform: uppercase } .b { text-transform: uppercase } .c { text-transform: uppercase }', good: '.tag { text-transform: uppercase }' },
  { rule: 'SLOP39', sev: 'warn', scope: 'markup', re: /<h[1-6][^>]*>\s*(?:[A-Z][a-z']+\s+){2,}[A-Z][a-z']+\s*<\/h[1-6]>/g,
    fix: 'Title Case heading. Use sentence case.',
    bad: '<h2>Everything You Need To Scale</h2>', good: '<h2>Everything you need to scale</h2>' },
  { rule: 'SLOP44', sev: 'warn', scope: 'style', re: /letter-spacing:\s*-0?\.(?:0[5-9]|[1-9])\d*em|\btracking-\[-0?\.(?:0[5-9]|[1-9])\d*em\]/g,
    fix: 'Tracking tighter than -0.04em. Loosen it.',
    bad: 'h1 { letter-spacing: -0.06em; }', good: 'h1 { letter-spacing: -0.02em; }' },
  { rule: 'SLOP46', sev: 'warn', scope: 'style', re: /\bhover:font-(?:medium|semibold|bold|extrabold|black)\b|:hover\s*\{[^}]*font-weight/g,
    fix: 'Font weight changes on hover and shifts the layout. Change colour or underline.',
    bad: 'a:hover { font-weight: 700; }', good: 'a:hover { text-decoration: underline; }' },
  { rule: 'SLOP50', sev: 'error', scope: 'code', re: /scale\(\s*0\s*\)|\bscale-0\b|\bscale:\s*0(?![.\d])/g,
    fix: 'Entrance from scale(0). Start at 0.96 with opacity 0.',
    bad: '@keyframes pop { from { transform: scale(0); } }', good: '@keyframes pop { from { transform: scale(0.96); opacity: 0; } }' },
  { rule: 'SLOP50', sev: 'error', scope: 'code',
    re: /\b(?:bounce|elastic|back)\.(?:in|out|inOut)\b|\banimate-bounce\b|\bease(?:In|Out|InOut)(?:Bounce|Elastic|Back)\b/g,
    fix: 'Bounce or elastic easing. Use ease-out.',
    bad: 'gsap.to(el, { ease: "elastic.out(1, 0.3)" });', good: 'gsap.to(el, { ease: "power3.out" });', ext: '.js' },
  { rule: 'SLOP50', sev: 'error', scope: 'code', re: /cubic-bezier\(\s*-?[\d.]+\s*,\s*(-?[\d.]+)\s*,\s*-?[\d.]+\s*,\s*(-?[\d.]+)\s*\)/g,
    check: (m) => [Number(m[1]), Number(m[2])].some((y) => y < 0 || y > 1),
    fix: 'Overshooting curve. Keep both y values between 0 and 1.',
    bad: '.b { transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); }', good: '.b { transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1); }' },
  { rule: 'SLOP51', sev: 'error', scope: 'style', re: /transition(?:-property)?:\s*all\b|\btransition-all\b/g,
    fix: 'transition: all. Name the properties that change.',
    bad: '.btn { transition: all 0.3s; }', good: '.btn { transition: transform 0.15s, opacity 0.15s; }' },
  { rule: 'SLOP51', sev: 'warn', scope: 'style', re: /\bease-in\b(?!-out)/g,
    fix: 'ease-in on interface feels late. Use ease-out.',
    bad: '.menu { transition: opacity 0.2s ease-in; }', good: '.menu { transition: opacity 0.2s ease-in-out; }' },
  { rule: 'SLOP52', sev: 'warn', scope: 'style', re: /animation[^;{}]*\binfinite\b|\banimate-(?:pulse|ping)\b/g,
    fix: 'Endless animation. Keep it only for real loading or live state.',
    bad: '.dot { animation: pulse 2s infinite; }', good: '.dot { animation: settle 0.2s ease-out 1; }' },
  { rule: 'SLOP53', sev: 'warn', scope: 'markup', re: /<marquee\b|\bmarquee\b/gi,
    fix: 'Marquee. Use a static row, or controls the visitor operates.',
    bad: '<div class="marquee"><img src="a.svg" alt="Northwind"></div>', good: '<ul class="logos"><li>Northwind</li></ul>' },
  { rule: 'SLOP54', sev: 'warn', scope: 'script',
    re: /(?:from\s+|require\(\s*|import\(\s*)['"](?:lenis|@studio-freight\/lenis|locomotive-scroll|smooth-scrollbar)['"]/g,
    fix: 'Smooth-scroll library. Leave scrolling to the browser.',
    bad: "import Lenis from 'lenis';", good: "import { animate } from 'motion';", ext: '.js' },
  { rule: 'SLOP57', sev: 'warn', scope: 'style', once: true, unless: /prefers-reduced-motion/, re: /@keyframes\b/g,
    fix: 'Keyframes with no prefers-reduced-motion rule in this file. Add the reduced path.',
    bad: '@keyframes rise { from { opacity: 0; } }',
    good: '@keyframes rise { from { opacity: 0; } } @media (prefers-reduced-motion: no-preference) { .x { animation: rise 0.2s; } }' },
  { rule: 'SLOP58', sev: 'warn', scope: 'script', re: /addEventListener\(\s*['"]scroll['"]|\bonscroll\s*=/g,
    fix: 'Scroll listener. Use a CSS scroll timeline or IntersectionObserver.',
    bad: "window.addEventListener('scroll', onScroll);", good: 'new IntersectionObserver(onEnter).observe(el);', ext: '.js' },
  { rule: 'SLOP59', sev: 'error', scope: 'copy',
    re: /\b(?:seamless(?:ly)?|effortless(?:ly)?|supercharge[sd]?|turbocharge[sd]?|reimagine[sd]?|revolutioni[sz](?:e[sd]?|ing)|game[- ]chang(?:er|ing)|cutting[- ]edge|next[- ]gen(?:eration)?|world[- ]class|best[- ]in[- ]class|state[- ]of[- ]the[- ]art|frictionless|unleash(?:es|ed)?|elevate[sd]?|empower(?:s|ed|ing)?|synerg(?:y|ies)|blazing(?:ly)?[- ]fast|unlock the (?:power|potential)|to the next level)\b/gi,
    fix: 'Hype word. Say what the product does, with a number.',
    bad: '<p>A seamless way to supercharge your workflow.</p>', good: '<p>Send an invoice in two clicks.</p>' },
  { rule: 'SLOP60', sev: 'warn', scope: 'copy', re: /\b(?:not|isn't|more than) just (?:a|an|another)\b/gi,
    fix: 'Formula cadence. Write one plain sentence that is only true of this product.',
    bad: '<h2>Not just a calendar. A command centre.</h2>', good: '<h2>A calendar that books the room too</h2>' },
  { rule: 'SLOP61', sev: 'warn', scope: 'copy', re: /(?:\b[A-Z][a-z]+\.\s+){2}[A-Z][a-z]+\./g,
    fix: 'Three one-word sentences. Keep the one claim you can prove.',
    bad: '<p>Fast. Simple. Secure.</p>', good: '<p>It loads in under a second.</p>' },
  { rule: 'SLOP62', sev: 'error', scope: 'copy', re: /[\u2014\u2013]/g,
    fix: 'Em or en dash. Use a full stop, a comma, "to" or a hyphen.',
    bad: '<p>Fast \u2014 and simple</p>', good: '<p>Pages 3-5, fast and simple</p>' },
  { rule: 'SLOP62', sev: 'warn', scope: 'copy', max: 3, re: /\u00B7/g,
    fix: 'Middots chaining metadata. Use line breaks or commas.',
    bad: '<p>Design \u00B7 Build \u00B7 Ship \u00B7 Repeat \u00B7 Rest</p>', good: '<p>12 min read \u00B7 March</p>' },
  { rule: 'SLOP63', sev: 'warn', scope: 'copy', re: /\b99\.9+\s?%|\b10x\b|\b\d{1,3}(?:,\d{3})+\+|\b\d+[kKmM]\+/g,
    fix: 'Round or inflated figure. Use a real, sourced number or remove it.',
    bad: '<strong>10,000+</strong> teams', good: '<strong>212</strong> teams' },
  { rule: 'SLOP64', sev: 'error', scope: 'copy',
    re: /\b(?:lorem ipsum|dolor sit amet|john doe|jane doe|john smith|jane smith|acme(?: corp| inc)?|your company)\b/gi,
    fix: "Placeholder name or filler text. Write real content in the product's terms.",
    bad: '<p>Lorem ipsum dolor sit amet</p>', good: '<p>Rent is due on the first of the month.</p>' },
  { rule: 'SLOP65', sev: 'warn', scope: 'markup', re: />\s*(?:Learn more|Get started|Click here|Read more|Submit)\s*<\/(?:a|button)>/gi,
    fix: 'Generic label. Name the result: a verb and an object.',
    bad: '<a href="/pricing">Learn more</a>', good: '<a href="/pricing">See pricing</a>' },
  { rule: 'SLOP67', sev: 'error', scope: 'copy', re: /\b(?:oops|whoops|uh[- ]oh)\b|something went wrong/gi,
    fix: 'Cute or empty error. Say what happened and what to do next.',
    bad: '<p role="alert">Oops! Something went wrong.</p>', good: '<p role="alert">We could not save the file. Check your connection and try again.</p>' },
  { rule: 'SLOP69', sev: 'warn', scope: 'markup', max: 1, re: /(?:\u2192|\u2197|&rarr;|-&gt;)\s*<\/(?:a|button)>/g,
    fix: 'Arrow on more than one link. Keep it only where direction is the meaning.',
    bad: '<a href="/a">Plans \u2192</a> <a href="/b">Docs \u2192</a>', good: '<a href="/next">Next step \u2192</a>' },
  { rule: 'SLOP73', sev: 'error', scope: 'code', re: /\b(?:TODO|FIXME)\b|\/\/\s*\.\.\.|\/\*\s*\.\.\.\s*\*\/|<!--\s*\.\.\.\s*-->/g,
    fix: 'Placeholder comment. Finish the work, or report exactly what is missing.',
    bad: '// TODO: wire up the form', good: '// Debounced so the handler runs once per frame.', ext: '.js' },
  { rule: 'SLOP73', sev: 'error', scope: 'code',
    re: /\brest of (?:the |your )?(?:code|file|component|styles)\b|\bfor brevity\b|\b(?:your|add|put) (?:code|content|logic|styles) here\b|\b(?:implement|implementation) (?:this |goes )?(?:here|later)\b/gi,
    fix: 'Placeholder code. Write the full implementation.',
    bad: '/* rest of the styles go here */', good: '/* Layer order: base, layout, components. */', ext: '.css' },
  { rule: 'SLOP74', sev: 'error', scope: 'markup', re: /<(?:div|span|li|p)\b[^>]*(?:\bon[Cc]lick|@click|on:click)\s*=/g,
    fix: 'Clickable div or span. Use button for actions and a href for navigation.',
    bad: '<div class="card" onclick="open()">Open</div>', good: '<button type="button" onclick="open()">Open</button>' },
  { rule: 'SLOP75', sev: 'error', scope: 'markup', re: /<img\b(?![^>]*\balt\s*=)[^>]*>/gi,
    fix: 'Image without alt. Describe what it tells, or use alt="" for decoration.',
    bad: '<img src="market.jpg">', good: '<img src="market.jpg" alt="Two people at a market stall">' },
  { rule: 'SLOP76', sev: 'error', scope: 'style', unless: /focus-visible/, re: /outline:\s*(?:none|0(?![.\d]))|\boutline-none\b/g,
    fix: 'Outline removed and no :focus-visible style in this file. Add a 2px focus ring.',
    bad: 'button:focus { outline: none; }', good: 'button:focus { outline: none; } button:focus-visible { outline: 2px solid currentColor; }' },
  { rule: 'SLOP77', sev: 'warn', scope: 'style', re: /(?<!max-)\b(?:min-)?height:\s*100vh\b|\b(?:min-)?h-screen\b/g,
    fix: '100vh is cut off by mobile browser bars. Use 100svh for a hero, 100dvh for an app shell.',
    bad: '.hero { min-height: 100vh; }', good: '.hero { min-height: 100svh; }' },
  { rule: 'SLOP78', sev: 'warn', scope: 'style', re: /z-index:\s*9{3,}\d*|\bz-\[9{3,}\d*\]/g,
    fix: 'Arbitrary z-index. Use a short named layer scale.',
    bad: '.modal { z-index: 9999; }', good: '.modal { z-index: 30; }' },
  { rule: 'SLOP79', sev: 'error', scope: 'markup', re: /user-scalable\s*=\s*(?:no|0)|maximum-scale\s*=\s*1(?:\.0)?(?![.\d])/gi,
    fix: 'Zoom disabled. Remove it, and set inputs to 16px instead.',
    bad: '<meta name="viewport" content="width=device-width, user-scalable=no">', good: '<meta name="viewport" content="width=device-width, initial-scale=1">' },
  { rule: 'SLOP81', sev: 'warn', scope: 'markup', re: /href\s*=\s*["']#["']|href\s*=\s*["']javascript:/gi,
    fix: 'Dead link. Point it somewhere real, or make it a button that does something.',
    bad: '<a href="#">Pricing</a>', good: '<a href="#pricing">Pricing</a>' },
  { rule: 'SLOP82', sev: 'warn', scope: 'style', max: 3, re: /!important/g,
    fix: 'More than three !important. Fix the specificity, or use role tokens.',
    bad: 'a { color: red !important; margin: 0 !important; padding: 0 !important; top: 0 !important; }', good: '.u-hidden { display: none !important; }' },
  { rule: 'SLOP83', sev: 'error', scope: 'markup', re: /<html\b(?![^>]*\blang\s*=)[^>]*>/gi,
    fix: 'No lang on html. Add it.',
    bad: '<html><head><title>Rates</title></head>', good: '<html lang="en"><head><title>Rates</title></head>' },
];

function scanText(text, ext) {
  const lines = text.split('\n');
  const lineOf = (index) => text.slice(0, index).split('\n').length - 1;
  const findings = [];
  for (const p of PATTERNS) {
    if (!SCOPES[p.scope].includes(ext)) continue;
    if (p.unless && p.unless.test(text)) continue;
    let seen = 0;
    for (const m of text.matchAll(p.re)) {
      if (p.check && !p.check(m)) continue;
      const line = lineOf(m.index);
      if (lines[line].includes('slop-ok')) continue;
      seen += 1;
      if (seen <= (p.max ?? 0)) continue;
      findings.push({ line: line + 1, rule: p.rule, severity: p.sev, match: m[0].slice(0, 60), fix: p.fix });
      if (p.once) break;
    }
  }
  return findings.sort((a, b) => a.line - b.line);
}

function collect(path, out) {
  const st = statSync(path);
  if (st.isDirectory()) {
    for (const name of readdirSync(path)) if (!SKIP_DIRS.has(name)) collect(join(path, name), out);
  } else if (EXTENSIONS.has(extname(path).toLowerCase())) out.push(path);
  return out;
}

function selfTest() {
  let failed = 0;
  PATTERNS.forEach((p, i) => {
    const ext = p.ext ?? (p.scope === 'copy' || p.scope === 'markup' ? '.html' : '.css');
    const fires = (snippet) => scanText(snippet, ext).some((f) => f.rule === p.rule && f.fix === p.fix);
    const missed = !fires(p.bad), falseHit = fires(p.good);
    if (missed || falseHit) {
      failed += 1;
      console.log(`FAIL pattern ${i + 1} (${p.rule}): ${missed ? 'missed its bad case' : 'fired on its good case'}`);
    }
  });
  const suppressed = scanText('<p>Lorem ipsum</p> <!-- slop-ok -->', '.html').length === 0;
  if (!suppressed) { failed += 1; console.log('FAIL slop-ok did not suppress a finding'); }
  console.log(failed ? `Self-test failed: ${failed} problem(s).` : `Self-test passed: ${PATTERNS.length} patterns, bad and good cases.`);
  return failed ? 1 : 0;
}

const args = process.argv.slice(2);
const json = args.includes('--json');
const paths = args.filter((a) => !a.startsWith('--'));

if (args.includes('--self-test')) process.exit(selfTest());
if (!paths.length) {
  console.log('Usage: node scripts/slop-scan.mjs [--json] <file or folder> ...\n       node scripts/slop-scan.mjs --self-test');
  process.exit(2);
}

const files = paths.flatMap((p) => collect(p, []));
const findings = files.flatMap((file) =>
  scanText(readFileSync(file, 'utf8').replace(/\r\n/g, '\n'), extname(file).toLowerCase())
    .map((f) => ({ file: relative(process.cwd(), file).replace(/\\/g, '/'), ...f })));
const errors = findings.filter((f) => f.severity === 'error').length;
const warnings = findings.length - errors;

if (json) console.log(JSON.stringify({ files: files.length, errors, warnings, findings }, null, 2));
else {
  for (const f of findings) console.log(`${f.file}:${f.line}  ${f.severity.padEnd(5)}  ${f.rule}  ${f.fix}  [${f.match.trim()}]`);
  console.log(`${files.length} file(s) scanned: ${errors} error(s), ${warnings} warning(s).`);
}
process.exit(errors ? 1 : 0);
