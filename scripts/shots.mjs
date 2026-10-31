/*
 * Retake the live-app screenshots: `npm run shots` (or pass names to do a
 * subset, e.g. `npm run shots -- delulubeats lili`).
 *
 * Captures each site at 1280×800 with the system Chrome, then resizes to the
 * 800px JPEGs the cards use (sips — macOS; set CHROME=/path elsewhere and
 * swap the resize step). Two sites need persuasion, encoded below: Delulu
 * Beats hides behind its sound-activation gate unless autoplay is allowed,
 * and CorrelateAI plays an intro until "Skip intro" is clicked.
 *
 * File names must match the `shot` paths in src/data/projects.ts.
 */

/* global document -- page.evaluate callbacks run in the page, not in Node */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const SITES = {
  delulubeats: { url: 'https://delulubeats.com' },
  shutthecube: { url: 'https://shutthecube.com' },
  correlateai: { url: 'https://correlateai.victorsaly.com', click: /skip intro/i, settle: 6000 },
  feedmeai: { url: 'https://feedmeai.victorsaly.com' },
  lili: { url: 'https://victorsaly.github.io/LilianaBlog/' },
  liliart: { url: 'https://liliart.victorsaly.com' },
  olivermath: { url: 'https://victorsaly.github.io/OliverMath/', click: /let's go/i, settle: 6000 },
  agenticblog: { url: 'https://blog.victorsaly.com', scheme: 'light' },
};

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'shots');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const wanted = process.argv.slice(2);
const names = wanted.length ? wanted : Object.keys(SITES);
for (const name of names) {
  if (!SITES[name]) {
    console.error(`unknown site "${name}" — have: ${Object.keys(SITES).join(', ')}`);
    process.exit(1);
  }
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required', '--hide-scrollbars'],
});

const tmp = mkdtempSync(join(tmpdir(), 'shots-'));
try {
  for (const name of names) {
    const site = SITES[name];
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    // A site that follows the OS theme is captured in the one its first-time visitors most likely see.
    if (site.scheme) {
      await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: site.scheme }]);
    }
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise((r) => setTimeout(r, 3000));

    if (site.click) {
      const clicked = await page.evaluate(
        (pattern) => {
          const re = new RegExp(pattern.source, pattern.flags);
          const el = [...document.querySelectorAll('button, a, [role="button"], span, div')]
            .reverse()
            .find((e) => e.childElementCount === 0 && re.test(e.textContent.trim()));
          if (el) el.click();
          return Boolean(el);
        },
        { source: site.click.source, flags: site.click.flags },
      );
      if (!clicked) console.warn(`  ${name}: nothing matched ${site.click} — capturing as-is`);
      await new Promise((r) => setTimeout(r, site.settle ?? 2000));
    }

    const raw = join(tmp, `${name}.png`);
    await page.screenshot({ path: raw });
    await page.close();

    execFileSync(
      'sips',
      [
        '--resampleWidth',
        '800',
        '-s',
        'format',
        'jpeg',
        '-s',
        'formatOptions',
        '85',
        raw,
        '--out',
        join(outDir, `${name}.jpg`),
      ],
      { stdio: 'ignore' },
    );
    console.log(`✓ ${name}.jpg`);
  }
} finally {
  await browser.close();
  rmSync(tmp, { recursive: true, force: true });
}
