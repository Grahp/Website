---
permalink: onyx
title: Onyx
---

WIP Phonetic [[Steno|Steno]] [[Steno Glossary#Theory|Theory]].

This is a high-level overview. For a more detailed breakdown of the rules of Onyx, see the [[Onyx Spec|Onyx Spec]].

Onyx strives to be the simplest possible theory.

## Theory Complexities

What makes theories so complex?

Onyx does not solve all of these, but they are interesting to think about.

- _Conflicts_
  - Conflicts literally complect words together! A conflict means "this word and this word have an implicit relationship".
  - _Word Boundary Conflicts_
    - Word boundary conflicts complect every stroke with every other stroke surrounding it, as the meaning of a stroke can change depending on it's surroundings.
- _Mandatory Outlines_
  - Mandatories complect a word with a brief (big nono).
- _Orthography_
  - Orthography complects a word with it's spelling.
- _Theory rules_
  - If a theory rule has too much reach, it can conflict with other theory rules. A rule might also be complected with its surroundings. Having too many rules means they are more likely to conflict with each other.
- _Steno order_
  - Pretty minor, but just having order in a layout is complex. Order complects the set of keys you need with the order they appear. Order also dictates when you can do what, such as folding.

## Goals

- **Simplicity and Consistency**
- Obvious, consistent [[Steno Glossary#Entry|entries]]
  - User-tailored pronunciations, and perfectly consistent phonetics (via [[Quartz|Quartz]])
  - Minimal mandatory orthography (candid and completely enumerated, via [[Quartz|Quartz]])
- Open for user [[Steno Glossary#Brief|briefing]]

## Beliefs

- Inconsistencies are annoying when learning. They are incredibly dangerous when you have to build on top of a shaky foundation.
- Inconsistencies propagate, FAST.
- Smaller theories are better. Smaller theories are easier to learn, easier to build, easier to understand, easier to maintain, easier to extend, easier to keep consistent, easier to document...
- Theories must still be extensible. An opinionated core and an extensible foundation are required.
- Theories should be exclusively and rigorously rule-based.

## Future Plans

- Dictionary (via [[Quartz|Quartz]])
- Learning resource for hobbyists
- Learning resource for beginners