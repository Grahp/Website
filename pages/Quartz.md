---
permalink: quartz
title: Quartz
redirect_from:
  - serial-theory-rule-application
---

(Abandoned) [[Steno|Steno]] [[Steno Glossary#Programmatic Dictionary|Programmatic Dictionary]] Generator.

There are cool ideas here that I will document better at some other time, but for now you may find some goodies in here!

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
(`TPR-`, `O`, `-G`)

Split into chords:
(`TP-`, `R-`, `O`, `-G`)

Step 3: **Rule Application**:

Apply **all** rules (independently):

After rule application, you're left with (/f/, /r/, /ɑ/, /g/)

Step 4: **Output**:

Transform rule outputs to translation:

Lookup in uberdictionary:
(/f/, /r/, /ɑ/, /g/) -> "frog"

**Finally**,

Return translation:
"frog"

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

### Rule Application

A rule takes the outline input as it's given, and returns **information** for the combiner.

That information might be pronunciation data, an orthographic sequence, etc.

Take a rule that needs a translation. Since rules are just given an outline, that rule cannot apply yet, it needs more context. That implies that there are multiple types of rules. Perhaps cyclical rule application is needed, or "post" rules that run in a batch after all others.

## Problems

### Combination

What does the combination step really entail?

Rules are fully decoupled from combination, which might make it hard for the combiner to be able to combine outputs effectively.

### Reverse Lookup

Reverse lookup (also known as "outline lookup") is just like lookup, but takes translations and returns outlines that form that translation.

This is very important for learning a theory, as well as catching errors in theory logic.

If entries are only ever determined when they're needed (i.e. if only lookup is supported, and not reverse lookup), catching theory logic errors might be harder, and learning a theory via reverse lookup would be completely impossible.

When generating a static dict, you can validate the entries as they are generated, but with a programmatic dict, you're generating the entries on-the-fly.

Exhaustively looking up plausible outlines is also not feasible. Lookup is too slow, and outlines too plentiful. Rules need to be able to generate valid outlines for that rule, and theories need to be able to generate valid outlines for the theory.


Maybe [[Clojure|spec]] could help with this?

### Uberdictionary

How do you represent an [[Uberdictionary]]?
