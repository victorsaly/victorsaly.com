// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://victorsaly.com',
  // GitHub Pages serves /privacy/index.html at /privacy — keep URLs extensionless.
  build: { format: 'directory' },
  // Astro 7's default ("jsx") drops whitespace that holds a line break, so "games at" followed by a link on
  // the next line renders as "games atshutthecube.com". true collapses whitespace but keeps the space.
  compressHTML: true,
});
