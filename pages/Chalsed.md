---
permalink: chalsed
title: Chalsed
---
Pronounced KAL-SED

[[Clojure|Clojure]] Code Editor.

## Goals

- Code and Data orientation
- [[Steno Editor Ideas|Steno Integration]]
- Extensibility via libraries
  - Problems need solved
- Being a functional editor
  - Data orientation
  - Data-emitting libraries
  - Advanced data editing (if only we had a very powerful language for data editing...)

## Beliefs

- Editors are too large.
- Editors are obstructive.
- Editors are too character based.
- Plugins are a curse, plugins are a lie.

## Editor Complexities

- Plugins in not giving the user control over their output, and being largely buffer-based and stateful
- Text in your code having rules and information that you must worry about beyond the code
- Breakage and Inconsistency
- Non-standard formats

## Code Editing

In a **text** editor, you have a **text** cursor that you move around your **text** file to make **text** actions and **text** motions to modify the **text** that makes up your code.

Code is overwhelmingly comprised of collections, not text (even if your language doesn't make that obvious), we should be working at that level. 

Code is constrained. Text and data are not really constrained, you need something beyond this. Linters are not the anwser, you need semantic coding editing capabilities.

## Code Visualization

Chalsed provides you with one way to visualize your code, not that there aren't more. A TUI editor cannot do this properly.