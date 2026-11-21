/*
 * Where a project's smaller pictures live, worked out from its own: one rule, used by the pages and checked
 * by the tests, so a missing file fails a test rather than showing a broken image.
 */

/** /shots/delulubeats.jpg → /shots/thumbs/delulubeats.webp (400px, for the cover strip; npm run shots) */
export const thumbOf = (shot: string): string =>
  shot.replace(/^\/shots\/([^/]+)\.jpg$/, '/shots/thumbs/$1.webp');

/** /film/delulubeats.mp4 → /film/preview/delulubeats.mp4 (six silent seconds, for a hover; npm run previews) */
export const previewOf = (film: string): string =>
  film.replace(/^\/film\/([^/]+)\.mp4$/, '/film/preview/$1.mp4');
