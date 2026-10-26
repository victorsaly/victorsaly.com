# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7, static output, TypeScript strict, hand-written CSS, no client framework. Hosting moves from GitHub
Pages to a Cloudflare Worker with static assets in a later slice, to match blog.victorsaly.com.

## Who it is for

Clients and employers first: people deciding whether to hire Victor or work with him. They want proof that he
builds real things, finishes them, and builds them well with AI. Players and parents arrive too, from a game's
link, and must still find the thing they came for in one tap.

## What it is

A summary of the work Victor has done: the projects he has built, each with what it does, how it was made, and
a link to use it and to read its source. The site says plainly that these are hobby apps, built in his own time
as personal work, while he works professionally at Storm Technologies (decided 2026-10-26). It says no more
about the day job than that one line; LinkedIn, linked from the masthead and the footer, covers the rest.

Live projects (each has a page at `/work/<slug>`): Delulu Beats, Shut The Cube, CorrelateAI, FeedMe AI,
LiliArt, Lili's Story World, Oliver Math, and the Agentic Blog with Roadbook, the framework under it.
Source-only projects are listed without a page. Lab_Agents stays off until it is finished.

## What must stay true

- Every project is real and linked: a live app, its source, or both. Nothing is mocked or described beyond
  what it does.
- Most projects are free, work offline and need no account. The site itself loads nothing from a CDN at
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
