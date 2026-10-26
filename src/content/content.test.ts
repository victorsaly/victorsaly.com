import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { alsoSchema, workSchema } from './schema';

// fileURLToPath, not .pathname: a pathname is percent-encoded, so a checkout under a folder with a space
// in its name would make every file look missing.
const here = (path: string): string => fileURLToPath(new URL(path, import.meta.url));
const publicFile = (path: string): string => here(`../../public${path}`);

const frontMatter = (text: string): unknown =>
  parse(/^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1] ?? '');

const workFiles = readdirSync(here('./work')).filter((name) => name.endsWith('.md'));
const work = workFiles.map((name) => ({
  slug: name.replace(/\.md$/, ''),
  text: readFileSync(here(`./work/${name}`), 'utf8'),
}));

describe('live projects (src/content/work)', () => {
  it('each file says what the schema asks for', () => {
    for (const { slug, text } of work) {
      const result = workSchema.safeParse(frontMatter(text));
      expect(result.success, `${slug}: ${result.error?.message ?? ''}`).toBe(true);
    }
  });

  it('each has a story under its front matter', () => {
    for (const { slug, text } of work) {
      expect(text.replace(/^---[\s\S]*?\n---/, '').trim().length, slug).toBeGreaterThan(100);
    }
  });

  it('each screenshot, and each film with its poster and captions, is on disk', () => {
    for (const { slug, text } of work) {
      const project = workSchema.parse(frontMatter(text));
      const paths = [project.shot, project.film, project.filmPoster, project.filmCaptions];
      for (const path of paths.filter((p) => p !== undefined)) {
        expect(existsSync(publicFile(path)), `${slug}: ${path}`).toBe(true);
      }
    }
  });
});

describe('projects with the source only (src/content/also.yaml)', () => {
  const also: unknown = parse(readFileSync(here('./also.yaml'), 'utf8'));

  it('is a list where each entry says what the schema asks for, with its own id', () => {
    expect(Array.isArray(also)).toBe(true);
    const entries = (also as unknown[]).map((entry) => alsoSchema.parse(entry));
    const ids = entries.map((entry) => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
