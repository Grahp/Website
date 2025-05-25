---
permalink: minecraft-server-from-scratch
title: Minecraft Server From Scratch
---
Writing my Minecraft server, [[Bowmap|Bowmap]], from scratch.

## Why?

While the vanilla Minecraft server, and forks like Spigot and Paper, are a good fit for server that are substantially like the vanilla game, for a totally custom game, they are not. [[Bowmap|Bowmap]] is a game that happens to target the Minecraft client, rather than being Minecraft with some tweaks.

When using a vanilla server, you have to pay for all of the vanilla features, whether you actually want them or not. Abusing vanilla features not intended to be used on the server is a **substantial** source of bugs in custom Minecraft servers. Even the biggest servers in the world deal with this all the time, and you can **feel** it while playing them.

You are also obliged to the vanilla architecture, which was designed for small survival worlds, and is a terrible fit for an MMO. A considerable amount of effort is required to tweak the server to work exactly to your needs. The vanilla server is very state-heavy, making concurrency and horizontal scaling near impossible; runs on a fixed tick cycle; and is heavily coupled to the client, requiring crude packet translation to different protocol versions, and great consideration as to how every part of the server interacts with the client.

The vanilla server, and the most mature custom server implementations out there, are written in Java. Java is a language straight from hell and I will not use it. While consuming these from my preferred language, [[Clojure|Clojure]], is very doable, you get very little benefit from using Clojure to write what is essentially a giant Java application in disguise.