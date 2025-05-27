---
permalink: chalsed
title: Chalsed
---
Pronounced KAL-SED

The Lisp Editor.

## Goals

- Code and Data orientation
- Extensibility via libraries
- [[Steno Editor Ideas|Steno Integration]]
- Lightweight and Tiny

## Beliefs

- Editors are too character based.
- Editors are too large.
- Plugins are bad.

## Editor Complexities

- Plugins in not giving the user control over their output, and being largely buffer-based and stateful
- Text
- Breakage and Inconsistency

## Code Editing

In a **text** editor, you have a **text** cursor that you move around your **text** file to make **text** actions and **text** motions to modify the **text** that makes up your code.

Code is overwhelmingly comprised of collections, not text (even if your language doesn't make that obvious), we should be working at that level. 

Code is constrained. Text and data are not really constrained, you need something beyond this. Linters are not the anwser, you need semantic coding editing capabilities.

Code is constrained. Text is not constrained, even data is largely not constrained, You need semantic **code** editing capabilities.

## Spreadsheets, Notes, Diagrams

Who actually writes code?