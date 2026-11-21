---
title: Cloisto
order: 6
kind: clients
madeFor: "UK bookkeepers and accountants: a paid app, in beta"
summary: A Mac app for UK bookkeepers and accountants who want to use AI on client work. It masks names, NI
  numbers, bank details and the client’s own identity on their own computer before anything reaches ChatGPT,
  Claude or Copilot, then puts the real values back in the answer.
url: https://cloisto.com
host: cloisto.com
shot: /shots/cloisto.jpg
film: /film/cloisto.mp4
filmPoster: /film/cloisto.jpg
filmCaptions: /film/cloisto.vtt
filmShape: landscape
filmLength: 55
filmCaption: "Under a minute, narrated: a made-up payroll email goes in, the names become codes, an AI answers, and the real names come back."
shotAlt: "Cloisto's home page: the line Use AI on client work without giving your clients away, a Download for
  Mac button, and the app showing an email thread with its names replaced by tokens"
tech:
  - Tauri
  - React
  - .NET
  - ONNX Runtime
---

Accountants and bookkeepers can save hours with AI on reconciliations, payroll checks and client letters. But their duty of confidentiality does not stop at a chat window, and their professional bodies have said so. Taking names out by hand is slow and easy to get wrong. Cloisto does it for them, on their own machine.

You drop in a file or paste a question, and pick the client it belongs to. Names, NI numbers, bank details and the client’s own identifiers become tokens, and anything uncertain is flagged for you to check. You use the masked copy with any AI tool. The spreadsheet still opens and the figures still add up. Paste the answer back and the real names return, on your computer only.

Finding everything is the hard part. None of the AI models I tested catches UK identifiers, or a client’s name written in capitals, on its own. So detection runs in layers: rules for UK finance formats, the client’s own details entered once, and a small GLiNER model running locally. On a test set of thirty made-up finance documents it misses none of the 235 bank details, NI numbers and client identifiers, and finds 99.6% of names. Every test file is synthetic. No real client data goes near the repository.

Each client gets a sealed vault, so tokens from one client can never be restored with another’s. The keys are held by the Mac’s secure chip, and Cloisto never sees what is in a client file. The strictest level even scales amounts by a secret factor, so totals and ratios still hold and the answer converts back. It is also plain about its limits: masked data is pseudonymised, not anonymous, and your own review stays in charge.

It is in beta on the Mac now, with Windows to follow. The shell is Tauri with a React interface, and the masking engine is .NET, run beside it with no network sockets. Every decision so far is written down as a decision record, including the options turned down.
