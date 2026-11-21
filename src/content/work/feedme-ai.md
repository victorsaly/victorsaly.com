---
title: FeedMe AI
order: 40
kind: tools
summary: Tell it what is actually in the fridge and it suggests something you can cook tonight —
  then carries the two or three things you are missing through to the shop. It works from the
  ingredients you already have rather than the ones a recipe wishes you had, which is the only part
  of meal planning I have ever found genuinely hard.
url: https://feedmeai.victorsaly.com
host: feedmeai.victorsaly.com
repo: https://github.com/victorsaly/feedmeAI
shot: /shots/feedmeai.jpg
shotAlt: "FeedMe AI on its sample photo: the photo with red cabbage, carrots and tomato stuck on it as labels, and five
  dinner ideas beside it, each tagged with what it still needs"
film: /film/feedmeai.mp4
filmPoster: /film/feedmeai.jpg
filmCaptions: /film/feedmeai.vtt
filmShape: landscape
filmLength: 20
filmCaption: "Twenty seconds, music and no speech: one photo becomes ten ingredients, a recipe, a two-item list and
  the cheapest shop for it. Filmed from the real app replaying answers recorded earlier."
tech:
  - React
  - TypeScript
  - AI
  - Cloudflare Workers
---

Every recipe site starts from a dish and hands you a shopping list. FeedMe starts from the other end: photograph what is actually in the fridge, and it works out what you can cook tonight from that. In my experience the ingredients you already have are the only genuinely hard part of meal planning, so that is the whole product.

You take a photo of the fridge, the pantry, or a pile of ingredients on the counter; it identifies what it sees and suggests dishes that need nothing you do not have, or nearly nothing. Pick one and it writes the recipe out in full, then walks you through it a step at a time for when your hands are covered in flour. Anything you like can be kept.

What it could not do until recently is the other half of the job: the things you are still short of. Any line in a recipe now goes onto a shopping list with one tap, tagged with the dish that wanted it, and a single button searches the whole list at once and regroups the answers by supermarket — so the question stops being “where do I buy eggs” and becomes “which shop has most of my list, and for how much”. Each result links into that shop’s own search rather than a price-comparison page. Only UK supermarkets have been tested so far.

A list is only useful if it is on the phone in the shop, so it is kept on the phone, with no account. Signing in is optional: the same plain Google redirect as the arcade sites, a name, no email scope, nothing else asked for. It carries the list and saved recipes to another device and unlocks the shop prices. No API key is in the browser, where the first version had left one in plain sight. The vision, recipe and shopping calls all run in a small Cloudflare Worker, which counts what each person uses: three photos a day are free, so a passer-by cannot spend the quota. It is still deliberately small — no meal plans, no macros, no social feed — just one question followed all the way through.

Two things landed later that matter more than they sound. It reads how much of something there is now, not just that it is there, so a small piece of chicken gets a single-serving idea rather than a recipe sized for a Sunday roast. And it installs: the shopping list lives on the phone and gets read in a supermarket, which is precisely where the signal goes, so the app and the list now open with no connection at all.

Then I went back to the first screen and rebuilt the whole thing around one idea: the photo is the fridge door. What you photographed stays on screen, large, with what was read in it stuck on as magnets and dinner directly underneath, where before you had to scroll past a list of things you already knew you had. A recipe now leads with what you need to buy and adds it all with one tap. Cooking shows each step’s amounts under the step, offers a timer where a step names a time, and keeps the screen awake. You can try all of it on a sample photo before giving one of your own, and the app asks before your first photo goes to the AI service.

Doing that turned up a fault I would not have found by reading the code. Every recipe the AI wrote said 25 minutes and 420 calories, because my instructions to it showed those numbers as an example and it copied them. The instructions now describe each figure instead of giving one.

It has a [home page](https://feedmeai.victorsaly.com) of its own now, and the app lives at [feedmeai.victorsaly.com/app](https://feedmeai.victorsaly.com/app/). An iPhone app built from the same code is on its way to the App Store.
