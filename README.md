# victorsaly.com

My personal site: a shelf of the things I have built — browser games, learning tools made with
my kids, and a few utilities.

**[victorsaly.com](https://victorsaly.com/)**

## What this is

One hand-written page. No framework, no build step, no dependencies — the repository *is* the
deployed artifact. A shelf of project cards has no state and no routing, so a build would only
add a dependency tree and an upgrade treadmill to a page that changes a few times a year.

```
index.html      the page
style.css       the whole design
CNAME           custom domain for GitHub Pages
robots.txt      + sitemap.xml
```

## Design

The projects supply the colour, so the page stays quiet and lets them read as distinct things
rather than variations on one house style.

- **Cool ink and paper, one indigo accent.** Deliberately unlike either game's palette — Shut The
  Cube is deep forest and ember, Delulu Beats is its own world. The shelf is not another exhibit.
- **Fraunces for names, Karla for everything else.** Both games use a rounded display face that
  reads as *a product*; a serif here reads as *a person*, which is what a personal site is.
- **Light and dark both defined.** Every colour is a token declared in `:root`, redefined once
  under `prefers-color-scheme: dark`. Nothing is coloured outside that scheme.
- **Live projects first.** The only ordering that matters to a visitor is whether they can use the
  thing right now, so that is the split — playable above, readable below.

## Local preview

No tooling required. Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
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
