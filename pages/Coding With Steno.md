---
permalink: coding-with-steno
title: Coding with Steno
---
[[Code Editors|Writing]] [[Programming Languages|code]] with [[Steno|Steno]].

This page is about the writing part of coding, for the editing part, see [[Steno Code Editing Model|Steno Code Editing Model]].

## Random Code Example

Code:
```clojure
(defn lookup [s theory]
  (let [entry {:outline (outline/str->outline s)}]
    (lookup-entry entry theory)))
```

Theoretical Strokes:
```clojure
#TKEFPB    (defn  [])
HRUP       (defn lookup [])
WHR-S      (defn lookup [s]) ;; Space puts in argument list
*THAOERD   (defn lookup [s theory]
-PBG   ;; Line down and indent (like parinfer)
#HRET        (let []))
*ERPBTD      (let [entry]))
*UFPL        (let [entry {}]))
*BG          (let [entry {:}]))
+OUPBLT      (let [entry {:outline}]))
#+OUPBLT     (let [entry {:outline (outline)}])) ;; # to add a paren
-RP          (let [entry {:outline (outline/)}]))
STAOR        (let [entry {:outline (outline/str)}]))
#O           (let [entry {:outline (outline/str->)}])) ;; "->" is read as "to", `O` is my "to" outline
+OUPBLT      (let [entry {:outline (outline/str->outline)}]
-PBG   ;; Line down and indent
#HRUP          (lookup)))
#TPH*RTD       (lookup-entry))) ;; Skeletonizing the outline means it's part of the next word? Probably doesn't work. Otherwise, you just need a `{^-^}` stroke.
*ERPBTD        (lookup-entry entry)))
*THAOERD       (lookup-entry entry theory)))
```

