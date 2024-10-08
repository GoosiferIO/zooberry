---
title: How to Install Mods
author: Goosifer
draft: false
date: 2024-10-01T00:00:00+00:00
---

# How to Install Mods

# Important

## Turn off the game

Though it shouldn't cause any issues if we were to install a mod while your game is running, it makes sense to have it shut down so that any changes show up on a re-launch.

## Unzip your files

All files on ZooBerry are in `.zip` format and will require access to a zip utility. Below are resources that can get you started.

1. [Zipping/Unzipping files with the default Windows zip utility](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc)
2. Zipping/Unzipping files with 7-Zip
    1. [Download 7-Zip](https://www.7-zip.org/download.html)
    2. [How to use 7-Zip](https://7ziphelp.com/how-to-use-7-zip)


# Zoo Tycoon 1

Depending on the version of Zoo Tycoon 1 you own, the mod install directory might be different. The type of file you want to install might be important as well. Try these out and see which works for you.


## Installing ZT1 Mods

When you unzip your zip file, you will find a `.ztd` file. This is the Zoo Tycoon 1 mod file format which contains all of the cool artsy and codey stuff that makes your game more fun. Drop it into one of the following directories.

First, go to the ZT1 root folder.

`C:\Program Files (x86)\Microsoft Games\Zoo Tycoon\`

If you have a `dlupdate` folder, drop your `.ztd` file there:

`C:\Program Files (x86)\Microsoft Games\Zoo Tycoon\dlupdate`

If you do not have a `dlupdate` folder, drop your `.ztd` file into the `Updates` folder instead:

`C:\Program Files (x86)\Microsoft Games\Zoo Tycoon\Updates`

The install directory changes depending on the version of the game you own but these instructions should be consistent.

## Lang Files

Importantly, Zoo Tycoon 1 mods will often add new strings that show up on the UI, things like guest thoughts, zoopedia entries, and other additions that require the inclusion of a `.dll` file in your installation process. This `.dll` file serves as a serialized data container with most of the strings in the game. Community nomenclature has dubbed these files 'lang files' because they are always prefixed by the 'lang' identifier. Also because they are language files.

If your mod requires a lang file, simply download the referenced version of the lang in the mod instruction blurb, extract the `.dll` file from the zip file (if there is one), and drop it into the root Zoo Tycoon game directory:

`C:\Program Files (x86)\Microsoft Games\Zoo Tycoon\`

> Note: Not all ZT1 mods make use of lang files. 

# Questions?

ZooBerry doesn't have a discussion community of its own. Please visit the [links](/knowledgebase/zooberry/other-websites) page for other Zoo Tycoon websites that can help with installation problems or shoot me an email if you would like to report a bug.