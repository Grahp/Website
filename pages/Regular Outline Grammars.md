---
title: Regular Outline Grammars
permalink: regular-outline-grammars
redirect_from:
  - regular-outline-syntax
  - regular-outline-grammar
---

A [[Steno]] [[Steno Glossary#Theory|theory]] having a "regular outline grammar" means that [[Steno Glossary#Outline|outlines]] are constructed in a way that makes their [[Steno Glossary#Word Boundary Conflict|boundaries]] unambiguous. You can always tell where an outline starts and ends, and whether a [[Steno Glossary#Stroke|stroke]] is part of the previous outline or starting a new one.

Why would this be important? Well, for one, Having a regular outline grammar entirely removes 2 major classes of [[Steno Glossary#Conflict|conflicts]] - those being [[Steno Glossary#Word Boundary Conflict|word boundary conflicts]] and word-affix conflicts.

"But we have tools to get rid of word boundary conflicts!"

Yes, through a ridiculous amount of complexity and [[Steno Glossary#Theory Rule|theory rules]], splitting words in alien ways, creating a dozen [[Steno Glossary#Mandatory|mandatory]] affixes, requiring the use of `*` for compound words (which causes its own set of mandatories, as well as conflicts for compound words that already use `*`, which can also span multiple words, because this **still** does not solve word boundaries), you can get rid of _most_ word boundary conflicts most of the time, hopefully, fingers crossed.

- (I don't think I've quite emphasized this point enough)

This is just silly, and regular outline grammars are an extremely trivial solution to this.

## How?

- Your theory very likely already has a ton of rules around trying to avoid word boundary conflicts, so adopting a regular outline grammar may not seem as important. However, these rules are not needed, and make your theory worse. This is a tradeoff of course, as regular outline grammars have their own downsides, which I will get into later.
- This is a binary thing. A theory is either regular or irregular, and there is no in-between

In order for outlines to have unambiguous boundaries, you need to define a single grammar for outlines.

The simplest way to do this would be a [[Steno Glossary#Dedicated|dedicated]] "join" [[Steno Glossary#Key|key]] that joins the current stroke to the previous, kinda like a space suppression key. then, it would be trivial to tell when outlines start and end. any stroke without the "join" key is the start of a new outline, and any stroke with the "join" key is a continuation of the previous outline. if you find it useful, the [[Theory Rules as Regular Expressions|regex for outlines]] with a join key is `(stroke without join key)(stroke with join key)*`.

This has the obvious drawback of requiring an entire dedicated key, which is usually not something you just have lying around. (Sorry shrimple :p)

A better way to go about this is with a more applied version of Phoenix's "vowel omission principle" called "subsequent vowel omission". (see *The Relativity of Theory - Carol Jochim*: [https://www.stenolife.com/carolj.htm](https://www.stenolife.com/carolj.htm))

Rather than subsequent strokes in outlines using a "join" key, they drop, or "omit", their [[Steno Glossary#Vowel|vowels]] to become [[Steno Glossary#Skeleton|skeletons]]. Subsequent vowel sounds in English are extremely unimportant, and can be completely ignored while creating approximately 0 conflicts. I could demonstrate this, but the section at the end of this page is plenty enough.

The regex for outlines with subsequent vowel omission is `(non-skeleton)(skeleton)*`

The trade-offs of subsequent vowel omission is that there are a few words that differ only in their subsequent vowel sounds, such as "forget" and "forgot"; and that all skeletons are reserved.

On the other hand, it does allow for a great amount of squishing/stacking subsequent strokes. When you don't care about the vowels, you can heavily stack multi-syllable words, such as "catatonic" into `KA*T/T*FRPBG` (To see why `*` is used there, check out [[Onyx Syllabic Splitting|Onyx syllabic splitting]]).

Another kind of flavor of subsequent vowel omission that I do not have a good name for involves only using final chords in all subsequent strokes.

If you're not comfortable giving up skeletons, there is another flavor of subsequent vowel omission that [[Steno Glossary#Dedicated|reserves]] all "naked" [[Steno Glossary#Initial|initial]] and [[Steno Glossary#Final|final]] [[Steno Glossary#Chord|chords]], but not skeletons.

Here are the rules:
1. Pick a "stressed" vowel in every word
2. Drop all other vowels
3. All vowels that come before the stressed vowel use a naked initial chord
4. All vowels that come after the stressed vowel use a naked final chord

Some extra rules:
- When there are two-or-more initial chords in a row, all but the first may be skipped (`K/T/TO/-FRPBG` becomes `K/TO/-FRPBG`)
- For words that only differ in their unstressed vowel sounds, move the stressed vowel to their "problem" vowel, or the vowel that conflicts. ("affect" and "effect" may be conflicts, so move the stressed vowel from "fect" to "af" and "ef")
- You may have to employ some ortho suffixes like "^men" and "^man". (`SEE/M-N` -> "semen", `SEE/MA*N` -> "seaman", `SEE/ME*N` -> "seamen" - ([[Raw Steno|Raw Steno]]))

In general, you can add affixes while still being regular, document this somewhere.

(See [[Semi-modal Dictionaries]])

## Just stop and leave this page

There is one more way that you could write words such that it's clear where they start and end, which is to write with just one stroke per word...

That may sound dumb, and it may be, but I'm not so sure.

In fact, a lot of folks do this - not so much in this space, but in some groups, this is just how it's done, and it's not like they yearn for more.

Boards where you type as the base, and chord on top of that - such as the board you may have heard of, linked here ([https://www.charachorder.com/](https://www.charachorder.com/)) - have no real need for more than one stroke in a row, they can can write all words with just one stroke.

That's quite cool, so why don't we do that? Well, it turns out, when the norm is to chord, not to type, it can be hard to fit ALL words in just one stroke. Boards where you type get to use more than one key press to type a word, which we can't do.

But all of our keys are bunched up to form a stroke, and we can't use more. We don't get to use a bunch more keys to write long words, or words we might not have chords for. It all has to fit in the stroke

But if we _could_ write all words with just one stroke, then we should, right? Why would you want to take _more_ strokes to write the same words that you could just write with one stroke? We only use more than one stroke per word since the rules we use to write were made a long time ago, when we had to do a lot of work by hand that's now done for us.

I think there could have been a world where we write with just one stroke words. You might need more briefs, but you can at least get most of the way there.

I can only talk like this for so long, so it won't be me who makes this.

