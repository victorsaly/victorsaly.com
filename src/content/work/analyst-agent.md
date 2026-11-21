---
title: Analyst Agent
order: 9
kind: tools
madeFor: "An agentic AI course: a team of eight that I led"
summary: An AI agent that answers sales questions in plain English, draws the chart, and shows the exact SQL
  behind every number. A course capstone on Microsoft’s AdventureWorks sample data, made by a team of eight; I
  led it and built the agent, the site and the tooling.
url: https://victorsaly.github.io/business-analyst-agent-demo/
host: victorsaly.github.io
repo: https://github.com/victorsaly/business-analyst-agent-demo
shot: /shots/analyst.jpg
film: /film/analyst.mp4
filmPoster: /film/analyst.jpg
filmCaptions: /film/analyst.vtt
filmShape: landscape
filmLength: 60
filmCaption: "One minute, narrated: the team's pitch, cut from real recorded runs of the agent."
shotAlt: "The Analyst Agent's demo: the title Business Performance Analyst Agent, a Stakeholder and Developer
  switch, numbered cards for Tracks, Briefing, Scorecard and Tools, and a chat that answers how it was built"
tech:
  - Python
  - FastAPI
  - SQLite
  - Groq and OpenAI
  - Cloudflare Workers
---

The final project of an agentic AI course: take the starting agent the course gave us and make it something a business could trust. Ask it why margin dropped in the Northwest in the second quarter, and it plans the analysis, runs read-only queries on the sales data, fixes its own mistakes, draws a chart and explains what drove the change. Then it lists the queries it ran, taken from the tool log, not from what the model says it did.

Trust was the whole brief, so most of the work is guardrails. Every number has to come from a tool result. The database is opened read-only and only SELECT is accepted, so asking it to delete the orders is refused. When the data cannot answer, such as returns or competitor prices, it says so instead of guessing. A scorecard marks it on seven questions, four from the brief and three traps, against answers worked out straight from the database. The recorded runs pass all seven.

There are two ways to look at every screen. Stakeholders see the answer, the numbers and the chart, with each step in plain English. Developers also see every tool call, the SQL, the timings and the tokens. Each screen can also explain itself out loud, with captions that follow the words.

The online version replays real recorded runs, because live AI would need a server holding a key. On your own machine it runs live and takes your own questions. AdventureWorks is Microsoft’s made-up bicycle company, so no real business or personal data is used. I led a team of eight: the others worked on testing, prompts and changes to the agent, and the team is credited on the site.
