---
title: Oliver Math
order: 65
summary: A maths game for children that you play by talking. A 3D robot asks a question out loud, the
  child says the answer, and right answers earn stars.
url: https://victorsaly.github.io/OliverMath/
host: victorsaly.github.io
repo: https://github.com/victorsaly/OliverMath
shot: /shots/olivermath.jpg
shotAlt: "Oliver Math: a yellow 3D robot standing in a landscape, waiting for the child to press Play"
tech:
  - Vue
  - Ionic
  - three.js
  - Azure Speech
  - Azure Functions
---

Made for Oliver, who wanted a robot that talks and listens like Alexa, but for his times tables. There is nothing to type and nothing to read: the robot asks, the child answers out loud, and Azure Speech works out what they said. Times, plus, minus and divide, each at three levels, with practice modes that go back over weak spots and recent mistakes.

It is built for a child who may not read fluently yet, so nothing depends on text alone. The robot's colour, its face, a ring on the floor and a written word all say the same thing. The edges of the screen pulse blue while it talks and green while it listens. Silence is never scored as wrong, because in a noisy room a missed answer is the likeliest turn. Tell me how has the robot read the instructions aloud, in five languages.

It is a static Vue app on GitHub Pages that installs as an app, with the 3D scene and its assets kept for offline use; speech still needs a connection. Anything that needs a key goes through four small Azure Functions, so the key never reaches the browser. three.js and the robot load after the first paint, and without WebGL the robot falls back to a 2D animation.
