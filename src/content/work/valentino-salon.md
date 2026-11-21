---
title: Valentino Salon
order: 55
kind: clients
madeFor: "Valentino Salon in Kensington, as a client"
summary: The website for a hair and beauty salon that has been in Kensington since 1981. Nobody types a price
  into it. Every price and every booking link comes from the salon’s booking system, and the site rebuilds
  itself each morning, so a price changed at the front desk is online the next day.
url: https://www.valentinolondon.co.uk
host: valentinolondon.co.uk
shot: /shots/valentino.jpg
film: /film/valentino.mp4
filmPoster: /film/valentino.jpg
filmCaptions: /film/valentino.vtt
filmShape: portrait
filmLength: 37
filmCaption: "Thirty-six seconds, narrated: the launch reel I made for the salon's Instagram, built from the real site. Prices are blurred because they change."
shotAlt: 'The Valentino Salon home page: "45 Years in Kensington" in a large serif on cream, with Book Now
  and Price List buttons'
tech:
  - Astro
  - Phorest API
  - GitHub Actions
  - Cloudflare Workers
---

The one site here made for a business: a hair and beauty salon on a side street off High Street Kensington, open since 1981. Its old site was a Webflow template with its own copy of the price list. So the prices lived in two places, the booking system and the website, and nothing kept them in step.

The new site has one rule. Phorest, the booking system the salon already uses, is the only source of prices. A sync reads them from the Phorest API, and the site is built from that snapshot. It rebuilds every morning, and every change is committed back to the repository, so the history shows when each price moved. If Phorest is down, the last good snapshot is used and the site stays up.

The price shown is the one Phorest’s own booking page shows: the lowest among the stylists who can take that service online. Where it depends on the stylist’s level, each level is listed. That rule has tests.

Every service links straight to itself in Phorest’s booking. That was harder than it sounds. The API and the booking page use different IDs for the same service, and a link built from the wrong one quietly drops the client on a generic list. The sync pairs them by category and name, then by duration and price to tell look-alikes apart, and reports anything it could not match. A separate check opens every category on the live booking page and compares each price with the site.

I also built full online booking in a Cloudflare Worker: live times, a real appointment in the salon’s diary, signed cancellation links and spam protection. The salon chose to keep booking and payment inside Phorest, which already takes deposits. So it is switched off, and Book Now opens Phorest. The rest is the plain work of a real business site: opening hours and directions, Google reviews that load only if you accept Google’s cookies, headings in the words people actually search for, a redirect from every old address, and accessibility checks in the tests.
