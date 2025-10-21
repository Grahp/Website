---
title: Bowmap Progress
permalink: bowmap-progress
redirect_from:
  - bowmap-roadmap
---
[[Bowmap|Bowmap]]'s progress every day. [[Home|I'm]] making this to hold myself accountable, and so anyone can see my progress :p

My goal is to have some kind of tangible progress every single day.

## Progress

October 19, 2025, 89 days until release

- Pulling apart the server and doing a rather large rewrite of its main logic.
- Still don't have a good rule system, so that needs to happen, and then I can handle packets and respond to them in a reasonable way.

October 18, 2025, 90 days until release

- Side note, spec annoys me sometimes
- But anyways, there's still stuff to rewrite. I gotta finish this rule/event system so I can not go crazy. And then there's still a lot of mess :p
- Project crossed 1000 lines which is neat. The majority of that is codecs and packets but still (and I'm in the middle of a rewrite)

October 17, 2025, 91 days until release

- I'll try to remember to update this lol
- Continuing that rewrite :p
- Mostly boring, but it needs to get done
- After this I think I will work on blocks and chunks
- Besides blocks, there are also items, inventories, entities, the player, and a bunch of other things to do :p
- And that's just sort of "vanilla interop" things, not even the more interesting non-vanilla things I want to do!
- Big plans, no idea how much of that will be realized in 90 days but there will hopefully be at least something :p

October 18, 2025, 92 days until release

- Did a lot, fixed some bugs, did texture pack work, started rewriting some things that desperately need rewritten!
- I found some texture pack tweaks I can use to make the world look very interesting and much less like vanilla Minecraft, which is super cool.
- I think the game is starting to have its own kind of art style that I'm trying to nail down. I have a general vibe of what I want, but there are lot of blocks to make and I don't have all that much experience with pixel art - I've mostly just done items and not blocks (blocks are hard :p)

October 8, 2025, 100 days until release

- BUSY, just some thinking

October 7, 2025, 101 days until release

- Another time skip ._.
- Erm I got chunks working, at least chunks with only a single type of block in them
- And I broke the server and now I'm trying to fix it. I broke it like 2 days ago and now I honestly can't remember what's broken about it, so that's fun

September 27, 2025, 111 days until release

- Time skip, hello!
- Been a few days, got a little bit done, and a decent amount of thinking, but not much farther
- Next up is chunks, but there are some things I need to do before then.

September 22, 2025, 117 days until release

- More thinking, but nothing much yet

---

September 21, 2025, 118 days until release

- Still working through chunks :p
- Thought about stuff down the road

---

September 20, 2025, 119 days until release

- Some work on chunks. Not much really, just trying to understand them.

---

September 19, 2025, 120 days until release

- JOINED INTO THE WORLD AAH

---

September 18, 2025, 121 days until release

- Pretty sure I got a good amount done, probably NBT stuff and registries

---

September 17, 2025, 122 days until release

- Fixed broken NBT behavior
- A ton of work on registries, got the main guys done, I think there's just one left for now?

---

September 16, 2025, 123 days until release

- A LOT OF STUFF BIG DAY I DON'T EXACTLY REMEMBER WHAT
- Got much farther along in the protocols
- Got the dimension type registry working

---

September 15, 2025, 124 days until release

- Registries, made the dimension type schema and a dimension type
- Bunch of codec work

---

September 14, 2025, 125 days until release

- Made identifier codec
- Begun working on registries :D

---

September 13, 2025, 126 days until release

- NBT codecs, almost finished them

---

September 12, 2025, 127 days until release

- Maybe some random code stuff, but no progress

---

September 11, 2025, 128 days until release

- Names of stuff?
- More configuration
- Uh oh, NBT...

---

September 10, 2025, 128 days until release

- Got codecs working with optionals
- Got to configuration!
- Did some more thinking about the future (why can't I be there and not here :p)

---

September 9, 2025, 129 days until release

- Nothing so far
- And then not much after that :p
- Did a little bit of work on codecs (stuck on optionals, but didn't spend that long working on them)

---

September 8, 2025, 130 days until release

- Some more clean up
- Open sourced what I have now :D
- Started on login step
- More Codecs (optional seems tricky...)

---

September 7, 2025, 131 days until release

- Got packet decoding working (a better system)
- Started working on packet encoding for clientbound packets. SLP tomorrow?
- SLP TODAY (I stayed up way too late lmao)
- Moved networking stuff out of the main logic.
- Some other misc cleanup at midnight :p

---

September 6, 2025, 132 days until release:

- Made the initial packet decoding transducer
- Worked on codecs (strings, arrays, all the varnums). I had these working previously through a complex codec abstraction that was really unnecessary, but it's been much easier this time

---

September 5, 2025, 133 days until release:

- Made a packet splitting transducer...
- Figured out what I think is a good model for decoding packets as they come in from the client!

---

September 4, 2025, 134 days until release:

- Made this :p
