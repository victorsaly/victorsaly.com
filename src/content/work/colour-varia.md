---
title: Colour Varia
order: 56
kind: clients
madeFor: "Colour Varia, an app business, as a client"
summary: The website for Colour Varia, an app that finds the colours that suit you from a selfie. I moved it off
  Webflow. It looks and works exactly as before, but is now plain files in a repository, lighter, more
  accessible, and its tracking waits for consent.
url: https://www.colourvaria.com
host: colourvaria.com
shot: /shots/colourvaria.jpg
shotAlt: "Colour Varia's home page: the line Discover Your Best Colors inside bands of green, pink and blue, two
  Download buttons, and four phones showing the app"
tech:
  - Astro
  - GitHub Pages
  - Playwright
---

Colour Varia is a phone app: take a selfie and it works out the colours that suit you, then finds clothes in them. Its website lived on Webflow. The job was to move it into plain files, published by GitHub Pages, without anyone noticing, so the design is not mine. It is the same site, page for page.

So the pages keep Webflow’s own markup, and its stylesheet, script and fonts are now served from the site itself. Menus, the slider and the animations work as they did. An untouched copy of the Webflow site is kept in the repository, and the script that made the new site from it says what it changed on the way.

What changed is everything a visitor should not have to think about. Google Analytics, Tag Manager and the Meta pixel now load only after you accept cookies, as UK law asks, and the videos play without Vimeo’s tracking. Images became WebP, so the blog page went from 6 MB to 0.8 MB. The typos went, the app screenshots got alt text, the download buttons got names, and the grey small print got dark enough to read. On phones, a Webflow bug had hidden the copyright line behind the pinned Download buttons. That is fixed too.

It went live on 21 November 2026. Every push builds the site and runs end-to-end tests in desktop Chrome and iPhone Safari before it is published, and the footer year moves on by itself each January.
