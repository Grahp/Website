---
permalink: serial-theory-rule-application
redirect_from:
  - quartz/serial-rule-application
  - quartz/serial-theory-rule-application
title: Serial Theory Rule Application
---
[[Quartz]]

Decoupling 

If rules need to apply serially, that's inherently complex. It also happens to be inherently slow, but that's a different problem.

## Combination

Now, you're left with the **outputs** of all rules, and in a **second**, completely independent step, you transform these outputs into a final translation.

