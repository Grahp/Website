# Steno Editing Model

Ideas for a [steno](steno.md)-aware code editor.

Most of this comes from the lisp editing model I've been working on.

## Modal Editing

Modal editing makes a lot of sense when you have a very limited number of keys at your disposal. Being in a mode is like holding down a special modifier key while performing related actions, but you don't need a dedicated key to do this, and you don't have to hold down a mod key at all.

While steno still benefits from smaller strokes, it's not nearly as important as reducing the total number of strokes, and requiring an entire stroke to switch modes is very costly.

> The cost of one stroke is at least one stroke

A steno keyboard has over 24 million available strokes, you can do better than that.

## Selection Model

In this model, you have 2 modes: insert mode and selection mode.

In insert mode, you write text like normal, and utilize steno to type faster.

In selection mode, you make selections around the file. This is how you move around, a selection will always follow you. With a selection, you can delete it, copy it, paste over it, or throw it away and enter insert mode at your cursor.

Whenever you use a movement stroke in insert mode, you will be placed in selection mode. This avoids having any mode switching strokes. The problem is, you now need a stroke in order to leave selection mode. To avoid that, you can have dedicated strokes for selection mode actions, such as delete, copy, paste, all movement strokes, and re-entering insert mode. These strokes cannot be used in insert mode. Then, any strokes other than these will place you back in insert mode. This means, to throw away your selection and begin typing in insert mode, you simply start writing.

I use the `P` `W` and `H` keys for selection mode actions (paste, yank, and delete), as these are not legal strokes in [Onyx](onyx.md), meaning you can't use them in insert mode anyway, but you can use any strokes you'd like.

## Keybinding Model

In order to do all of this, you need an editor that can interpret your steno strokes directly.
