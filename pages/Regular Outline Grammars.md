---
title: Regular Outline Grammars
permalink: regular-outline-grammars
redirect_from:
  - regular-outline-syntax
  - regular-outline-grammar
---

A [[Steno|Steno]] [[Steno Glossary#Theory|Theory]] having a "regular outline grammar" means that [[Steno Glossary#Outline|outlines]] are constructed in a way that makes their [[Steno Glossary#Word Boundary Conflict|boundaries]] unambiguous. You can always tell where outlines start and end, and whether a [[Steno Glossary#Stroke|stroke]] is starting a new outline or continuing the previous one.

Why would this be important? Well, for one, Having a regular outline grammar entirely removes 2 major classes of [[Steno Glossary#Conflict|conflicts]] - those being [[Steno Glossary#Word Boundary Conflict|word boundary conflicts]] and word-affix conflicts.

"But we have tools to get rid of word boundary conflicts!"

Yes, through a ridiculous amount of complexity and [[Steno Glossary#Theory Rule|theory rules]], splitting words in alien ways, creating a dozen [[Steno Glossary#Mandatory|mandatory]] affixes, requiring the use of `*` for compound words (which causes its own set of mandatories, as well as conflicts for compound words that already use `*`, which can also span multiple words, because this **still** does not solve word boundaries), you can get rid of _most_ word boundary conflicts most of the time, hopefully, fingers crossed.

- (I don't think I've quite emphasized this point enough)

This is just silly, and regular outline grammars are an extremely trivial solution to this.

## How?

- Your theory very likely already has a ton of rules around trying to avoid word boundary conflicts, so adopting a regular outline grammar may not seem as important. However, these rules are not needed, and make your theory worse. This is a tradeoff of course, as regular outline grammars have their own downsides, which I will get into later.
- This is a binary thing. A theory is either regular or irregular, and there is no in-between

In order for outlines to have unambiguous boundaries, you need to define a single grammar for outlines.

The simplest way to do this would be a dedicated "join" key that joins the current stroke to the previous, kinda like a space  suppression key. Then, it would be trivial to tell when outlines start and end. Any stroke without the "join" key is the start of a new outline, and any stroke with the "join" key is a continuation of the previous outline. If you find it useful, the regex for outlines with a join key is `(stroke without join key)(stroke with join key)*`.

This has the obvious drawback of requiring an entire dedicated key, which is usually not something you just have lying around.

I think a better way to go about this would be with a more applied version of Phoenix's "Vowel Omission Principle" called "subsequent vowel dropping".

Rather than subsequent strokes in outlines using a "join" key, they drop, or "omit", their vowels to become skeletons. Subsequent vowel sounds in English are extremely unimportant, and can be completely ignored while creating approximately 0 conflicts. I could demonstrate this, but the section at the end of this page is plenty enough.

The regex for outlines with subsequent vowel dropping is `(non-skeleton)(skeleton)*`

The trade-offs of subsequent outline splitting is that there are a few words that differ only in their subsequent vowel sounds, such as "forget" and "forgot"; and that all skeletons are reserved.

- (This does allow for a great amount of squishing, demonstrate that here)

Another kind of flavor of subsequent vowel dropping that I do not have a good name for involves only using final chords in all subsequent strokes.

## Just stop and leave this pag.e

There is one more way you could write words in a way that it's clear when they start and end, which is to write with just one stroke per word.

That may sound dumb, and it may be, but I'm not so sure it is.

In fact, a lot of folks do this - not so much in this space, but in some groups, this is just how it's done, and it's not like they yearn for more.

Boards where you type as the base, and chord on top of that - such as the board you may have heard of, linked here ([https://www.charachorder.com/](https://www.charachorder.com/)) - have no real need for more than one stroke in a row, they can can write all words with just one stroke.

That's quite cool, so why don't we do that? Well, it turns out, when the norm is to chord, not to type, it can be hard to fit ALL words in just one stroke. Boards where you type get to use more than one key press to type a word, which we can't do.

But all of our keys are bunched up into a stroke, and we can't use more. We don't get to use a bunch more keys to write long words, or words we might not have chords for. It all has to fit in the stroke

But if we _could_ write all words with just one stroke, then we should, right? Why would you want to take _more_ strokes to write the same words that you could just write with one stroke? We only use more than one stroke per word since the rules we use to write were made a long time ago, when we had to do a lot of work by hand that's now done for us.

I think there could have been a world where we write with just one stroke words. You might need more briefs, but you can at least get most of the way there.

I can only talk like this for so long, so it won't be me who makes this.

