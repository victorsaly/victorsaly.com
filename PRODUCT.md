# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, static output, TypeScript strict, hand-written CSS, no client framework. Hosted on GitHub Pages,
deployed on every push to `main`. Moving to a Cloudflare Worker like the blog was considered and set aside
(2026-10-26).

## Who it is for

Clients and employers first: people deciding whether to hire Victor or work with him. They want proof that he
builds real things, finishes them, and builds them well with AI. Players and parents arrive too, from a game's
link, and must still find the thing they came for in one tap.

## What it is

A summary of the work Victor has done: the projects he has built, each with what it does, how it was made, and
a link to use it and, where it is public, to read its source. The masthead leads with the range: apps, games
and tools, a few for clients and paying customers, most begun for his kids or himself (decided 2026-11-21,
replacing the "hobby apps" line of 2026-10-26 once a client site and a paid app joined the work). It still says
plainly that all of it is his own work, separate from his job at Storm Technologies, and no more about the
day job than that one line; LinkedIn, linked from the masthead and the footer, covers the rest.

Live projects (each has a page at `/work/<slug>`): Delulu Beats, Shut The Cube, CorrelateAI, FeedMe AI,
LiliArt, Lili's Story World, Oliver Math, Valentino Salon (a salon's site), Cloisto (a Mac app for
accountants), the Analyst Agent (a team course capstone I led), and the Agentic Blog with Roadbook, the framework under it.
Valentino Salon and Cloisto have private source, so their Source row says "Private". Every project has a
`kind`, and the home page groups the work by it, strongest evidence for a client first: For clients and
customers, Games, For my kids, AI tools (the list and order are in `src/lib/projects.ts`). A contents list,
"The apps, by kind", sits under the masthead and names every project; the header links to apps.victorsaly.com.
Source-only projects sit at the end of their own group, without a page. Colour Varia waits for the client's
sign-off and Sussed is still being built; both stay off until then. Lab_Agents stays off until it is finished. Each project is a
Markdown file in `src/content/work/`; the home page also shows the newest three posts from the blog's feed.

## What must stay true

- Every project is real and linked: a live app, its source, or both. Nothing is mocked or described beyond
  what it does.
- Most of the free projects work offline and need no account. The site itself loads nothing from a CDN at
  runtime and has no analytics.
- Shut The Cube's daily leaderboard (from `api.victorsaly.com`) stays, and hides itself when the API is down
  or there are no scores.
- Privacy policy at `/privacy` covers the games and the leaderboard, and stays reachable.
- Made in London (the site's own line; keep it).
- It is one person's site with blog.victorsaly.com: the two read as the same author.

## Voice

Victor's, as in the blog's `profile.md`: plain words, short sentences, British spelling, feeling before
mechanism, no AI slop. English is not his first language and the voice keeps that.

## Accessibility

WCAG 2.2 AA as the floor, as on the blog. Keyboard reaches everything. Video has captions. Motion only when
the reader asks for it, and `prefers-reduced-motion` is respected.
