---
title: Fennel
permalink: fennel
---

[[Clojure|Lisp]] for Lua :p

Website: [https://fennel-lang.org](https://fennel-lang.org)

It's a surprisingly interesting language for what is pretty much just a syntax abstraction over Lua. Though in all fairness, Lua is a surprisingly interesting language itself.

It's not really homoiconic though, which is sad :( and hurts macros, as you might imagine :(

Homoiconicity is a spectrum, fennel is definitely on the edge of being a Lisp or not. It also primarily compiles to Lua and lives in that world, though that's pretty much the only way with Lua (no stable bytecode :()

I'm trying to write a Neovim framework so I can configure my editor in Fennel. I mean there are already plugins for that but I don't particularly love any of them (Hotpot ([https://github.com/rktjmp/hotpot.nvim](https://github.com/rktjmp/hotpot.nvim)) is close! :p)
