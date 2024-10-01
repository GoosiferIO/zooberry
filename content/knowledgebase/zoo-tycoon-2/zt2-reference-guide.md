---
title: Zoo Tycoon 2 Reference Guide
draft: false
author: ShenTirag
date: 2007-10-13T00:12:00+00:00
---

# Zoo Tycoon 2 Designing Reference Guide

Don't know your BFMs from your BFBs? Do your eyes roll into the back of your head trying to find the files you need? No more! This quick and handy reference guide will help you understand the main file types in ZT2 designing, as well as give you helpful tips for locating your files.

## Common File Types in ZT2 Designing

| File Type | Description |
|-----------|-------------|
| BEH       | This file can be edited in Notepad, and contains behaviour information for animals and guests, allowing the game to give animals and guests their correct responses to thirst, amusement, etc. All animals and any buildings or scenery that guests or animals interact with will have a BEH file. |
| BF and TXTKEYS | Generally these are NOT edited. These files are animation files, containing the data which tells the game what nodes to move to achieve a certian animation. Any animal you make from an existing animal will have a reference to these files in their BFM. |
| BFB       | This is the file that contains the physical appearance or model for Marine Mania animals, as well as other scenery items. These can be opened in a hex editor such as WinHex, but the shape of the model cannot be changed. |
| BFM       | This file can be opened in Notepad, and is used to give animals and guests animations. Generally this will unite the desired model with a set of animations, and it is here that you will have your user made creation using the animations of the animal it came from. |
| BFMAT     | These files are editable in Notepad and are sometimes called "Materials files". They are pretty much always found inside a folder called Materials and contain texture data for the BFB models. |
| DDS       | This is a texture file, containing the "skin" of an animal, plant, object or guest. These can be edited and opened in a variety of graphics programs, most notably DXTBMP, Photoshop and Paint Shop Pro. The latter two need plug ins downloaded and installed to edit DDS files. |
| NIF       | This is the physical model for many animals, objects and other items from the original game, Endangered Species and African Adventures. These can be edited in a hex editor like WinHex, or viewed in preview in Nifskope. Additionally, these model files CAN be edited so that they are different shapes, using an editor such as Nifskope, Blender or another 3D modelling program. |
| TSK       | These files can be edited in Notepad, and are further behaviour sets for guests and animals. As with the BEH files, many objects or buildings that guests or animals interact with may have a TSK file, and all animals will have a TSK file. |
| XML       | These files are editable in Notepad, and viewable in Internet Explorer. This is where all the coding lies! All animals, guests, scenery, objects, foliage, hacks etc will have one or more XML files. They do a variety of things from make names of objects and animals viewable in game to determining how far the in game camera can zoom out. XML files also "tie together" many other aspects of an animal or an object (such as skin to model and behaviour) so that they're all connected to one another. |
| Z2F       | These files are the packages that all the other files are delivered in. WinRar, WinZip or any other zip program will allow you to open and create them. Inside the Z2Fs are all the in game data, and you will make your own Z2Fs that the game will read so that custom content can be added! |


## Understanding How ZT2 Files Are Organised

In General:

ZT2 organises all of the files found above into folders inside Z2Fs, which once you understand makes finding the files you need very simple! Generally an animal or object will have all or some of these folders:

| Folder Name | Description |
|-------------|-------------|
| AI          | Contains folders where the BEH and TSK files which control behaviour of guests and animals are found. |
| Entities    | This is where all the physical data for an animal or object can be found...skins, models, and the XML files that link them all together. It is organised further into Units (containing things that move, ie: guests and animals), Objects (for scenery, shelters, foliage, fences etc). |
| Lang        | Language files are found here. The XML files inside this folder allow zoopedias, in game names and descriptions to be seen in the required language. |
| Shared      | Some DDS file skins are found here. |
| UI          | The XML files here connect objects to zoopedias. |

All versions of the game contain similar layouts to the way discussed here. Differences between expansion packs will be shown below. Z2Fs with filenames further on in the alphabet will overwrite those earlier on, so if you are making a hack you will need to start your filename with a `Z_something.z2f`.

## Finding the Files You Need

If you have expansion packs installed, you may want to find the most up to date files for an animal or object that may originate from another expansion. It is highly suggested that you look through the xNumbered.z2f files working backwards to find the most recent files for your animal. For example the most recent komodo dragon files with all three expansion packs installed are found in `x120_100.z2f`. It is very important to use the most recent XML files as possible, and it is strongly advised not to use any XML files from the original vanilla game files unless you cannot find them in any later Z2Fs.

> For the most part, instead of one large .Z2F containing all the above folders, each folder is it's own Z2F. When looking for files from the original game, you will therefore need to look in `ai.z2f`, `entities.z2f`, `lang.z2f` and so on and so forth.

| Expansion Pack | Z2F File |
|----------------|----------|
| Original ZT2   | entities.z2f, ai.z2f, lang.z2f, shared.z2f, ui.z2f |
| Endangered Species | x100_000.z2f |
| African Adventures | x110_000.z2f |
| Marine Mania | x200_000.z2f |
| Extinct Animals | x210_000.z2f |