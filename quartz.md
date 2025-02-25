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
- Poor format for theory rules, in my opinion

Froj never claims to build an entire dictionary for you, which is probably reasonable if you're a normal person.
Unlike python dicts, you can absolutely build a full theory dictionary like this.

## Quartz

What properties might quartz have?

- Reified theory
  - No vestigiality
  - Documentation!
- Go **directly** from theory to dictionary
- **Dynamism** and **context-aware(ness)**!
- **Stability**
- **Discrete** theory rule application

### Rules

Quartz is a rule based dynamic dictionary generator.

A rule-based dictionary means you can use an [uberdictionary](uberdictionary.md) or word list to automatically get new entries based on your rules.

### How?

Quartz goes **directly** from theory to dictionary. No "manually write a hundred fifty thousand entries, and then spend the rest of your life maintaining them" step.

#### Dictionary

A dictionary is not necessarily a tangible thing. This idea is where theory staticness comes from, among other things.
In the case of Quartz, [**A dictionary is just a lookup function**](https://github.com/Grahp/Steno-Glossary#dictionary). This lookup function takes an outline and your entire theory, and returns the translation after applying all theory rules to the outline.

#### Theory Rules

Theory rules are very abstract. Sometimes we write them down (never in their entirety), but it's very imprecise, and has no coordination with your dictionary.

The theory rule format I've been working with (making simple orthospelling dicts) has 2 parts: a match predicate and an application function.
That is, whether an rule applies to an entry, and then the transformation of the entry, or the application of the theory rule.
Essentially, theory rules continuously modify the translation, and that's **all** they do.

(if you're reading this you should star the repo so I know how many people actually care)

### Process

TODO

And talk about how this simplifies rules

### Problems

#### Entry Application

What do you give to rule application functions?
What do rule application functions need?
I think it's entries.
I don't know what they return though. They seem to just want to feed data around.

#### Order-dependent Rules

Syntactic rules are rules in which the order of their application matters.
Take a rule such as "capitalize the translation if it starts with an A".
This rule **must** come after the translation has been determined.

Sometimes rule application order might matter. Take a rule such as "capitalize the translation if it starts with an A". This rule must be executed after the translation has been determined.

I think rules like this have to go in a separate category. Just like there are rules that apply before the bulk of rules and determine splitting and organization, there might be rules that must come after all other rules.

#### Dynamism

It might be hard to find errors in theory logic if entries are only ever determined when they're needed. When generating an enumerated dict, you can validate the entries as they're generated, but with a programmatic dict, you're generating the outlines while you're typing them. This means you can't really know whether your dictionary works, I think.
