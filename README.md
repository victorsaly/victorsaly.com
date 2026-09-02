# victorsaly.com

My personal site: a shelf of the things I have built — browser games, learning tools made with
my kids, and a few utilities.

**[victorsaly.com](https://victorsaly.com/)**

## What this is

A small [Astro](https://astro.build) site that builds to plain static HTML — the browser still
gets zero framework JavaScript. Astro is here for maintainability, not features: the projects
live in one typed data file, and the markup lives in components instead of being repeated.

```
src/data/projects.ts     every project — add or edit an entry here and you're done
src/components/          Card (live projects), Row (repo projects), Scene, Ticker
src/layouts/Base.astro   head, nav, footer, theme + reveal scripts
src/pages/               index.astro and privacy.astro
src/styles/global.css    the whole design
public/shots/            real screenshots of the live apps, 800px JPEGs
public/                  CNAME, robots.txt, sitemap.xml
```

**Adding a project** is one entry in `projects.ts` plus (for a live one) a screenshot —
`npm run shots -- <name>` retakes it (or all of them with no argument) using the system Chrome,
including the per-site persuasion some apps need (Delulu Beats' sound gate, CorrelateAI's
intro). One caveat: on a network with TLS inspection (Cisco Umbrella and friends) headless
Chrome rejects the intercepted certificates, so run it from a normal connection.

**Today at the arcade** on the home page is the live Shut The Cube daily leaderboard, fetched
from `api.victorsaly.com` after the page paints. The section starts hidden and only appears
when real entries arrive, so offline — or if the API is down — the page reads as if it were
never there. Player names are player-chosen text and are rendered with `textContent` only.

## Design

An arcade sign, hand-painted. Big display type, mono micro-labels, one loud periwinkle, and a
little hand-drawn motion — the playful confidence of sites like pleurat.com, in this site's own
hand.

- **One loud periwinkle.** Highlight plates, buttons, and the die that's about to score. Dark is
  the arcade at night; light is the same room with the blinds open. Every colour is a token in
  `:root`; a toggle stores an explicit choice, otherwise the OS preference applies.
- **Clash Display for headlines, Switzer for reading, the system mono for labels.** The mono
  micro-caps (kickers, chips, the ticker) do the wayfinding so the display face can be loud.
- **Motion is hand-made and cheap.** The hero scene is inline SVG moved by CSS keyframes — tiles
  shut, dice bob, notes drift. Scroll reveals are one small IntersectionObserver. Everything
  respects `prefers-reduced-motion`, and without JS the page is simply visible.
- **Live projects first.** The only ordering that matters to a visitor is whether they can use the
  thing right now, so that is the split — playable above, readable below.

## Local preview

```bash
npm install
npm run dev        # live-reloading dev server
npm run build      # static site into dist/
npm run preview    # serve the built dist/
```

## Deployment

Pushing to `main` publishes to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:** in *Settings → Pages*, set **Source** to **GitHub Actions**.

### Custom domain

DNS for `victorsaly.com` is on Cloudflare. Point the apex at GitHub Pages with four `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Set the Cloudflare records to **DNS only** (grey cloud) until GitHub has issued the certificate,
then proxying can be turned back on. In *Settings → Pages*, set the custom domain to
`victorsaly.com` and enable **Enforce HTTPS** once it verifies.

## Later

This repo is also the intended home for the arcade: both games served from `/play/` on this
origin, so a shared hub can read their stats, plus a leaderboard on Cloudflare Workers and D1.
Nothing here is structured to make that harder.
