---
permalink: minecraft-server-from-scratch
title: Minecraft Server From Scratch
---
Writing my Minecraft server, [[Bowmap|Bowmap]] from scratch.

## Why

[[Bowmap|Bowmap]] is a completely custom game. While the vanilla Minecraft server, and forks like Spigot and Paper, makes sense for servers that are substantially like vanilla, for a server nothing like the vanilla game, they are not a good fit. 

You have to deal with the vanilla Minecraft features you don't want. This is a **substantial** source of bugs, and it's also incredibly wasteful. Even the biggest Minecraft servers deal with this all the time. The vanilla server architecture, while great for small survival worlds (which is what it was designed for), is not a good fit for an MMO.

There is currently not a Minecraft server written in [[Clojure|Clojure]]. While consuming existing custom servers written in Java, such as Minestom ([https://minestom.net/](https://minestom.net/)) is possible from Clojure, you don't get the full benefit of using Clojure.

With a custom server, I have much more control over the architecture of the server, and, perhaps more importantly, the gameplay and mechanics of the server that the player can actually see. A custom server has much more potential for interesting mechanics that a modified vanilla server.