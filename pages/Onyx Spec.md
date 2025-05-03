---
permalink: onyx-spec
redirect_from:
  - onyx/spec
title: Onyx Spec
---
WIP [[Onyx|Onyx]] specification.

It's out of date because writing a theory spec is too much work.

## Outline

- [[Onyx Spec Layout|Layout]]
- [[Onyx Spec Conflict Overrides|Conflict Overrides]]
- [[Onyx Spec Mandatories]]

## Theory Stack

Onyx is split into several theories designed to work together.

The base of Onyx is a tiny phonetic theory with conflicts. This theory (called "Onyx Base") is built on the pronunciations of words.

To solve these conflicts, an orthographic exception theory is used on top of Onyx Base. This resolves all homophones via rules, or occasional mandatories.

With this, you are left with a realtime theory with no conflicts. However, this theory is quite stroke heavy, so a briefing dictionary is used on top of this theory. Onyx ships with a theory dictionary with a few notable rules, such as `^` for pre-initial schwa, and `+` to split enders into pseudo-strokes, as well as another theory using "fake words" such as "snog" that map to translations such as "stenography".

On top of this foundation, you can use your own user theory, briefing theories, theories for numbers, commands, symbols, etc.