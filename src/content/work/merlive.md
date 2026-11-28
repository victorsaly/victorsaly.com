---
title: Merlive
order: 9
kind: tools
summary: An agent skill that turns the Mermaid in your Markdown into diagrams that look planned, in your own
  colours, that readers can step through. The Mermaid stays the source; Merlive places every box by rule.
url: https://skills.victorsaly.com/merlive
host: skills.victorsaly.com
repo: https://github.com/victorsaly/merlive
shot: /shots/merlive.jpg
shotAlt: "Merlive's page: the line Merlive this document, the install command, and a purchase order approval
  flow drawn twice, by Mermaid and by Merlive."
tech:
  - Agent Skills
  - Node.js
  - Mermaid
  - Claude Code
---

Mermaid is the easy way to write a diagram and an odd way to look at one: diamonds twice the size of the boxes, a main path that wanders from side to side, and long curved lines across everything. I kept wanting the diagrams in my docs to look like someone had planned them, without giving up the text that makes them easy to write and to review.

So Merlive keeps your Mermaid as the source and draws it again by rule: the main path in one straight line, boxes of one size, and lines that go round boxes instead of through them. The rules are written down, each one is checked before a diagram is written, and nobody places a box by hand. You tell your coding agent to "merlive this document", and it writes one self-contained page per diagram that readers can step through, in colours it reads from your own site.

It draws flowcharts, and state, class, entity, sequence, C4 and block diagrams, mindmaps, kanban boards, timelines and more; the kinds it does not draw yet are left as Mermaid and named. It needs nothing but Node, is free and MIT licensed, and installs with one line. [Its page](https://skills.victorsaly.com/merlive) shows the same Mermaid drawn both ways.
