---
title: LiliArt
order: 50
summary: Photograph the odds and ends on the table — tubes, lids, scraps, odd socks — and it works
  out what a child could make from them. The ideas only use what is actually there, the steps arrive
  one at a time with a picture of each, and when it is finished you photograph what you made.
url: https://liliart.victorsaly.com
host: liliart.victorsaly.com
repo: https://github.com/victorsaly/liliart-web
shot: /shots/liliart.jpg
shotAlt: LiliArt asking "What can we make?", with two big buttons to photograph or choose a picture
  of your odds and ends
tech:
  - React
  - TypeScript
  - AI
  - Cloudflare Workers
---

The same question as FeedMe AI pointed at a different cupboard: not what can I cook, but what can I make. There was an earlier version of this as a phone app; this is the same idea rebuilt for the web, so a link is all it takes to open it. The look is carried over from that app on purpose — the same magenta, the same thick frame round the camera, the same two enormous buttons — because the person pressing them is a child and is usually holding something sticky.

Quantity turned out to be the whole trick. The first version read a photo for names only, so one cardboard tube and six cardboard tubes produced exactly the same suggestions. It counts them now, and the count survives all the way to the idea: one tube is a rocket, six are a marble run, and anything a craft needs more of than you have is listed as something to go and find rather than quietly assumed.

Then it gets out of the way. A craft opens one step at a time, full screen, with the screen asked to stay awake, and each step carries a picture of that step actually being done — hands mid-job, the thing half-built — because what helps at step four is seeing step four, not seeing the finished article. Anything involving scissors or heat is marked plainly as a grown-up’s part.

At the end it asks for a photo of what was actually made, which is the part the app used to forget the moment it happened. That turns the Kept tab from a list of ideas you liked into a shelf of things you built, each one sitting beside the drawing of what it was meant to look like. It installs to a home screen and the shelf works with no internet at all; the AI key lives in a Cloudflare Worker with a daily cap so a passer-by cannot spend it, and every prompt carries the same house rules — no oven, nothing sharp without an adult, nothing to eat.
