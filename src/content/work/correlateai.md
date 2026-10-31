---
title: CorrelateAI
order: 30
summary: Pick any two real public datasets and it tells you whether the correlation is real or a
  coincidence. Two things that rise over the same decades will almost always correlate, so it
  removes each series’ time trend and checks whether the link survives. A toy with a serious point
  about how easy it is to find a convincing relationship in real data.
url: https://correlateai.victorsaly.com
host: correlateai.victorsaly.com
repo: https://github.com/victorsaly/correlateAI
shot: /shots/correlateai.jpg
shotAlt: "CorrelateAI comparing US internet users with US forest area: a correlation of +0.91,
  circled as likely spurious because it collapses to -0.01 once the shared time trend is removed"
tech:
  - React
  - TypeScript
  - Recharts
  - Public data
---

Two things that rise over the same decades will almost always correlate, whether or not they are related. CorrelateAI is built around that one fact. Pair any two of seventy-two real yearly series — World Bank, NOAA, Our World in Data, the U.S. Treasury, USGS earthquakes, sunspot counts and more — and it gives you the correlation, a p-value and a confidence interval, then does the thing most charts skip: it subtracts each series’ straight-line trend and asks whether the relationship is still there.

US internet users against US forest area is the example it opens on. They correlate at +0.91, strongly enough to put in a slide. Remove the shared trend and it falls to −0.01. The verdict is written in plain words and circled in red like a marked-up draft, and there are five of them: not significant, likely spurious, direction flips without the trend, interpret with caution, and holds up after detrending. Every statistic is computed in your browser from source-linked data, and the rules that choose the verdict are tested.

It started as a speed experiment: the first version was built end to end in one afternoon with an AI pair, and it was a machine mass-producing absurd matches. This version keeps the joke and adds the half that was missing: how to tell a coincidence from the real thing. Every result has a link you can share, a Gallery of notable pairs comes with a note on multiple comparisons, and pairs with enough shared years get their own indexable page.

It is deliberately upfront about what it cannot do. The p-value assumes each year is independent of the last, which yearly series rarely are, so the p-values run somewhat optimistic and the page says so. A correlation that holds up still says nothing about cause. The data refreshes weekly from public sources that need no API key, and if a source fails the last good copy is kept rather than a saved pair quietly disappearing.
