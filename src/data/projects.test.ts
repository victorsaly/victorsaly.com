import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { live } from './projects';

const publicFile = (path: string): string => new URL(`../../public${path}`, import.meta.url).pathname;

describe('live projects', () => {
  it('each has its own slug', () => {
    const slugs = live.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('each has a screenshot on disk', () => {
    for (const project of live) expect(existsSync(publicFile(project.shot)), project.slug).toBe(true);
  });

  it('each film has a poster and captions on disk', () => {
    for (const project of live.filter((p) => p.film !== undefined)) {
      expect(project.filmPoster, project.slug).toBeDefined();
      expect(project.filmCaptions, project.slug).toBeDefined();
      for (const path of [project.film, project.filmPoster, project.filmCaptions]) {
        expect(existsSync(publicFile(path ?? '')), path).toBe(true);
      }
    }
  });

  it('each work page is in the sitemap', () => {
    const sitemap = readFileSync(publicFile('/sitemap.xml'), 'utf8');
    for (const project of live) {
      expect(sitemap, project.slug).toContain(`<loc>https://victorsaly.com/work/${project.slug}</loc>`);
    }
  });
});
