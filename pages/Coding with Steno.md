---
title: Coding with Steno
permalink: coding-with-steno
redirect_from:
  - steno-editor
  - steno-code-editor
  - steno-editor-ideas
  - steno-editing
  - steno-code-editor-ideas
  - steno-editing-model
  - steno-lisp-editing-model
  - steno-code-editing-model
---

A [[Steno]] [[Programming Languages|code]] [[Code Editors|editing]] "keybinding" model.

## Modal Editing

[[Home|I]] like [[Vim|modal]] editing. Being in a mode adds context to your keypresses, which is needed to distinguish between typing and editing. There are other ways you could add this context, like prefixing every editing keybinding with a modifier. I'll be talking about these two approaches - the [[Vim|vim]] vs emacs keybindings, if you will.

What these keybinds have in common is that they both [do something special] to add context to your keypresses, since on a normal keyboard, you only have ~30 keys.

In [[Steno]], we have millions of strokes available at any given moment, we can do better.

## Automatically Modal Editing

Instead of requiring context, such as a mode switching stroke or dedicated key, you can take a set of strokes and make it place you in a separate, ephemeral mode.

- Never require mode switching strokes
- Group strokes into normal and selection mode stroke
- How selection mode works
