---
title: SideShot
order: 7
summary: An agent skill that puts before-and-after screenshots in every pull request that changes what people
  see, on a desk and a phone. You ask your coding agent to SideShot the PR, and it does the rest.
url: https://skills.victorsaly.com/sideshot
host: skills.victorsaly.com
repo: https://github.com/victorsaly/sideshot
shot: /shots/sideshot.jpg
shotAlt: "SideShot's page: the line SideShot this PR, the install command, and a film of a pricing card before
  and after a change, on a desk."
tech:
  - Agent Skills
  - Node.js
  - Playwright
  - Claude Code
---

It started inside the Agentic Blog, where every pull request that changes a page has to carry its before and after, on a desk and a phone. Taking those pictures by hand got old fast, so I wrote a script, then turned it into a skill any coding agent can use: Claude Code, Codex, Cursor or OpenCode.

You say "SideShot this PR". The agent reads the diff, works out which page and which part changed, and pictures it before (the live site) and after (your branch) with Playwright. It shows you first, then pushes the pictures to a branch that never merges and writes the table into the pull request. It can ring what changed with a number and a note, outline every difference, and picks a marking colour your page does not already use.

It is free, MIT licensed, and installs with one line. [Its page](https://skills.victorsaly.com/sideshot) shows it at work on a real pull request, and SideShot took the before and after for its own page.
