# Coding With Steno

I spend a lot of time reading and writing [Clojure](clojure.md) code.

Code:
```clojure
(defn lookup-str [s theory]
  (let [entry {:outline (outline/str->outline s)}]
    (lookup entry theory)))
```

Theoretical Strokes:
```clojure
#TKEFPB    (defn  [])
HRUP       (defn lookup [])
ST-R       (defn lookup-str []) ;; With vowels, it's a word, so it tries to join it. Might not work
WHR-S      (defn lookup-str [s]) ;; Space puts in argument list
*THAOERD   (defn lookup-str [s theory]
-PBG   ;; Logical line down and indent (like parinfer)
#HRET        (let []))
*ERPBTD      (let [entry]))
*UFPL        (let [entry {}]))
*BG          (let [entry {:}]))
+OUPBLT      (let [entry {:outline}]))
#+OUPBLT     (let [entry {:outline (outline)}])) ;; # to add a paren
-RP          (let [entry {:outline (outline/)}]))
STAOR        (let [entry {:outline (outline/str)}]))
#O           (let [entry {:outline (outline/str->)}]))
+OUPBLT      (let [entry {:outline (outline/str->outline)}]
-PBG   ;; Line down and indent
#HRUP          (lookup)))
*ERPBTD        (lookup entry)))
*THAOERD       (lookup entry theory)))
```

