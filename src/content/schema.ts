/*
 * What a project file must say, in one place: the site's content collections validate against these
 * schemas at build time, and the tests run the same schemas over the same files, so a broken project
 * fails both.
 */
import { z } from 'astro/zod';

/** a path to a file in public/, e.g. /shots/delulubeats.jpg */
const publicPath = z.string().regex(/^\/[\w./-]+$/);

/** A live project: src/content/work/<slug>.md. Its body is the story on /work/<slug>. */
export const workSchema = z
  .object({
    title: z.string().min(1).max(60),
    /** where its plate sits on the home page, lowest first; leave gaps so one can go between two */
    order: z.number().int().nonnegative(),
    /** what it does; its first sentence is the message marked on its page */
    summary: z.string().min(20).max(500),
    url: z.url(),
    /** what the link to it says, e.g. delulubeats.com */
    host: z.string().min(1),
    repo: z.url(),
    /** a real screenshot at 1280×800, saved 800px wide (npm run shots) */
    shot: publicPath,
    shotAlt: z.string().min(10),
    tech: z.array(z.string().min(1)).min(1),
    /** an optional launch film, a 9:16 mp4; nothing downloads until someone presses play */
    film: publicPath.optional(),
    filmPoster: publicPath.optional(),
    filmCaptions: publicPath.optional(),
    filmCaption: z.string().optional(),
  })
  .refine((p) => p.film === undefined || (p.filmPoster && p.filmCaptions), {
    message: 'a film needs a poster and WebVTT captions',
  });

/** A project with the source only: one entry in src/content/also.yaml. */
export const alsoSchema = z.object({
  id: z.string().min(1),
  order: z.number().int().nonnegative(),
  links: z.array(z.object({ label: z.string().min(1), href: z.url() })).min(1),
  summary: z.string().min(20).max(500),
  tech: z.array(z.string().min(1)).min(1),
});

export type Work = z.infer<typeof workSchema>;
export type Also = z.infer<typeof alsoSchema>;
