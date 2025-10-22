---
permalink: 7dee7daa
layout: code
redirect_from:
  - 7dee7daa-d8ba-4f93-bf99-bae790e139b3
---

```clojure
(ns net.bowmap.core
  (:require [clojure.core.async :refer [<!! >!! chan]]
            [clojure.core.rrb-vector :as v]
            [clojure.pprint :as pp]
            [net.bowmap.codecs :refer [<< <enum <string <ushort <varint try-read-varint]])
  (:import (java.io InputStream)
           (java.net ServerSocket Socket))
  (:gen-class))

(defn packet-splitter-xf
  "A stateful transducer that splits packets using their length.
   The packet's varint length is read, and incoming bytes are buffered until a full packet has arrived."
  [rf]
  (let [buf (volatile! (v/vector-of :byte))]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result input]
       (vswap! buf v/catvec input)
       (loop [res result]
         (if-let [[len rst] (try-read-varint @buf)]
           (if (>= (count rst) len)
             (let [pk (v/subvec rst 0 len)]
               (vreset! buf (v/subvec rst len))
               (recur (rf res pk)))
             res)
           res))))))

(defn packet-decoder-xf
  "A stateful transducer that decodes packets.
   Receives pre-split packet bytes, and yields the decoded packet for every packet that comes in, keeping track of client state."
  [rf]
  (let [client-state (volatile! :handshaking)]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result encoded-pk]
       (let [[pid bs] (<varint encoded-pk)]
         ;; ofc I'll move this out to something other than a switch statement, but you get the idea :p
         (case [@client-state pid]
           [:handshaking 0x00] (let [x (<< [:protocol-version <varint
                                            :server-address <string
                                            :server-port <ushort
                                            :intent (<enum <varint {1 :status 2 :login 3 :transfer})]
                                           bs)]
                                 (vreset! client-state (:intent x))
                                 (rf result x))

           result))))))

(defn read-bytes!
  "Reads bytes as they come in from the client, and puts them onto out-chan as rrb vectors."
  [socket out-chan]
  (let [input-stream (Socket/.getInputStream socket)
        arr (byte-array 4096)]
    (loop []
      (let [n (InputStream/.read input-stream arr)]
        (when (pos? n)
          (>!! out-chan (v/subvec (v/vec arr) 0 n))
          (recur))))))

(defmacro thread [& args]
  `(Thread/startVirtualThread (fn [] ~@args)))

(defn handle [socket]
  (let [xf (comp packet-splitter-xf packet-decoder-xf)
        packet-chan (chan 1024 xf)]
    (thread (read-bytes! socket packet-chan))
    ;; Another transducer could read these and decide what packets to send back to the client :D
    (thread (loop []
              (tap> (<!! packet-chan)) ;; Just printing the packets as they come in rn
              (recur)))))

(defn -main [& _]
  (add-tap pp/pprint)
  (let [server (ServerSocket. 25565)]
    (tap> "Server Started!")
    (while true
      (handle (ServerSocket/.accept server)))))
```
