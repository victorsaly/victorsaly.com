---
title: FeedMe AI
order: 40
summary: Tell it what is actually in the fridge and it suggests something you can cook tonight —
  then carries the two or three things you are missing through to the shop. It works from the
  ingredients you already have rather than the ones a recipe wishes you had, which is the only part
  of meal planning I have ever found genuinely hard.
url: https://feedmeai.victorsaly.com
host: feedmeai.victorsaly.com
repo: https://github.com/victorsaly/feedmeAI
shot: /shots/feedmeai.jpg
shotAlt: FeedMe AI asking for a photo of your fridge, with tabs for recipes, saved and the shopping list
tech:
  - React
  - TypeScript
  - AI
  - Cloudflare Workers
---

Every recipe site starts from a dish and hands you a shopping list. FeedMe starts from the other end: photograph what is actually in the fridge, and it works out what you can cook tonight from that. In my experience the ingredients you already have are the only genuinely hard part of meal planning, so that is the whole product.

You take a photo of the fridge, the pantry, or a pile of ingredients on the counter; it identifies what it sees and suggests dishes that need nothing you do not have, or nearly nothing. Pick one and it writes the recipe out in full, then walks you through it a step at a time for when your hands are covered in flour. Anything you like can be kept.

What it could not do until recently is the other half of the job: the things you are still short of. Any line in a recipe now goes onto a shopping list with one tap, tagged with the dish that wanted it, and a single button searches the whole list at once and regroups the answers by supermarket — so the question stops being “where do I buy eggs” and becomes “which shop has most of my list, and for how much”. You say which country you are in, and each result links into that shop’s own search rather than a price-comparison page.

A list is only useful if it is on the phone in the shop as well as the laptop that made it, which meant an account — so it signs in with the same plain Google redirect as the arcade sites: a name, no email scope, nothing else asked for. That also got every API key out of the browser, where the first version had left one in plain sight. The vision, recipe and shopping calls all run in a small Cloudflare Worker now, with a daily cap so a passer-by cannot spend the quota. It is still deliberately small — no meal plans, no macros, no social feed — just one question followed all the way through.

Two things landed later that matter more than they sound. It reads how much of something there is now, not just that it is there, so a small piece of chicken gets a single-serving idea rather than a recipe sized for a Sunday roast. And it installs: the shopping list lives on the phone and gets read in a supermarket, which is precisely where the signal goes, so the app and the list now open with no connection at all.
