/*
 * The whole portfolio, as data. Adding a project is adding an entry here —
 * the components decide how it looks.
 *
 * `shot` is a real screenshot of the live thing, captured at 1280×800 and
 * saved to public/shots/ at 800px wide. Retake one with any browser; nothing
 * else needs to change.
 */

export interface LiveProject {
  slug: string;
  title: string;
  url: string;
  host: string;
  repo: string;
  shot: string;
  shotAlt: string;
  /** an optional launch film on /work/<slug>, shown at phone width.
   *  `film` is a 9:16 mp4 in public/film/; `filmPoster` is its first frame;
   *  `filmCaptions` is its WebVTT captions, required with a film (a test checks),
   *  and nothing downloads until someone presses play. */
  film?: string;
  filmPoster?: string;
  filmCaptions?: string;
  filmCaption?: string;
  description: string;
  /** the longer read on /work/<slug> — one string per paragraph */
  story: string[];
  tech: string[];
}

export interface RepoLink {
  label: string;
  href: string;
}

export interface RepoProject {
  links: RepoLink[];
  /** stroke-based icon paths, drawn on a 24×24 grid */
  icon: string;
  description: string;
  tech: string[];
}

export const live: LiveProject[] = [
  {
    slug: 'delulu-beats',
    title: 'Delulu Beats',
    url: 'https://delulubeats.com',
    host: 'delulubeats.com',
    repo: 'https://github.com/victorsaly/delulubeats',
    shot: '/shots/delulubeats.jpg',
    shotAlt: 'The Delulu Beats home screen: a dark grid of nine ear-training games',
    film: '/film/delulubeats.mp4',
    filmPoster: '/film/delulubeats.jpg',
    filmCaptions: '/film/delulubeats.vtt',
    filmCaption:
      'Twenty seconds of it, narrated. The tone you hear in it is the game actually sounding.',
    description:
      'Nine full-screen games for colour, pitch, duration, rhythm, spatial memory and melody — see it, hear it, remember it, then dial it back in. Plus Beat Lab, a browser studio for building and downloading your own loop. Everything is synthesised in the Web Audio API; there is a seeded daily challenge shared by everyone.',
    story: [
      'Nine games about noticing things. Afterimage shows you five colours, one at a time, then asks you to rebuild each on a slider. Sine Language plays five tones and sends you to find them again by ear. Second Sense asks you to hold a button for exactly as long as the interval you just heard — no clock anywhere. The others work rhythm, spatial memory and melody the same way: see it or hear it, then dial it back in from memory. You will be worse at them than you expect, and that is most of the fun.',
      'The site is played by ear, so sound is a first-class citizen: every tone, tick and beat is synthesised live in the Web Audio API — nothing is a sample, nothing is loaded at runtime. Beat Lab takes the same synth engine and turns it into a small browser studio, where you can build a loop and download the result.',
      'Each day seeds one shared challenge, and daily scores go to the arcade leaderboard — where the server rebuilds the day’s challenge from the same seed and re-scores your answers before believing a number. Like everything here it was built with an AI pair, with every line reviewed, and it works with the network off.',
    ],
    tech: ['Next.js', 'TypeScript', 'Web Audio', 'Canvas'],
  },
  {
    slug: 'shut-the-cube',
    title: 'Shut The Cube',
    url: 'https://shutthecube.com',
    host: 'shutthecube.com',
    repo: 'https://github.com/victorsaly/shutTheCube',
    shot: '/shots/shutthecube.jpg',
    shotAlt: 'The Shut The Cube menu: beginner, medium and ninja boards on deep green',
    description:
      'The pub dice game Shut the Box, plus a nine-row variant of my own where a matching column of tiles collapses together for a bonus. Every tile plays its own note on a pentatonic scale, so a good move sounds deliberate. Installs as an app, plays with no network, keeps no account.',
    story: [
      'Shut the Box is a pub dice game older than anyone can prove: roll two dice, shut tiles that sum to the roll, clear the board and the box is yours. Beginner is that game, played straight. Medium is a variant of my own — nine rows stacked, where shutting a full matching column collapses it together for a bonus — and Ninja is the same board against a thirty-second turn clock.',
      'The game is tuned for feel. Every tile plays its own note on a pentatonic scale, so a good move sounds deliberate and a great turn plays a phrase; the board answers you rather than just updating. It installs as an app, plays entirely offline, and keeps no account.',
      'The daily board is the shared bit: everyone in the world rolls the same dice on the same board until midnight UTC. Daily scores rank on the arcade leaderboard, and a score is never taken on trust — the game records every turn, and the server replays the dice from the day’s seed and recomputes the score before accepting it. Signing in is a plain Google redirect that asks for a name and nothing else; there is no email scope at all.',
    ],
    tech: ['Vue 3', 'Vite', 'PWA', 'Web Audio'],
  },
  {
    slug: 'correlateai',
    title: 'CorrelateAI',
    url: 'https://correlateai.victorsaly.com',
    host: 'correlateai.victorsaly.com',
    repo: 'https://github.com/victorsaly/correlateAI',
    shot: '/shots/correlateai.jpg',
    shotAlt:
      'CorrelateAI comparing US internet users with US forest area: a correlation of +0.91, circled as likely spurious because it collapses to -0.01 once the shared time trend is removed',
    description:
      'Pick any two real public datasets and it tells you whether the correlation is real or a coincidence. Two things that rise over the same decades will almost always correlate, so it removes each series\u2019 time trend and checks whether the link survives. A toy with a serious point about how easy it is to find a convincing relationship in real data.',
    story: [
      'Two things that rise over the same decades will almost always correlate, whether or not they are related. CorrelateAI is built around that one fact. Pair any two of seventy-two real yearly series \u2014 World Bank, NOAA, Our World in Data, the U.S. Treasury, USGS earthquakes, sunspot counts and more \u2014 and it gives you the correlation, a p-value and a confidence interval, then does the thing most charts skip: it subtracts each series\u2019 straight-line trend and asks whether the relationship is still there.',
      'US internet users against US forest area is the example it opens on. They correlate at +0.91, strongly enough to put in a slide. Remove the shared trend and it falls to \u22120.01. The verdict is written in plain words and circled in red like a marked-up draft, and there are five of them: not significant, likely spurious, direction flips without the trend, interpret with caution, and holds up after detrending. Every statistic is computed in your browser from source-linked data, and the rules that choose the verdict are tested.',
      'It started as a speed experiment: the first version was built end to end in one afternoon with an AI pair, and it was a machine mass-producing absurd matches. This version keeps the joke and adds the half that was missing: how to tell a coincidence from the real thing. Every result has a link you can share, a Gallery of notable pairs comes with a note on multiple comparisons, and pairs with enough shared years get their own indexable page.',
      'It is deliberately upfront about what it cannot do. The p-value assumes each year is independent of the last, which yearly series rarely are, so the p-values run somewhat optimistic and the page says so. A correlation that holds up still says nothing about cause. The data refreshes weekly from public sources that need no API key, and if a source fails the last good copy is kept rather than a saved pair quietly disappearing.',
    ],
    tech: ['React', 'TypeScript', 'Recharts', 'Public data'],
  },
  {
    slug: 'feedme-ai',
    title: 'FeedMe AI',
    url: 'https://feedmeai.victorsaly.com',
    host: 'feedmeai.victorsaly.com',
    repo: 'https://github.com/victorsaly/feedmeAI',
    shot: '/shots/feedmeai.jpg',
    shotAlt:
      'FeedMe AI asking for a photo of your fridge, with tabs for recipes, saved and the shopping list',
    description:
      'Tell it what is actually in the fridge and it suggests something you can cook tonight — then carries the two or three things you are missing through to the shop. It works from the ingredients you already have rather than the ones a recipe wishes you had, which is the only part of meal planning I have ever found genuinely hard.',
    story: [
      'Every recipe site starts from a dish and hands you a shopping list. FeedMe starts from the other end: photograph what is actually in the fridge, and it works out what you can cook tonight from that. In my experience the ingredients you already have are the only genuinely hard part of meal planning, so that is the whole product.',
      'You take a photo of the fridge, the pantry, or a pile of ingredients on the counter; it identifies what it sees and suggests dishes that need nothing you do not have, or nearly nothing. Pick one and it writes the recipe out in full, then walks you through it a step at a time for when your hands are covered in flour. Anything you like can be kept.',
      'What it could not do until recently is the other half of the job: the things you are still short of. Any line in a recipe now goes onto a shopping list with one tap, tagged with the dish that wanted it, and a single button searches the whole list at once and regroups the answers by supermarket — so the question stops being “where do I buy eggs” and becomes “which shop has most of my list, and for how much”. You say which country you are in, and each result links into that shop’s own search rather than a price-comparison page.',
      'A list is only useful if it is on the phone in the shop as well as the laptop that made it, which meant an account — so it signs in with the same plain Google redirect as the arcade sites: a name, no email scope, nothing else asked for. That also got every API key out of the browser, where the first version had left one in plain sight. The vision, recipe and shopping calls all run in a small Cloudflare Worker now, with a daily cap so a passer-by cannot spend the quota. It is still deliberately small — no meal plans, no macros, no social feed — just one question followed all the way through.',
      'Two things landed later that matter more than they sound. It reads how much of something there is now, not just that it is there, so a small piece of chicken gets a single-serving idea rather than a recipe sized for a Sunday roast. And it installs: the shopping list lives on the phone and gets read in a supermarket, which is precisely where the signal goes, so the app and the list now open with no connection at all.',
    ],
    tech: ['React', 'TypeScript', 'AI', 'Cloudflare Workers'],
  },
  {
    slug: 'liliart',
    title: 'LiliArt',
    url: 'https://liliart.victorsaly.com',
    host: 'liliart.victorsaly.com',
    repo: 'https://github.com/victorsaly/liliart-web',
    shot: '/shots/liliart.jpg',
    shotAlt:
      'LiliArt asking "What can we make?", with two big buttons to photograph or choose a picture of your odds and ends',
    description:
      'Photograph the odds and ends on the table \u2014 tubes, lids, scraps, odd socks \u2014 and it works out what a child could make from them. The ideas only use what is actually there, the steps arrive one at a time with a picture of each, and when it is finished you photograph what you made.',
    story: [
      'The same question as FeedMe AI pointed at a different cupboard: not what can I cook, but what can I make. There was an earlier version of this as a phone app; this is the same idea rebuilt for the web, so a link is all it takes to open it. The look is carried over from that app on purpose \u2014 the same magenta, the same thick frame round the camera, the same two enormous buttons \u2014 because the person pressing them is a child and is usually holding something sticky.',
      'Quantity turned out to be the whole trick. The first version read a photo for names only, so one cardboard tube and six cardboard tubes produced exactly the same suggestions. It counts them now, and the count survives all the way to the idea: one tube is a rocket, six are a marble run, and anything a craft needs more of than you have is listed as something to go and find rather than quietly assumed.',
      'Then it gets out of the way. A craft opens one step at a time, full screen, with the screen asked to stay awake, and each step carries a picture of that step actually being done \u2014 hands mid-job, the thing half-built \u2014 because what helps at step four is seeing step four, not seeing the finished article. Anything involving scissors or heat is marked plainly as a grown-up\u2019s part.',
      'At the end it asks for a photo of what was actually made, which is the part the app used to forget the moment it happened. That turns the Kept tab from a list of ideas you liked into a shelf of things you built, each one sitting beside the drawing of what it was meant to look like. It installs to a home screen and the shelf works with no internet at all; the AI key lives in a Cloudflare Worker with a daily cap so a passer-by cannot spend it, and every prompt carries the same house rules \u2014 no oven, nothing sharp without an adult, nothing to eat.',
    ],
    tech: ['React', 'TypeScript', 'AI', 'Cloudflare Workers'],
  },
  {
    slug: 'lilis-story-world',
    title: "Lili's Story World",
    url: 'https://victorsaly.github.io/LilianaBlog/',
    host: 'victorsaly.github.io',
    repo: 'https://github.com/victorsaly/LilianaBlog',
    shot: '/shots/lili.jpg',
    shotAlt: "Lili's Story World: an illustrated storybook hero with read-aloud buttons",
    description:
      'An illustrated read-along storybook site for a young dyslexic author — my daughter. It reads aloud with the current word highlighted, gives each character its own voice, and pairs every paragraph with its own artwork. Built around what actually helps her read, not around what looks good in a demo.',
    story: [
      'My daughter writes and draws stories. She is also dyslexic, which makes reading her own work back harder than writing it was. This site is where her stories live, built so that reading them is something the site helps with instead of something it assumes.',
      'Every story reads itself aloud while the words light up one by one, so eye and ear stay in the same place — the single thing that most helps her follow a page. Each character speaks in their own voice, and every paragraph is paired with her artwork, because the pictures are half the story.',
      'The design decisions all come from watching what actually helps her read, not from what demos well. It is also the project on this page I care about most: she is the author, I am just the publisher.',
    ],
    tech: ['Astro', 'Text to speech', 'Accessibility'],
  },
];

export const repos: RepoProject[] = [
  {
    links: [{ label: 'PayBatch', href: 'https://github.com/victorsaly/batch-payment-app' }],
    icon: 'M3 6.5h18v11H3z M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z M6 12h.5 M17.5 12h.5',
    description:
      'Offline desktop app that builds and exports UK bank bulk-payment files. Santander Connect is live, Bacs Standard 18 is in beta. Encrypted at rest, and nothing ever leaves the machine — which is the whole reason it exists.',
    tech: ['Electron', 'Fintech', 'Offline first'],
  },
  {
    links: [
      { label: 'World Leaders Game', href: 'https://github.com/victorsaly/WorldLeadersGame' },
    ],
    icon: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z M3 12h18 M12 3c3 3.5 3 14.5 0 18 M12 3c-3 3.5-3 14.5 0 18',
    description:
      'An educational strategy game for twelve-year-olds: work up from peasant to world leader using real GDP data, with AI tutors and speech recognition. Written almost entirely by AI against a detailed instruction set, as an experiment in how far that goes.',
    tech: ['.NET 8', 'Blazor Server', 'Azure OpenAI'],
  },
  {
    links: [
      { label: 'dbschema-markdown', href: 'https://github.com/victorsaly/dbschema-markdown' },
    ],
    icon: 'M4 4.5h16v15H4z M4 9.5h16 M10 9.5v10 M4 14.5h16',
    description:
      'Turns a database schema into readable markdown documentation. Small, boring, and it has saved me more hours than anything else on this page.',
    tech: ['Node', 'CLI'],
  },
  {
    links: [
      { label: 'Oliver Math', href: 'https://github.com/victorsaly/OliverMath' },
      { label: 'Oliver Vocabulary', href: 'https://github.com/victorsaly/OliverVocabulary' },
    ],
    icon: 'M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z M6 11a6 6 0 0 0 12 0 M12 17v4 M9 21h6',
    description:
      'Two speech-driven practice apps built with my son — he set the rules, I did the typing. They talk, listen, and answer back using the Azure Speech API.',
    tech: ['Vue', 'Azure Speech', 'OpenAI'],
  },
  {
    links: [{ label: 'Shut The Box (2018)', href: 'https://github.com/victorsaly/shutTheBox' }],
    icon: 'M5 5h14a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 5 5z M8.5 8.5h.01 M12 12h.01 M15.5 15.5h.01',
    description:
      'The original, and the reason Shut The Cube exists. Vue 2 and webpack 3, loading Tailwind from an unversioned CDN URL — when that tag moved, the tile colours silently stopped existing and the live game lost its styling. Kept here as the before picture.',
    tech: ['Vue 2', 'Archived'],
  },
];
