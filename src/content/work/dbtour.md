---
title: dbtour
order: 8
kind: tools
summary: Shows you what is inside a database, every table, what it holds and how it connects, as a page you
  browse, docs in your repository, and answers for your AI coding agent. It documents from the structure, never
  the data; rows are read only when you run a query, through a login that can only read.
url: https://skills.victorsaly.com/dbtour
host: skills.victorsaly.com
repo: https://github.com/victorsaly/dbtour
shot: /shots/dbtour.jpg
film: /film/dbtour.mp4
filmPoster: /film/dbtour.jpg
filmCaptions: /film/dbtour.vtt
filmShape: landscape
filmCaption: "A minute and a half, narrated: from one command to a documented SQL Server database, then the same
  tour for an AI agent. Filmed on a demo database with made-up rows."
shotAlt: "dbtour's page: the line that says what it does, the databases it reads (SQL Server, Azure SQL,
  SQLite), and the start of its 30-second film."
tech:
  - TypeScript
  - Node.js
  - SQL Server
  - SQLite
  - MCP
  - Agent Skills
---

dbtour reads a database's structure and keeps it in your repository as one model. From that it makes a page you search and follow relations in, Markdown that GitHub shows with diagrams, and the same tour for your coding agent over MCP, so it writes SQL from the real names instead of guessed ones.

It began as a replacement for dbschema-markdown, which turned a SQL Server schema into Markdown. Now it is a small family: the app, the command line, an agent skill, an MCP server, a Claude Code plugin, and a package for each database. One line starts it, and a page sets a database up in five steps, with passwords kept in the system keychain. Every table is ranked by size, the columns someone protected are marked, and read-only queries run through a login that can only read.

It works with SQL Server, Azure SQL and SQLite, with PostgreSQL next. It is free and MIT licensed. [Its page](https://skills.victorsaly.com/dbtour) has a 30-second teaser and the full tour, filmed on a masked copy of a real app's database with made-up rows.
