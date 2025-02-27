# Lisp Editing Model

[Steno](steno.md) lisp editing model.

For a more generic lisp-independent version of this, see [steno editing model](steno-editing-model.md)

2 things make up a lisp program: words and collections.

Words are character-based. Symbols and keywords are almost exclusively just characters. Numbers are also just characters. Both of these have a few syntactic rules, like a `:` before a keyword and a `.` for a decimal point in a number, but these are obvious and can be handled by the programmer.

Collections are not character based. A list is just that: a list of **elements**. Those elements themselves may be character based, but the list itself is most certainly not.

To treat collections as characters is complex.

- Strings exist in a weird middle ground. They are collections of characters, but they are also just that: collections of characters. They are one thing.

## Editing

You edit code by zooming in on collections and their constituent elements. You do not edit code by moving a text cursor around. A text cursor is character-based, meaning it can't handle collections.

- There is an implied list around your entire file.

In normal mode, you write characters. If you want a list, you type a paren.
In selection mode, you work with elements. Words are handled as words, and collections are handled as collections.

At any given time, in selection mode, you have 2 selections: a word and it's surrounding collection.

- There are cases where one of these may not be present, such as selecting a root node of a file, or selecting an empty collection, or a collection with no words in it.

With multiple selections, you lower the number of movement strokes you need to get to anywhere. This does make strokes larger, but that's a price worth paying.

## Word editing

- You can also act on different parts of the same word. For example, edit the namespace and name of a keyword or symbol, and similar for ratios and decimals. This might also even apply to words-separated-by-dashes in symbols and keywords.
