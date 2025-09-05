---
title: Regular Outline Grammars
permalink: regular-outline-grammars
redirect_from:
  - regular-outline-syntax
  - regular-outline-grammar
---

In [[Steno|Steno]], a [[Steno Glossary#Theory|Theory]] having a "regular outline grammar" means that [[Steno Glossary#Outline|outlines]] are constructed in a way that means you can always tell where outlines start and end (thus making it "regular").

For example, you could dedicated use a "join" [[Steno Glossary#Key|key]] that joins the current [[Steno Glossary#Stroke|stroke]] with the previous, kind of like a space suppression key.

If you were to do this, it would be trivial to tell when outlines start and end. Any stroke without the "join" key is the start of a new outline, and any stroke with the "join" key is a continuation of the previous outline. This would entirely remove 2 classes of [[Steno Glossary#Conflict|conflicts]], those being [[Steno Glossary#Word Boundary Conflict|word boundary conflicts]], as well as word-affix conflicts.

"But we have tools to get rid of word boundary conflicts!"

Yes, through a ridiculous amount of complexity and theory rules, splitting words in alien ways, creating a dozen [[Steno Glossary#Mandatory|mandatory]] affixes, requiring the use of `*` for compound words (which causes its own set of mandatories, as well as conflicts for compound words that already use `*`, which can also span multiple words, because this **still** does not solve word boundaries), you can get rid of _most_ word boundary conflicts most of the time, hopefully, fingers crossed.

This is silly, and there is a trivial solution: regular outlines grammars.

A "join" key is not the only way to accomplish this. This idea came from [[Onyx|Onyx]], where [[Home|I]] called it "[[Onyx Syllabic Splitting|Onyx Splitting]]". Rather than subsequent strokes in outlines using a "join" key, they dropped [[Steno Glossary#Vowel|vowels]], so you could only use [[Steno Glossary#Skeleton|skeletons]] in subsequent strokes. For example, the word "monotonous" would be [[Steno Glossary#Stroke|stroked]] as `PHO/TPH/T/TPH-S` (See [[Steno Notation|Steno Notation]]), or "mo -n t- n-s". With Onyx Splitting, you can also squash a ton of these subsequent strokes together and still have canon outlines, so you could do `PHO/TPH-T/TPH-S` and save a stroke.

This worked shockingly well, and I still think it's a good idea. I was only able to find 2 conflicts after using it for months! The only place this can cause conflicts is with words that differ exclusively in their subsequent vowel sounds, like "forget" and "forgot" (the 2 conflicts I found).
