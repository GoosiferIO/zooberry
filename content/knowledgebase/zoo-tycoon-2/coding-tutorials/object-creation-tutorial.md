---
title: Object Creation Tutorial
draft: false
date: 2007-07-10
author: Penguinman
---

# Object Creation Tutorial

This guide is for objects such as trash cans, benches, tables etc. This guide can help, but is not meant for plants.

## Step 1: The entities folder

### Part 1: Gathering the files

To begin, go to `C:Program Files/Microsoft Games/Zoo Tycoon 2`. If the object you would like to make is based off an Endangered Species object, then you must use the `x100_000` file. If it is not, then use the `entities` file. 

Open the file using WinRar or WinZip. Then in either one go to `entities/objects/scenery`. 

> This guide is only for scenery objects which include benches, trash cans, donation boxes, tables, arches, fountains, and viewing canopies. I have not tested it on other scenery such as bouncy rides, lamps, etc, but you can always try. 

Now in that scenery folder find the object you are basing it off of. You have to try and figure out which one is yours. When it ends in `_df`, it's a normal object, when it end in `_jt`, its jungle theme, and `_st` is safari theme. Other endings mean various things that you can try to figure out. 

Once you have found the correct folder, copy all files into your files. Copy them into `entities/objects/scenery/codename`. Then go back to the scenery folder in the game files. Go into `ai` and in there find the file which corresponds with your object. It should have the same name as the folder containing the files. Copy the xml file and paste it into the corresponding location in your files, `entities/objects/scenery/ai`. Now you have all the files you need for now, so close the extracting program.

### Part 2: Changing the Skins

Now select a codename for your project. Make the codename all lowercase letters, but make sure it corresponds to what you want. For instance if I want to make a green bench, make the codename `benchgreen`. Rename the folder called `codename` to your `codename`. 

Now go into that folder (which is where you put some files) and rename the icon and .nif file by replaceing the old codename with yours. For instance, the icon will be named something like `benchgreen_icon`, and the .nif just `benchgreen`. Then you can recolor the icon however you want. Now open the .nif with a hex editor. Then search for .dds. Anytime you find .dds it is referring to a skin covering the object. 

What you can do is, in the game files, go to `entities/objects/shared` and find all the .dds files that the .nif refers to. Then copy them and paste them into the shared folder. Now in the .nif change the name of the .dds file to whatever you want, but know that you CANNOT change the number of letters in the name. Then change the .dds file's name to the same thing so it corresponds to what you want. Now recolor all the .dds files however you want!

### Part 3: Changing the ai

Now go to the `ai` folder. There should be a file in it that you placed earlier. Open it with notepad and then go to **edit > replace**. From there replace the old codename (for the green bench, `bench_df`). So for my green bench I would replace `bench_df` with `benchgreen`. Then save and close the file. Then rename it to your codename.

## Step 2: The Lang Folder

Go to `lang/1033` and rename the file to your codename. From there open it and say replace codename with yours. So I would do: replace codename with `benchgreen`. Then say replace `-name-` with your name. For instance I would do replace `-name-` with `Green Bench`. This should be whatever you want to show up as the name when you select it. Now scroll through the lang file and replace anything surrounded by parenthesis to whatever it says. Make sure to delete the parenthesis.

## Step 3: The ui Folder:

Go to `ui/zoopedia/entries` and rename the file to your codename. Open the file and replace codename with yours. I would do replace codename with benchgreen. That's it! What an easy step.

Congratulations! You have finished coding. Now using some sort of zip program zip the main folders together into a .z2f file and test it in the game.