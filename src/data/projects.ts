/*
 * The whole portfolio, as data. Adding a project is adding an entry here —
 * the components decide how it looks.
 *
 * `shot` is a real screenshot of the live thing, captured at 1280×800 and
 * saved to public/shots/ at 800px wide. Retake one with any browser; nothing
 * else needs to change.
 */

export interface LiveProject {
  title: string;
  url: string;
  host: string;
  shot: string;
  shotAlt: string;
  description: string;
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
    title: 'Delulu Beats',
    url: 'https://delulubeats.com',
    host: 'delulubeats.com',
    shot: '/shots/delulubeats.jpg',
    shotAlt: 'The Delulu Beats home screen: a dark grid of nine ear-training games',
    description:
      'Nine full-screen games for colour, pitch, duration, rhythm, spatial memory and melody — see it, hear it, remember it, then dial it back in. Plus Beat Lab, a browser studio for building and downloading your own loop. Everything is synthesised in the Web Audio API; there is a seeded daily challenge shared by everyone.',
    tech: ['Next.js', 'TypeScript', 'Web Audio', 'Canvas'],
  },
  {
    title: 'Shut The Cube',
    url: 'https://shutthecube.com',
    host: 'shutthecube.com',
    shot: '/shots/shutthecube.jpg',
    shotAlt: 'The Shut The Cube menu: beginner, medium and ninja boards on deep green',
    description:
      'The pub dice game Shut the Box, plus a nine-row variant of my own where a matching column of tiles collapses together for a bonus. Every tile plays its own note on a pentatonic scale, so a good move sounds deliberate. Installs as an app, plays with no network, keeps no account.',
    tech: ['Vue 3', 'Vite', 'PWA', 'Web Audio'],
  },
  {
    title: 'CorrelateAI',
    url: 'https://correlateai.victorsaly.com',
    host: 'correlateai.victorsaly.com',
    shot: '/shots/correlateai.jpg',
    shotAlt: 'CorrelateAI showing a spurious correlation between air quality and phone subscriptions',
    description:
      'Pulls real economic series from the FRED and World Bank APIs and hunts for correlations that have no business existing. A toy with a serious point about how easy it is to find a convincing relationship in real data. Built end to end in an afternoon.',
    tech: ['React', 'TypeScript', 'FRED API', 'World Bank API'],
  },
  {
    title: 'FeedMe AI',
    url: 'https://feedmeai.victorsaly.com',
    host: 'feedmeai.victorsaly.com',
    shot: '/shots/feedmeai.jpg',
    shotAlt: 'FeedMe AI asking for a photo of your fridge to suggest a recipe',
    description:
      'Tell it what is actually in the fridge and it suggests something you can cook tonight. It works from the ingredients you already have rather than the ones a recipe wishes you had, which is the only part of meal planning I have ever found genuinely hard.',
    tech: ['React', 'TypeScript', 'AI'],
  },
  {
    title: "Lili's Story World",
    url: 'https://victorsaly.github.io/LilianaBlog/',
    host: 'victorsaly.github.io',
    shot: '/shots/lili.jpg',
    shotAlt: "Lili's Story World: an illustrated storybook hero with read-aloud buttons",
    description:
      'An illustrated read-along storybook site for a young dyslexic author — my daughter. It reads aloud with the current word highlighted, gives each character its own voice, and pairs every paragraph with its own artwork. Built around what actually helps her read, not around what looks good in a demo.',
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
    links: [{ label: 'World Leaders Game', href: 'https://github.com/victorsaly/WorldLeadersGame' }],
    icon: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z M3 12h18 M12 3c3 3.5 3 14.5 0 18 M12 3c-3 3.5-3 14.5 0 18',
    description:
      'An educational strategy game for twelve-year-olds: work up from peasant to world leader using real GDP data, with AI tutors and speech recognition. Written almost entirely by AI against a detailed instruction set, as an experiment in how far that goes.',
    tech: ['.NET 8', 'Blazor Server', 'Azure OpenAI'],
  },
  {
    links: [{ label: 'dbschema-markdown', href: 'https://github.com/victorsaly/dbschema-markdown' }],
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
