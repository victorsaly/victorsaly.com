// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://victorsaly.com',
  // GitHub Pages serves /privacy/index.html at /privacy — keep URLs extensionless.
  build: { format: 'directory' },
});
