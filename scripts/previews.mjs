/*
 * Cut the hover previews: `npm run previews`. A plate whose project has a film plays a few muted seconds of
 * it when the pointer is on its screen. The full films are 2–8 MB, too much to fetch on a hover, so each
 * preview is six silent seconds of the liveliest part, cropped to the screen's 16:10 and 800px wide, which
 * keeps it to a few hundred KB.
 *
 * Needs ffmpeg. Writes public/film/preview/<name>.mp4; the name is the film's own file name, so a plate
 * finds its preview from its `film` path. `start` is where the six seconds begin; `vf` is the ffmpeg
 * filter that brings that film to 800×500, chosen so the part that moves fills the frame.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILMS = {
  // 1920×1080: talking into the Talk screen
  'agentic-blog': { start: 7, vf: 'crop=1728:1080:96:0,scale=800:500' },
  // 1280×720: the chart being drawn from the query
  analyst: { start: 14, vf: 'crop=1152:720:64:0,scale=800:500' },
  // 1200×760: dragging across to compare the file with what the AI sees
  cloisto: { start: 24, vf: 'crop=1200:750:0:5,scale=800:500' },
  // 1280×720: the catalogue ranked by rows
  dbtour: { start: 20, vf: 'crop=1152:720:64:0,scale=800:500' },
  // 1080×1920, portrait: only the game screen in the middle, not the headline above it
  delulubeats: { start: 2, vf: 'crop=1080:675:0:660,scale=800:500' },
  // 1920×1080: the photo flies into the phone, the ingredients land, a recipe opens
  feedmeai: { start: 2, vf: 'crop=1728:1080:96:0,scale=800:500' },
  // 1920×1080: before and after, desk and phone
  sideshot: { start: 13, vf: 'crop=1728:1080:96:0,scale=800:500' },
  // portrait reel: the whole phone, centred on the reel's own cream, so nothing of it is cropped away
  valentino: { start: 15, vf: 'scale=-2:500,pad=800:500:(ow-iw)/2:0:color=0xFEFDEB' },
};

const film = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'film');
const out = join(film, 'preview');
mkdirSync(out, { recursive: true });

for (const [name, { start, vf }] of Object.entries(FILMS)) {
  execFileSync(
    'ffmpeg',
    [
      ...['-v', 'error', '-y', '-ss', String(start), '-t', '6', '-i', join(film, `${name}.mp4`)],
      ...['-an', '-vf', `${vf},fps=24`],
      ...['-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p'],
      ...['-movflags', '+faststart', join(out, `${name}.mp4`)],
    ],
    { stdio: 'inherit' },
  );
  console.log(`✓ preview/${name}.mp4`);
}
