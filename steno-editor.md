# Code Editor

Ideas for a [steno](steno.md)-aware code editor.

Most of this comes from the lisp editing model I've been working on.

## Modal Editing

Modal editing makes a lot of sense when you have a very limited number of keys available at any moment. Being in a mode is like holding down a special modifier key while performing related actions.

While steno still benefits from smaller strokes, it's not nearly as important as reducing the total number of strokes, and requiring an entire stroke to switch modes is very costly.

> The cost of one stroke is at least one stroke

## Selection Model

To put it in vim terms, you have an insert mode and a visual (selection) mode.
In insert mode, you can utilize steno to type faster. You have a cursor that follows the text you're typing.
In selection mode, you can move around the file and make selections. With a selection, you can delete, copy, paste over the selection, etc.

To enter selection mode, you simply start moving around. Any movement strokes will place you in selection mode. Once in selection mode, you can do selection mode actions, and re-enter insert mode at a specific point.

This avoids having any mode switching strokes. The problem is, you now need a stroke in order to leave selection mode. To avoid that, you can have dedicated strokes for selection mode actions, such as delete, copy, paste, all movement strokes, and entering insert mode. These strokes cannot be used in insert mode. Then, any strokes other than these will place you back in insert mode.

I use the `P` `W` and `H` keys for selection mode actions (paste, yank, and delete), as these are not legal strokes in [Onyx](onyx.md), meaning you can't use them in insert mode anyway, but you can use any strokes you'd like.

## Keybinding Model

In order to do all of this, you need an editor that can interpret your steno strokes directly.
