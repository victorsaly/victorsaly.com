---
title: Agentic Blog
order: 5
summary: A blog where every post starts as a voice note, kept exactly as it came out. AI agents tidy it
  into a post, and I read every change and merge it before anything goes live.
url: https://blog.victorsaly.com
host: blog.victorsaly.com
repo: https://github.com/victorsaly/agentic-blog
shot: /shots/agenticblog.jpg
shotAlt: "The blog's front page: a linocut portrait, the name Victor Saly and the line Talked out loud,
  tidied by AI."
tech:
  - Astro
  - TypeScript
  - Claude
  - Workers AI
  - Cloudflare Workers
---

I press record, talk for two minutes, and that note lands in the repository as the origin. It is never edited again. A chain of agents reads it, asks what a stranger would need to know, and turns it into a post you can read at three depths: the message in two or three lines, the idea on one screen, and the whole road with its sources. Every post keeps a switch back to what I actually said.

Every agent's output arrives as a pull request, and nothing goes live until I merge it. Underneath sits Roadbook, a small framework I wrote for agent workflows a person can see, steer and answer for. Each agent has a card that says what it is for and what it must never do, every run is written to an append-only, hash-chained ledger, and CI refuses a project that breaks the rules.

The drawings are linocut prints made with OpenAI's image model, and Claude reviews every one before it is used. The site is Astro on Cloudflare Workers, black and white with one marigold mark, and accessible to WCAG 2.2 AA, with axe checking every page in CI. [The first post](https://blog.victorsaly.com/thoughts/2026-10-23-talked-out-loud-tidied-by-ai) explains the whole idea.
