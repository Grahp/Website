---
title: Faddle
permalink: faddle
---

Faddle is a [[Lisp|Lisp]] for Lua that [[Home|I'm]] making.

Lua is a great platform - it's small, easy to learn, very slow moving, dynamic, blazingly fast (allegedly), has a ton of different implementations: from a 200k C interpreter to a powerful JIT, running on a Raspberry Pi, compiling to JS and running on the web, building a multi-platform binary, it's an extremely versatile language.

I couldn't say it any better; from the [[Fennel|Fennel]] rationale ([https://fennel-lang.org/rationale](https://fennel-lang.org/rationale))

> The conceptual simplicity of Lua stands in stark contrast to other "easy to learn" languages like JavaScript or Python--Lua contains very close to the minimum number of ideas needed to get the job done; only Forth and Scheme offer a comparable simplicity. When you combine this meticulous simplicity with the emphasis on making programs reprogrammable, the result is a powerful antidote to prevailing trends in technology of treating programs as black boxes out of the control of the user.

_However_, Lua does have some goofiness, and it's utter lack of a standard library is unacceptable to me.

Faddle is a more functional language than Lua - it's a Lisp, and oriented around procs rather than banging on tables in place. It has opt-in variables and globals.

Why not Fennel?

- Fennel has no runtime
- Fennel isn't a Lisp, it's a Lisp _syntax_
- Fennel isn't any more functional than Lua
- Fennel has no standard library on top of Lua
