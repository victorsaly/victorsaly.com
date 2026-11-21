/*
 * The projects, read from Markdown in src/content/work/ and checked against src/content/schema.ts,
 * so a project file that breaks a rule fails the build rather than the page.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { workSchema } from './content/schema';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: workSchema,
});

export const collections = { work };
