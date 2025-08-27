---
permalink: steno-editing-model
title: Steno Editing Model
---
A [[Steno|Steno]] [[Code Editors|Editor]] "keybinding" [[Steno Editor Ideas|model]].

## Modal Editing

Modal editing makes a lot of sense when you have a very limited number of unique strokes at your disposal, say only ~30 keys on a qwerty keyboard. Being in a mode adds context to every action you perform. This means you don't need to hold down a mod key, or add an additional prefix key to your actions, in order for them to be unique.

However, a [[Steno]] keyboard has over 24 million available strokes at any given time. This is more than enough strokes to perform any editing action you would ever want to make. Requiring a stroke or dedicated key to switch modes is a problem.

## Selection Mode

Instead of having one mode where everything is done, you have one additional mode: selection mode.

In selection mode, you move and extend what you're selecting.

With a selection, you can perform selection actions, such as deleting, copying, pasting, etc.

Whenever you use a movement stroke, you will be placed in selection mode if you're not already in it, and you'll start extending your selection, much like holding shift while using arrow keys.

To leave selection mode, just start typing again. This will throw away your selection, and bring your text cursor to wherever it was in the selection.

This avoids requiring any strokes to enter and leave selection mode. Just start moving around to extend your selection, and start typing to void your selection. As long as your movement strokes and selection mode action strokes are not used in normal writing, no mode switching is required.

## Non-modal selection?

The differences between selection mode and non-modal selection are that:
- Only 1 set of movement strokes are required, instead of needing a stroke for movement and a stroke for movement and selection.
- Starting to type with a selection selected does not cut the selected text, it just appends your cursor.
- Complex movement strokes can also be used (say, "select the entire paragraph under my cursor").

## Keybinding Model

In order for this to work, your editor needs to be able to differentiate movement strokes and selection mode action strokes from normal typing. This can be done in several ways. I'm still trying to figure out what the best way to do this is.

## Overview

Essentially, just separate typing from movement and selection, and allow any other needed strokes to be independent of those things (saving the file, et al).
