---
permalink: /quartz/
---

# Quartz

WIP Dynamic [Steno](steno.md) Dictionary Generator.

Repo: [https://github.com/Grahp/Quartz](https://github.com/Grahp/Quartz)

## Traditional Theory Realization

Theories are **never** reified in their entirety.

Once you've designed a theory, you **manually** create hundreds of thousands of entries that "satisfy" that theory, and collect them into a dictionary.

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

- Still produces **static** json dicts.
  - Bulky, context-unaware, etc.
- Built on theory rules!
  - This is a fantastically good idea
  - Theory rules **are** documentation!
  - Auto-generated outlines!
  - Uses chord-based rules
- Uses somewhat of an [uberdictionary](uberdictionary.md)

Froj never claims to build an entire dictionary for you, which is probably reasonable if you're a normal person.
Unlike python dicts, you can absolutely build a full theory dictionary like this.

As nice as froj is, I disagree with many of it's design decisions. This is likely because harri ([https://github.com/StenoHarri/](https://github.com/StenoHarri/)) and I are making very different theories with very different requirements.

## Quartz

What properties might quartz have?

- Go **directly** from theory to dictionary
- **Dynamism** and **context-aware(ness)**!
- **Stability**
- **Declarative** theory rules
  - Transactional theory changes
  - No vestigiality
  - Completely reified!
  - Inherent documentation!

### How?

Quartz goes **directly** from theory to dictionary. No "manually write a hundred fifty thousand entries, and then spend the rest of your life maintaining them" step.

Quartz is rule based, unlike traditional entry based theories. A rule based theory means you can use an [uberdictionary](uberdictionary.md) to automatically generate new entries based on existing rules without any additional effort.

#### Dictionary

When we think of dictionaries, we tend to think of something like a JSON dict. However, a dictionary is not necessarily an enumerated file of entries. This idea is where theory staticness comes from.

In the case of Quartz, **A dictionary is just a lookup function**. This lookup function takes an outline and your entire theory, and returns the translation after applying all theory rules to the outline.

#### Theory Rules

Reifying theory rules is quite a challenge. Theory rules are very abstract. Sometimes we write them down, but it's very imprecise, and has no real coordination or connection with your dictionary.

The theory rule format I've been working with (making simple orthospelling dicts) has 2 parts: a match predicate and an application function.
That is, whether an rule applies to an entry (the match predicate), and then the application of the theory rule (the apply function).

### Process

The process Quartz takes.

TODO translation rules?

1. Receive the sequence of strokes that were inputted.
2. Turn the input into manageable parts. Splitting it into smaller outlines, and splitting the constituent strokes into entries.
3. Independently apply all rules to the outlines, getting back multiple outputs (translations).
4. Attempt to combine the outputs, returning them if they can be combined successfully, and failing the lookup function if they cannot.

### Formula

Comparison of Quartz's formula to Froj's:

Theory, Uberdictionary -> Programmatic Dictionary

Froj Formula:

Pronunciation data, Rules -> entries

I think that roughly sums up the differences between Froj and Quartz.

### Problems

- What are rules
- How are they applied
- Uberdict

#### Rule Application

What do rule application functions need? What do they return?

Some rules need only the outline, while other need the translation. Maybe there are rules that need both! I could certainly come up with theoretical ones.

Rules seem to just be able to feed arbitrary information around, but I'm not sure if that's correct.

#### Dynamism

It might be hard to find errors in theory logic if entries are only ever determined when they're needed. When generating an enumerated dict, you can validate the entries as they're generated, but with a programmatic dict, you're generating the entries while you're typing them. This means you can't really know whether your dictionary works, I think.

Exhaustively applying all plausible outlines is probably not possible. Lookup is too slow, and outlines are too plentiful. It might be possible for rules to generate outlines that satisfy that rule, but rules are too complex for this to be enough. You need the ability to take a theory and generate valid entries for that theory. These could then be reviewed and likely trivially checked for theory logic errors.

Maybe [spec](clojure.md) could do this?

#### Uberdict

How do you represent an [Uberdictionary](uberdictionary.md)?

### Basic Example

**Basic Quartz Lookup**
Outline Lookup: `TPROG`

**Splitting Step**:

Split by bank:
`TPR- O -G`

Split into chords:
`TP- R- O -G`

**Rule Application Step**:

Apply **all** rules (independently):

Rules that apply: `f r o g` (How is order maintained here?)
(`f r o g` is pronunciation data, but it could also be orthographic if you're making an ortho theory)

**Combination Step**:

Transform **outputs** to translation:

Lookup in uberdict:
`f r o g -> "frog"` (How does the uberdict know this?)

**Finally**,

Return translation:
`"frog"`
