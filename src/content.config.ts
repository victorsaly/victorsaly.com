/*
 * The projects, read from Markdown and YAML in src/content/ and checked against src/content/schema.ts,
 * so a project file that breaks a rule fails the build rather than the page.
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { alsoSchema, workSchema } from './content/schema';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: workSchema,
});

const also = defineCollection({
  loader: file('./src/content/also.yaml'),
  schema: alsoSchema,
});

export const collections = { work, also };
