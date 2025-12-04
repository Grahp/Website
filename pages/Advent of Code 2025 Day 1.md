---
title: Advent of Code 2025 Day 1
permalink: advent-of-code-2025-day-1
redirect_from:
  - aoc2025-day-1
  - aoc-2025-day-1
  - aoc2025-1
  - aoc-2025-1
  - advent-of-code-2025-1
layout: default-clojure
---

[[Advent of Code 2025|Advent of Code 2025]] Day 1 :p

Yeah I'm late don't worry about it.

There are only 12 days anyway right?

I'm probably going to spend more time getting code to appear correctly on this page than I am solving the actual puzzle ._.

```clojure
(+ 1 2 3)
; Test!
"Foo"
```

Did that work?

---

No it did not!

Oh I forgot the css :p

---


Okay somehow that broke the styling for the entire page...


---

Okay there we go.

Well I already did part 1 and just wrote some comments :p

(If you're not familiar with [[Clojure|Clojure]], you should read from bottom up... And also right to left but don't worry about it)

```clojure
(ns dev.grahp.aoc2025.day1
  (:require [clojure.string :as str]))

; You have a Dial from 0-99 
; Can move Left or Right by 'n'
; Dial starts at 50
; it wraps around so 99 + 1 = 0, 0 - 1 = 99
; Need: The number of times the dial points at zero after doing a rotation

; Format: L39 R10 L1903
; 11 + R8 = 19
; 19 + L8 = 11
; 0 + L1 = 99

(defn normalize [n]
  (cond
    (>= n 100) (recur (- n 100))
    (< n 0) (recur (+ n 100))
    :else n))

(defn rotate [n {::keys [direction amount]}]
  (normalize (case direction
               ::left (- n amount)
               ::right (+ n amount))))

(defn parse-input-string [s]
  (for [[direction-letter & amount] (str/split-lines s)]
    {::direction (case direction-letter
                   \L ::left
                   \R ::right)
     ::amount (Integer/parseInt (apply str amount))}))

(defn part-1 [input-string]
  (->> (parse-input-string input-string)
       (reductions rotate 50)
       (filter zero?)
       count))
```

This is kinda funky, but it first parses the input string into a "rotation" map with a direction and an amount. Yes this could have just been a number :p

But anyways, to rotate the dial, it subtracts to the current count if you're going left and adds if you're going right, and then normalizes the result back to what it's supposed to be with a loop.

I looked at someone else's solution ([https://narimiran.github.io/aoc2025/src/day01/](https://narimiran.github.io/aoc2025/src/day01/)) and learned that modulo does this :p


So because I can't help myself I'm just going to...

```clojure
(ns dev.grahp.aoc2025.day1
  (:require [clojure.string :as str]))

(defn rotate [n amount]
  (mod (+ n amount) 100))

(defn parse-input-string [s]
  (for [[direction-letter & amount] (str/split-lines s)]
    (let [n (Integer/parseInt (apply str amount))]
      (case direction-letter
        \L (- n)
        \R (+ n)))))

(defn part-1 [input-string]
  (->> (parse-input-string input-string)
       (reductions rotate 50)
       (filter zero?)
       count))
```

I used `case` instead of `if` because I think it'd be better to fail on a bad input right?

Anyways, `reductions` is pretty cool here. `reductions` returns a list of each step of calling `rotate` with the current dial position and the next amount to rotate from the input.

```clojure
(->> "L68
L30
R48
L5
R60
L55
L1
L99
R14
L82"
     ;; Each of the parsed inputs
     parse-input-string ; (-68 -30 48 -5 60 -55 -1 -99 14 -82)
		 ;; What they are after rotating with the current position of the dial
     (reductions rotate 50)) ; (50 82 52 0 95 55 0 99 0 14 32)
```

Then `(count (filter zero?))` to get the number of times the dial was at zero!
