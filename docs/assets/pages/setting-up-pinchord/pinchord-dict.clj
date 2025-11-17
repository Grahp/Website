(def priority
  "Priorities used for javelin orthospelling."
  (zipmap [::pre-prefixes ::prefixes ::initials ::vowels ::finals ::suffixes] (rest (range))))

(comment
  (def yaml-dict (yaml/parse-string (slurp "pinchord-javelin-dictionary.yaml")))

  (->> (:letters yaml-dict)
       (filter #(= (:order %) 2))
       (map (fn [m] [(:stroke m) (:data m)]))
       (into {})))

(def initials {"T" "t",
               "TSH" "sk"
               "TSPHR" "sv",
               "TP" "f",
               "TSWR" "kr",
               "THR" "thr",
               "TPR" "fr",
               "PWR" "br",
               "TPWHR" "sch",
               "TSPR" "scr",
               "TSWH" "kn",
               "TWH" "thw",
               "PWHR" "bl",
               "SPWHR" "cl",
               "TS" "st",
               "SPR" "spr",
               "SWHR" "shr",
               "HR" "l",
               "WH" "wh",
               "TW" "tw",
               "S" "s",
               "SR" "v",
               "TPWR" "dr",
               "H" "h",
               "PR" "pr",
               "TSPWR" "gr",
               "SHR" "sl",
               "SW" "sw",
               "SWH" "y",
               "TSPWH" "gh",
               "R" "r",
               "TPWH" "squ",
               "TWR" "vr",
               "TSR" "str",
               "TWHR" "j",
               "SH" "sh",
               "PH" "m",
               "TSP" "sc",
               "TR" "tr",
               "P" "p",
               "PWH" "qu",
               "TPHR" "fl",
               "TH" "th",
               "WR" "wr",
               "SPWR" "cr",
               "SPH" "sm",
               "TSW" "k",
               "SPHR" "spl",
               "TSPWHR" "gl",
               "TSWHR" "kl",
               "SPW" "c",
               "TSHR" "z",
               "PHR" "pl",
               "SPWH" "ch",
               "TSPW" "g",
               "W" "w",
               "SP" "sp",
               "TSPH" "sn",
               "TPH" "n",
               "TPW" "d",
               "PW" "b"})

(def vowels {"OU" "ou",
             "AU" "au",
             "AOI" "ee",
             "^AO" "oa",
             "^AU" "ua",
             "^AI" "ia",
             "^IU" "ui",
             "IU" "e",
             "AIU" "ea",
             "^OI" "io",
             "^AIU" "ae",
             "AOU" "ei",
             "^U" "ue",
             "U" "u",
             "O" "o",
             "AO" "oo",
             "A" "a",
             "I" "i",
             "AOIU" "y",
             "OIU" "oe",
             "^AOU" "ie",
             "OI" "oi",
             "^" "",
             "^OIU" "eo",
             "AI" "ai"})

(def finals {"FS" "v"
             "LFS" "lv"
             "LRFS" "nv"
             "RFS" "rv"
             "KFS" "sh"
             "LKFS" "lsh"
             "LRKFS" "nsh"
             "RKFS" "rsh"
             "KFS*" "w"
             "LKFS*" "wl"
             "LRKFS*" "wn"
             "RKFS*" "rw"
             "L" "l"
             "LR" "rl"
             "R" "r"
             "P" "p"
             "LP" "lp"
             "LRP" "mp"
             "RP" "rp"
             "PK" "b"
             "LPK" "lb"
             "LRPK" "mb"
             "RPK" "rb"
             "PF" "n"
             "LPF" "ln"
             "LRPF" "nn"
             "RPF" "rn"
             "PKFS" "g"
             "LPKFS" "lg"
             "LRPKFS" "ng"
             "RPKFS" "rg"
             "F" "f"
             "F*" "ff"
             "LF" "lf"
             "LRF" "nf"
             "LRF*" "fn" ;; :garfsmie:
             "RF" "rf"
             "PFT" "y"
             "PFT*" "yy"
             "LPFT" "ly"
             "LPFT*" "nly"
             "RPFT" "ry"
             "RPFT*" "rly"
             "LRPFT" "ny"

             "PKST" "j"
             "LPKST" "lj"
             "LRPKST" "nj"
             "RPKST" "rj"

             "PKF" "d"
             "LPKF" "ld"
             "LRPKF" "nd"
             "RPKF" "rd"
             "KS" "x"
             "KST" "xt"
             "KF" "ch"
             "LKF" "lch"
             "LRKF" "nch"
             "RKF" "rch"
             "K" "k"
             "LK" "lk"
             "LRK" "nk"
             "RK" "rk"
             "S" "s"
             "LS" "ls"
             "LRS" "ns"
             "RS" "rs"
             "PS" "m"
             "LPS" "lm"
             "LRPS" "mn"
             "RPS" "rm"
             ;"P" * "S h"
             ;"PKF" * "S gh"
             ;"PKF" * "TS ght"
             "PFS" "z"
             "LPFS" "lz"
             "LRPFS" "nz"
             "RPFS" "rz"
             "T" "t"
             "LT" "lt"
             "LRT" "nt"
             "RT" "rt"
             "ST" "st"
             "LST" "lst"
             "LRST" "nst"
             "RST" "rst"
             "PT" "pt"
             "KT" "kt"
             "FT" "ft"
             "PKFT" "ky"
             "L*" "ll"
             "R*" "rr"
             "P*" "pp"
             "PK*" "w"
             "LPK*" "bl"
             "LRPK*" "bbl"
             "PKFS*" "gg"
             "LRPFT*" "nny"
             "PKF*" "dd"
             "LPKF*" "ddl"
             "LRPKF*" "rld"
             "KS*" "sk"
             "KST*" "sc"
             "KF*" "tch"
             "K*" "c"
             "LK*" "lc"
             "LRK*" "nc"
             "RK*" "rc"
             "S*" "ss"
             "PS*" "sp"
             ;"P*S*" "tion"
             ;"PKF*S*" "ction"
             ;"PKF*TS*" "nction"
             "PFS*" "zz"
             "T*" "tt"
             "LT*" "ttl"
             "ST*" "th"
             "LST*" "lth"
             "LRST*" "nth"
             "RST*" "rth"
             "KT*" "ct"
             "PKFT*" "cy"})

(defn final
  "Puts dashes before all the keys of m"
  [m] (update-keys m (partial str \-)))

;; Does not include empty entries since javelin doesn't...
(def layout
  {::pre-prefixes {"+" "{^}"
                   "|" "({^}"
                   "|+" "{^}-"
                   "|#+" "{^}_"}
   ::prefixes {"#" "{-|}"}
   ::initials initials
   ::vowels vowels
   ::finals (final finals)
   ::suffixes (final {"E" "e"
                      "Z" "s"
                      "EZ" "es"})})

(defn javelin-dict []
  {:name "Pinchord"
   :maximumOutlineLength 1
   :starters [{:stroke "" :definition "" :mask ""}]
   :letters (->> (reduce (fn [acc [layout entries]]
                           (into acc (mapv (fn [[stroke translation]] {:stroke stroke :data translation :order (priority layout)})
                                           entries)))
                         #{} layout)
                 (sort-by (comp - count :stroke)))})

#_(defn javelin-dict []
    {:name "Pinchord"
     :maximumOutlineLength 1
     :starters [{:stroke "" :definition "" :mask ""}]
     :letters (sort-by (comp - count :stroke)
                       (for [[layout-key entries] layout
                             [stroke translation] entries]
                         {:stroke stroke
                          :data translation
                          :priority (priority layout-key)}))})

(defn generate-javelin-dict! [dict]
  (->> (yaml/generate-string dict)
       (spit "pinchord-javelin-dictionary.yaml")))

(comment
  (generate-javelin-dict! (javelin-dict)))
