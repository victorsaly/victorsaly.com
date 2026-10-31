---
title: Delulu Beats
order: 10
summary: Nine full-screen games for colour, pitch, duration, rhythm, spatial memory and melody — see
  it, hear it, remember it, then dial it back in. Plus Beat Lab, a browser studio for building and
  downloading your own loop. Everything is synthesised in the Web Audio API; there is a seeded daily
  challenge shared by everyone.
url: https://delulubeats.com
host: delulubeats.com
repo: https://github.com/victorsaly/delulubeats
shot: /shots/delulubeats.jpg
shotAlt: "The Delulu Beats home screen: a dark grid of nine ear-training games"
film: /film/delulubeats.mp4
filmPoster: /film/delulubeats.jpg
filmCaptions: /film/delulubeats.vtt
filmCaption: Twenty seconds of it, narrated. The tone you hear in it is the game actually sounding.
tech:
  - Next.js
  - TypeScript
  - Web Audio
  - Canvas
---

Nine games about noticing things. Afterimage shows you five colours, one at a time, then asks you to rebuild each on a slider. Sine Language plays five tones and sends you to find them again by ear. Second Sense asks you to hold a button for exactly as long as the interval you just heard — no clock anywhere. The others work rhythm, spatial memory and melody the same way: see it or hear it, then dial it back in from memory. You will be worse at them than you expect, and that is most of the fun.

The site is played by ear, so sound is a first-class citizen: every tone, tick and beat is synthesised live in the Web Audio API — nothing is a sample, nothing is loaded at runtime. Beat Lab takes the same synth engine and turns it into a small browser studio, where you can build a loop and download the result.

Each day seeds one shared challenge, and daily scores go to the arcade leaderboard — where the server rebuilds the day’s challenge from the same seed and re-scores your answers before believing a number. Like everything here it was built with an AI pair, with every line reviewed, and it works with the network off.
