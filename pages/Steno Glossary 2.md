---
title: Steno Glossary 2
permalink: steno-glossary-2
redirect_from:
  - steno-glossary2
---

WIP rewrite of [[Home|my]] [[Steno Glossary|Steno Glossary]]. This should be easier to understand, and less unnecessarily technical.

The content on this page is dedicated to the public domain under [[CC0|CC0 1.0 Universal]]. Feel free to use it however you'd like :)

Outline:
- [_Key_](#key)
- [_Chord_](#chord)
- [_Stroke_](#stroke)
- [_Outline_](#outline)
- [_Translation_](#translation)
  - Affixes
  - Commands
  - Untran
- [_Entry_](#entry)
- [_Dictionary_](#dictionary)
  - [_Lookup_](#lookup)
  - [_Reverse Lookup_](#reverse-lookup)
  - [_Programmatic Dictionary_](#programmatic-dictionary)
- [_Theory Rule_](#theory-rule)
- [_Theory_](#theory)
  - Long
  - Short
	- Phonetic
	- Orthographic
	- Orthospelling
- [_Conflict_](#conflict)
  - [_Word Boundary Conflict_](#word-boundary-conflict)
	- Word-affix Conflicts
	- Homophonic Conflicts
- [_Write-out_](#write-out)
- [_Brief_](#brief)
  - Misstroke
- [_Mandatory_](#mandatory)
- Steno Order
- [_Layout_](#layout)
  - WSI Layout
  - Extended Stenotype Layout
- Steno Engine
  - Plover
- Steno Writer
  - Steno Machine
  - Steno Keyboard
	- Stenotype
- Philly Shift
- Shadowing
- Bank
- Key Label

## Key
**Noun**

An individual key on a _steno machine_ or _layout_. Analogous to a key on a keyboard.

- Multiple keys may share the same _label_, with a dash (-) denoting what _bank_ the key is in. For example, in the _WSI layout_, there are two keys _labeled_ '`S`': the _initial_ `S-` key, and the _final_ `-S` key. Notice the dash at the start and end of the key.

## Chord
**Noun**

A set, or group, of [_keys_](#key). Chords may denote a sound, letter, affix, or any other part of a _translation_.

- Chords can be combined to form [_strokes_](#stroke).
- The difference between a chord and a [_stroke_](#stroke) can often be subtle. See [[Chords vs Strokes|Chords vs. Strokes]].
- An example chord is `TPH-`, which _translates_ to the _initial_ "n" sound (/n/).

**Verb**

Pressing down all the [_keys_](#key) that make up a chord on a _steno machine_.

- "Chording" is a term outside of _steno_, which means "pressing multiple [_keys_](#key) together at once", rather than one at a time.
- Often used interchangeably with the verb [_stroke_](#stroke).

## Stroke
**Noun**

A set, or group, or [_keys_](#key) pressed together simultaneously.

- If that sounds like what a [_chord_](#chord) is, that's because [_chords_](#chord) and strokes are very similar. They are both sets of [_keys_](#key). When you press down a set of [_keys_](#key) simultaneously, that is a stroke. A [_chord_](#chord) is something you can use to build strokes.
- A helpful way to think of it is that when you combine two [_chords_](#chord), you get a stroke, but when you combine two strokes, you get an [_outline_](#outline)
- For a full explanation of the difference between [_chords_](#chord) and strokes, see [[Chords vs Strokes|Chords vs. Strokes]].

**Verb**

Pressing down all the [_keys_](#key) that make up a stroke on a _steno machine_.

- Often used interchangeably with the verb [_chord_](#chord).

## Outline
**Noun**

One or more [_strokes_](#stroke) [_chorded_](#chord), or pressed, in sequence.

## Translation
**Noun**

A word, phrase, part of a word or phase, sound, affix, command, punctuation, or any other output.

**Verb**

To "translate". The translation that an [_outline_](#outline) maps to is referred to as its "translation".

- For example, the [_outline_](#outline) `KAT` translates to "cat".

## Entry
**Noun**

An entry, or [_dictionary_](#dictionary) entry, is a mapping between an [_outline_](#outline) and a [_translation_](#translation).

- For example, the [_outline_](#outline) `HOT/TKOG` might map to the [_translation_](#translation) "hotdog".

## Dictionary
**Noun**

A set of [_outlines_](#outline) with mappings to [_translations_](#translation). Dictionaries are made up of dictionary [_entries_](#entry).

## Lookup
**Noun**

The process of "looking up" a [_translation_](#translation) in a [_dictionary_](#dictionary).

## Reverse Lookup
**Noun**

The process of "looking up" the [_outlines_](#outlines) that map to a given [_translation_](#translation) in a [_dictionary_](#dictionary).

- Called "reverse lookup" as it is the opposite of regular [_lookup_](#lookup).

## Programmatic Dictionary
**Noun**

A [_dictionary_](#dictionary) that [_translates_](#translation) [_outlines_](#outline) as you _write_ them, rather having a pre-defined collection of [_entries_](#entry).

## Theory Rule
**Noun**

A "rule" defining some part of how [_outlines_](#outline) should be mapped to [_translations_](#translation).

## Theory
**Noun**

A set of [_theory rules_](#theory-rule) that defines how [_outlines_](#outline) should map to [_translations_](#translation).

- Theories usually come with [_dictionaries_](#ditionaries), which are usually the theory author's best attempt to follow their [_theory rules_](#theory-rule).

## Conflict
**Noun**

An [_outline_](#outline) that has multiple valid [_translations_](#translation) according to your [_theories_](#theory).

- There are many different kinds of conflicts that happen for different reasons.

## Word Boundary Conflict
**Noun**

A type of [_conflict_](#conflict) where it is unclear where [_outlines_](#outline) should start and stop given a sequence of [_strokes_](#stroke).

## Write-out
**Noun**

An [_outline_](#outline) that follows all [_theory rules_](#theory-rule), and isn't _shortened_ in any way.

## Brief
**Noun**

An "abbreviated" [_outline_](#outline), used to reduce the number of [_strokes_](#stroke) required to _write_ a [_translation_](#translation).

**Verb**

To "abbreviate" an [_outline_](#outline). To use a [_translation_](#translation)'s brief rather than its [_write-out_](#write-out).

## Mandatory
**Noun**

An [_outline_](#outline) with no [_write-out_](#write-out), and only [_briefs_](#brief).

**Adjective**

Having no [_writeouts_](#write-out), and only [_briefs_](#brief)

## Layout
**Noun**

A set of [_keys_](#key) with _labels_, often grouped into _banks_, often with a defined _steno order_, that can be grouped into [_chords_](#chord).

- The most common, and "standard" steno layout is the _WSI Layout_.
