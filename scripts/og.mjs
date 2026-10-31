/*
 * Draw public/og.png, the share card: `npm run og`.
 *
 * The same layout as blog.victorsaly.com's card (a heavy rule, a label, the name large, one line in
 * marigold, the address; the linocut portrait on the right), drawn from this site's own tokens and
 * self-hosted faces with the system Chrome (set CHROME=/path elsewhere), like npm run shots.
 */

/* global document -- page.evaluate callbacks run in the page, not in Node */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const card = { width: 1200, height: 630 };

const dataUrl = (file, type) => `data:${type};base64,${readFileSync(file).toString('base64')}`;
const font = (name) => dataUrl(join(root, 'public/fonts', name), 'font/woff2');
const tokens = readFileSync(join(root, 'src/styles/tokens.css'), 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'Atkinson Hyperlegible'; font-weight: 400;
    src: url(${font('atkinson-hyperlegible-400.woff2')}) format('woff2'); }
  @font-face { font-family: 'Atkinson Hyperlegible'; font-weight: 700;
    src: url(${font('atkinson-hyperlegible-700.woff2')}) format('woff2'); }
  ${tokens}
  * { box-sizing: border-box; margin: 0; }
  body { width: ${card.width}px; height: ${card.height}px; background: var(--paper); color: var(--ink);
    font-family: var(--font-read); display: grid; grid-template-columns: 1fr ${card.height}px; overflow: hidden; }
  .text { display: flex; flex-direction: column; padding: 48px 56px 40px; border-top: var(--rule-heavy) solid var(--ink); }
  .label { font-size: 22px; font-weight: 700; letter-spacing: var(--tracking-label); text-transform: uppercase;
    padding-bottom: 12px; border-bottom: var(--rule-strong) solid var(--ink); }
  .fit { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 28px; }
  h1 { font-size: 72px; line-height: 1.05; letter-spacing: var(--tracking-display); font-weight: 700; }
  p.message { font-size: 30px; line-height: var(--leading-tight); text-wrap: pretty; }
  mark { background: var(--mark); color: var(--mark-ink); padding: 0 0.15em; box-decoration-break: clone;
    -webkit-box-decoration-break: clone; }
  .domain { font-size: 22px; color: var(--quiet); padding-top: 12px; border-top: var(--rule-width) solid var(--rule); }
  img { width: ${card.height}px; height: ${card.height}px; object-fit: cover; display: block; }
</style></head><body>
  <div class="text">
    <p class="label">Work</p>
    <div class="fit"><h1>Victor Saly</h1><p class="message"><mark>I build small web things that do one job well.</mark></p></div>
    <p class="domain">victorsaly.com</p>
  </div>
  <img src="${dataUrl(join(root, 'scripts/og/portrait.png'), 'image/png')}" alt="">
</body></html>`;

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage();
await page.setViewport({ ...card, deviceScaleFactor: 1 });
// The card is ink on paper whatever this machine's own theme is.
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(root, 'public/og.png'), type: 'png' });
await browser.close();
console.info('public/og.png');
