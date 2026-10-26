/*
 * The sitemap, made from the projects at build time, so a new project is in it without anyone
 * remembering to add a line.
 */
import type { APIRoute } from 'astro';
import { getWork } from '../lib/projects';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://victorsaly.com');
  const work = await getWork();
  const paths = ['/', ...work.map((entry) => `/work/${entry.id}`), '/privacy'];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, base).href}</loc></url>`);
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
