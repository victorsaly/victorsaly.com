/*
 * Cut the hover previews: `npm run previews`. A plate whose project has a film plays a few muted seconds of
 * it when the pointer is on its screen. The full films are 2–8 MB, too much to fetch on a hover, so each
 * preview is six silent seconds of the liveliest part, cropped to the screen's 16:10 and 800px wide, which
 * keeps it to a few hundred KB.
 *
 * Needs ffmpeg. Writes public/film/preview/<name>.mp4; the name is the film's own file name, so a plate
 * finds its preview from its `film` path. `start` is where the six seconds begin; `crop` is ffmpeg's
 * crop=w:h:x:y, chosen so the part that moves fills the frame.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILMS = {
  // 1920×1080: talking into the Talk screen
  'agentic-blog': { start: 7, crop: '1728:1080:96:0' },
  // 1280×720: the catalogue ranked by rows
  dbtour: { start: 20, crop: '1152:720:64:0' },
  // 1080×1920, portrait: only the game screen in the middle, not the headline above it
  delulubeats: { start: 2, crop: '1080:675:0:660' },
  // 1920×1080: before and after, desk and phone
  sideshot: { start: 13, crop: '1728:1080:96:0' },
};

const film = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'film');
const out = join(film, 'preview');
mkdirSync(out, { recursive: true });

for (const [name, { start, crop }] of Object.entries(FILMS)) {
  execFileSync(
    'ffmpeg',
    [
      ...['-v', 'error', '-y', '-ss', String(start), '-t', '6', '-i', join(film, `${name}.mp4`)],
      ...['-an', '-vf', `crop=${crop},scale=800:500,fps=24`],
      ...['-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p'],
      ...['-movflags', '+faststart', join(out, `${name}.mp4`)],
    ],
    { stdio: 'inherit' },
  );
  console.log(`✓ preview/${name}.mp4`);
}
