---
title: "Guest Limit Hack"
has_author: true
author: 
- Penguino
game: Zoo Tycoon 2
exp_req:
file_size: 4 KB
file_date: 2007-05-13
orig_rel_date: 2007-05-13
date: 2023-08-05T15:41:09-07:00
orig_rel_at: 
- ZooMania
draft: false
thumbnail: 
license: Unknown
alt_text: 
languages:
- English
summary: "Increases the guest limit."

---

Contains three different files for different guest limits and a readme file. ----  Compatibility: ZT2 + All Expansions ---- Short Description:  Have you ever gotten tired of only a certain amount of guests in your zoo? Here is the resource to change that. 

Instructions: Copy the desired Z2F file into the folder where Zoo Tycoon 2 is installed.

Comes in 3 different 'strengths' - the number indicates the new guest limit. Unlike the default guest limit, this limit is not affected by zoo fame.

Developer notes (warning: contains math):

The `MaxGuestsBase` and `MaxGuestsPerStar` values in the guestMgr.xml control the guest limit. MaxGuestsBase is the guest limit for a half-star zoo; `MaxGuestsPerStar` is the increase to the guest limit for each star (half stars count half) *in addition* to that half star. In other words:

`L = b + p(s - .5)`

where `L = guest limit`, `b = MaxGuestsBase`, `p = MaxGuestsPerStar`, `s = number of stars of fame in the zoo`.

The default settings are `MaxGuestsBase = 30` and `MaxGuestsPerStar = 20`, yielding a limit of 120 guests for a five-star zoo.