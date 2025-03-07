# Coding With Steno

I want to be able to write and edit [Clojure](clojure.md) code with [steno](steno.md).

## Code Examples

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

