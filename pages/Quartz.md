---
permalink: quartz
title: Quartz
---

WIP [[Steno|Steno]] [[Steno Glossary#Programmatic Dictionary|Programmatic Dictionary]] Generator.

Repo: [https://github.com/Grahp/Quartz](https://github.com/Grahp/Quartz)

## Traditional Theory Realization

[[Steno Glossary#Theory|Theories]] are **never** reified in their entirety.

Once you've designed a theory, you **manually** create hundreds of thousands of [[Steno Glossary#Entry|entries]] that "satisfy" that theory, and collect them into a [[Steno Glossary#Dictionary|dictionary]].

This leads to dictionaries that are:
- **Static**
- Bulky
- **Vestigial**
- Perpetually Incomplete
- Thoroughly **Inconsistent**
- **Poorly Documented**
- Unstable
- **Unmaintainable**

There is no presence of your theory in the end dictionary. This becomes very apparent as soon as you try to change your theory in any meaningful way (get to work).

## Python Dicts?

- **Bespoke** theory representation
  - Completely reified! (yay)
  - Not inherently well documented
- **Manual** transformations (not fun)
- Dynamic! (mostly)

I think there's a reason nobody has built an entire theory dictionary with python dicts. They are fairly primitive.

## Froj?

([https://github.com/StenoHarri/Froj](https://github.com/StenoHarri/Froj))

- Still produces **static** json dicts
  - Bulky, context-unaware, etc.
- Built on [[Steno Glossary#Theory Rule|theory rules]]!
  - This is a fantastically good idea
  - Theory rules **are** documentation!
  - Auto-generated [[Steno Glossary#Outline|outlines]]!
  - Uses chord-based rules
- Uses somewhat of an [[Uberdictionary]].

Froj never claims to build an entire dictionary for you, which is probably reasonable if you're a normal person.
Unlike python dicts, you can absolutely build a large theory dictionary like this.

As nice as Froj is, I disagree with many of it's design decisions. This is likely because Harri ([https://github.com/StenoHarri/](https://github.com/StenoHarri/)) and I are making very different theories (Tad and [[Onyx|Onyx]], respectively) with very different requirements.

## Quartz

What properties might Quartz have?

- Go **directly** from theory to dictionary.
- **Dynamism** and **context-aware(ness)**!
- **Stability**
- **Declarative** theory rules
  - Transactional theory changes
  - No vestigiality
  - Completely reified!
  - Inherent documentation!

## How?

Quartz goes **directly** from theory to dictionary. No "manually write a hundred fifty thousand entries, and then spend the rest of your life maintaining them" step.

Quartz dictionaries are rule-based, unlike traditional entry-based dictionaries.

## Process

The process a Quartz dictionary takes in lookup:

1. Receive the inputted outline.
2. Split the outline into manageable parts.
3. Independently apply all rules to the split outline.
4. Turn the outputs of all matching rules into an output translation.

### Lookup Example

Step 1: Receive Outline: `TPROG`

Step 2: **Outline Splitting**:

Split by bank:
`TPR- O -G`

Split into chords:
`TP- R- O -G`

Step 3: **Rule Application**:

Apply **all** rules (independently):

After rule application, you're left with `f r o g`

(`f r o g` is pronunciation data, but it could also be orthographic if you're making an ortho theory)

Step 4: **Output**:

Transform rule outputs to translation:

Lookup in uberdictionary:
`f r o g -> "frog"`

**Finally**,

Return translation:
`"frog"`

### Theory Rules

Theory rules are typically very abstract. We may write them down, but it's very imprecise, and has no real coordination with your dictionary.

In truth, theory rules are very simple. A theory rule just provides a function of some input that provides some output. This is known as the application function, and is what is applied during theory rule application.

### Dictionary

When we think of dictionaries, we tend to think of something like a JSON dict. However, a dictionary is not necessarily a static enumerated file of entries. This idea is where theory staticness comes from.

In the case of Quartz, a dictionary is just a lookup function. See [[Quartz#process|the process a Quartz dictionary takes]].

### Uberdictionary

(See [[Uberdictionary]])

An uberdictionary is a collection of translations with context about their origin, pronunciation, and other pertinent attributes.

With an uberdict, you can write context for translations once, and all theories using that uberdict get that context for free.

Since Quartz is rule-based, you get new entries for free!

## Problems

### Rule Application

What do rule application functions need? What do they return?

Some rules need only the outline, while other need the translation. Maybe there are rules that need both! I could certainly come up with theoretical ones.

Rules seem to just be able to feed arbitrary information around, but I'm not sure if that's correct.

### Combination

How do you combine rule outputs into something usable?

How does the combination know what a theory rule really wants to do? Perhaps all rules should be fully decoupled, but that might not be possible.

### Dynamism

It might be hard to find errors in theory logic if entries are only ever determined when they're needed. When generating an enumerated dict, you can validate the entries as they're generated, but with a programmatic dict, you're generating the entries while you're typing them. This means you can't really know whether your dictionary works, I think.

Exhaustively applying all plausible outlines is probably not possible. Lookup is too slow, and outlines are too plentiful. It might be possible for rules to generate outlines that satisfy that rule, but rules are too complex for this to be enough. You need the ability to take a theory and generate valid entries for that theory. These could then be reviewed and likely trivially checked for theory logic errors.

Maybe [[Clojure|spec]] could do this?

### Uberdict

How do you represent an [[Uberdictionary]]?
