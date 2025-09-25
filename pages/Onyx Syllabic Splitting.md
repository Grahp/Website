---
permalink: onyx-syllabic-splitting
redirect_from:
  - onyx-splitting
  - onyx-spec-splitting
  - onyx-spec-syllabic-splitting
title: Onyx Syllabic Splitting
---

Disclaimer: This page is part of the [[Onyx Spec|Onyx Spec]], meaning it may be out of date and/or incomplete. [[Onyx Spec Archive|See the notice here]].

How [[Onyx|Onyx]] splits words/[[Steno Glossary#Outline|outlines]].

Onyx uses a [[Regular Outline Grammars|regular outline grammar]] (you should read that page).

"Onyx Splitting" is a form of [[Regular Outline Grammars|subsequent vowel omission]] with the addition of "pseudo-strokes".

A pseudo-stroke is a part of a [[Steno Glossary#Stroke|stroke]] that acts as if it were a separate stroke used in combination with the rest of the stroke. Essentially, you're "squishing" multiple strokes into one, while keeping the exact same behavior.

`*` is used to split the [[Steno Glossary#Final|final bank]] of a stroke into another pseudo-stroke. It's a pretty intuitive system, but it's different for each [[Steno Glossary#Chord|chord]].

For example, the [[Steno Glossary#Outline|outline]] `KO*EM` [[Steno Glossary#Translation|translates]] to "coma". This outline essentially consists of the 3 [[Steno Glossary#Bank|banks]] `K` `OE` and `*M`. Here, `KOE` acts like a stroke, and `*M` as a pseudo-stroke. When `*` is used in pseudo-strokes, it should be dropped, and the final chord should be treated as an [[Steno Glossary#Initial|initial chord]]. Thus, this outline is equivalent to the outline `KOE/PH`. Because of the subsequent vowel omission, the subsequent vowel sound is left out.

A final chord can also be split into a stroke with chords in the [[Steno Glossary#Initial|initial]] and final banks, such as the stroke `PA*FRPBG` - where `-FRPBG` => /ŋk/ (see [[Onyx Layout|Onyx Layout]] and [[Raw Steno|Raw Steno]]) - which effectively has the banks `P`, `A`, and `*FRPBG`, where `*FRPBG` is a pseudo-stroke equivalent to `/TPH-K`. By the same rules above, the /ŋk/ sound can be split into it's (roughly) equivalent initial and final sounds with `TPH-` and `-K`.
