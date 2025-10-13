---
permalink: minecraft-server-from-scratch
title: Minecraft Server From Scratch
---

[[Home|I'm]] [[Code Editors|writing]] my [[Minecraft Server|Minecraft server]], [[Bowmap|Bowmap]], from scratch in [[Clojure|Clojure]].

## Why?

Insanity.

That's why, that's it.

Even with software like Spigot or Paper, writing Minecraft servers drives me crazy, so I'm writing my own server implementation.

That being said, there is a lot of cool stuff you can do with a from-scratch Minecraft server.

Minecraft is a game, and you cannot hope to another game on top of it. You cannot take a game and add things to it and expect a new game to come out the other end.

Minecraft servers that build off the vanilla game are extremely constrained in what they can actually do. This might not have always been the case, but it absolutely is today.

Minecraft can function as a game engine, allowing you to build unique games inside of its limitations.

If you want to make something that is just Minecraft with some additions and tweaks, that is absolutely cool and awesome and you should do it, but that is not what I want to do.

No matter how much you customize the vanilla server, you are still inheriting all of its features, even when you do not want them. Be ready for bugs and unexpected behavior as vanilla mechanics get abused in unexpected ways. It isn't trivial to disable things you don't want, and you'll probably end up spending enough time removing things you don't want to justify starting from nothing and only adding the things you do want!

Beyond just the vanilla gameplay mechanics, there's the server architecture itself, which was designed for small survival worlds with just you and maybe some friends. Porting that to, say, an MMO would be a substantial amount of work.

The vanilla server is very stateful and single-threaded, making it very difficult to scale. Want to split processing across nodes? Well... Good luck with that!

The vanilla server is built around the concept of "worlds", which, again, makes a lot of sense for a survival world, and very little else.

And back on the topic of insanity, this stateful object-oriented programming model that seems to dominate Minecraft servers just drives me crazy.
