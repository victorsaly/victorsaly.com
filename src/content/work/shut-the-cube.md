---
title: Shut The Cube
order: 20
summary: The pub dice game Shut the Box, plus a nine-row variant of my own where a matching column
  of tiles collapses together for a bonus. Every tile plays its own note on a pentatonic scale, so a
  good move sounds deliberate. Installs as an app, plays with no network, keeps no account.
url: https://shutthecube.com
host: shutthecube.com
repo: https://github.com/victorsaly/shutTheCube
shot: /shots/shutthecube.jpg
shotAlt: "The Shut The Cube menu: beginner, medium and ninja boards on deep green"
tech:
  - Vue 3
  - Vite
  - PWA
  - Web Audio
---

Shut the Box is a pub dice game older than anyone can prove: roll two dice, shut tiles that sum to the roll, clear the board and the box is yours. Beginner is that game, played straight. Medium is a variant of my own — nine rows stacked, where shutting a full matching column collapses it together for a bonus — and Ninja is the same board against a thirty-second turn clock.

The game is tuned for feel. Every tile plays its own note on a pentatonic scale, so a good move sounds deliberate and a great turn plays a phrase; the board answers you rather than just updating. It installs as an app, plays entirely offline, and keeps no account.

The daily board is the shared bit: everyone in the world rolls the same dice on the same board until midnight UTC. Daily scores rank on the arcade leaderboard, and a score is never taken on trust — the game records every turn, and the server replays the dice from the day’s seed and recomputes the score before accepting it. Signing in is a plain Google redirect that asks for a name and nothing else; there is no email scope at all.
