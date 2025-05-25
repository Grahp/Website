---
permalink: minecraft-server-from-scratch
title: Minecraft Server From Scratch
---
Writing my Minecraft server, [[Bowmap|Bowmap]], from scratch in [[Clojure|Clojure]]

## Why?

While the vanilla Minecraft server, and forks like Spigot and Paper, are a good fit for server that are substantially like the vanilla game, for a totally custom server, like Bowmap, they are not. Bowmap is not just Minecraft with some tweaks, it is a fundamentally different game.

Using a vanilla server means inheriting all of Minecraft's built-in features, even if you do not want them. Features designed for vanilla gameplay can be abused in unexpected ways. This is a **substantial** source of bugs, even for the largest Minecraft servers. You can **feel** this when playing on any sufficiently unique Minecraft server.

Beyond the vanilla gameplay mechanics, there is the constraint of the vanilla server architecture, which was designed for small survival worlds, and is a terrible fit for an MMO. An considerable amount of time and effort is spent tweaking the the server to fit your exact needs. The vanilla server is very state-heavy, making concurrency and horizontal scaling nearly impossible. Everything is run in a main game loop run on a fixed tick cycle, which is unnecessarily restrictive and slow. The vanilla server is heavily coupled to the client, requiring crude packet translation to different protocols, and great consideration as to how every part of the server interacts with the client.

The vanilla server, and most custom server implementation, are written in Java. Java is a language straight from hell and I will not use it. While it is possible to interface with these servers from Clojure, they are still incredibly complex and stateful. You can't leverage the strengths of Clojure, like its data orientation and functional programming.