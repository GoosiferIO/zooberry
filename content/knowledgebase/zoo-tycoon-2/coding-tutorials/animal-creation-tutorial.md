---
title: Animal Creation Tutorial
draft: false
date: 2007-08-26
author: Octavio17493
---

# Animal Creation Tutorial

Hi future designer! I’m Belgian Shepard also knowed as Octavio17493 and ill teach u how to code with this tutorial, hope you can make your animals with my help, so lets go with basic things first.

## 1 – Basic things

Ok, before coding ill say u what do u need:

1. **Choose a codename** for your animal. This codename mustn’t have spaces, `-`, `?` or rare characters, only letters. Usually designers use as a codename the species of the animal as the first word and the subspecies as the second word, for example, _HeronBlue_. That’s the code of my blue heron, so you can use letters in UPPER CASE to separate words.

2. **Patience** - There are 50% of possibilities that your first animal won’t work, sadly, but u have all the time of the world.

3. **Extract all the folders and the `.dl` file** from the zip and put it in a folder.

4. **Any problem?** You can PM me.

5. **You will need the following software** with the respective links:  
   WinRAR: <http://www.rarlab.com/rar/wrar350.exe>  
   NifSkope: <http://sourceforge.net/project/showfiles.p...ckage_id=170735>  
   NotePad: Comes with Windows.  
   dxtBmp: <http://www.mnwright.btinternet.co.uk/programs/dxtbmp.htm>  
   And a good image editing software like Photoshop, CorelDRAW, or Gimp.

So let’s go and start!

## 2 – Ai folder

1. **Open the AI folder**: Go to `tasks > animals` and now open the rar file `animals`. Find the two files of the animal that are you going to use as a base for the new one. Extract them and delete the rar file. Now, select all and right click, go to properties, and see the little white box that says “Read Only” at the bottom of the properties. If it has a tick, quit it; if it doesn’t, don’t do anything. If you keep the tick, the file won’t save.

    a. Now, right click on one of both files and click on "Open with…" and choose Notepad. Now the file's opened, go to the toolbar, click on "Edit > Replace" and put in the first box the codename of the original animal (in my case, _FlamingoGreater_) and in the second box, the codename of your animal (in my case, _HeronBlue_), and click "Replace All". Now jump, kiss your dog, say hi! To that neighbour that you hate because you made your first coding! Now, go to the toolbar, click "File > Save" (not "Save As") and close the file. Now, change the name of the file that you edited with the codename of your animal.

    b. Now go to the second archive and code it in the same form as step 1-a. Save and change the name of the file to your codename.

2. Now, go to the folder `guests` and you can see two files. Change the name of both where it says codename and replace it with your animal’s codename. Now, open one.

    a. Open one of the files, and in this case, replace the word `codename` with your animal codename, save and do the same with the other. Folder `ai` is finished!

## 3 – Lang folder

1. Now, go to the `lang` folder and you can see two folders, one called `1033` and one called `3082`. In what language is your game? If it's in English, choose folder `1033`. If it's in Spanish, choose folder `3082`. Choose the folder of your correct language and delete the other. Open the folder that you keep, now replace the word `codename` in the file. Open it with Notepad like all the other files and now go to "Edit > Replace" and replace the following things:

    a. **codename** – with your animal codename (in my case, _HeronBlue_)

    b. **animalname** – with the real name of your animal (in my case, _Great Blue Heron_)

    c. **zoopediacode** – now select a codename for your zoopedia, without uppercase and spaces (in my case, _blueheron_)

    d. **giftname** – keep it. I am going to explain it later.

    e. Search for **conservation status** and go to `statuscode` and replace it with one of the status codes (list of status codes at the bottom of the tutorial). Replace the status of your animal where it says `STATUS`.

    f. **biomecode** – with the code of your biome. See the codes at the bottom of the tutorial.

    g. **locationcode** – Are you going to use an existing location? Or are you going to make a new one? If you are going to use an older location, go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/` and open the `z2f` archive `ui` with WinRAR. Go to `ui/icon_maplocations` and choose one. Copy the name and place it in the `locationcode`. To make a new location, invent a code, and REMEMBER IT!

    h. Now search for **Fun Fact** and put some fun facts about your animal.

    i. **FAME** – replace it with the fame of your animal. Use the fame of the old animal. Later I’ll explain how to change it.

    j. **ZOOPEDIA** – Replace it with the zoopedia information for your animal. To separate info into paragraphs, use the code `<p/>`. Zoopedia is done!

## 4 - UI folder

1. Open the `ui` folder, go to `zoopedia/entries`, and change the name by replacing the word `codename` with your animal codename. Open the file and replace where it says `zoopediacode` with your zoopediacode that you put in the `lang` folder (in my case, _blueheron_). Save and exit.

2. Open the folder `infopan`, but you won’t see any files. Why? Go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/ui`, open it with WinRAR. If the animal you're using as a base is from an expansion, you have to search all the files related to that animal in one of the folders that start with `x`. Go to `ui/infopan` and search for `icon_original animal codename_gift`. Extract it to your project folder and exit the `z2f`. Now change the codename of that icon to your animal’s codename. Open it with dxtbmp and edit it. Save it as a `.bmp`, then open the `.bmp` with dxtbmp and save it as a `.dds` texture.

3. Keep the folder `icon_maplocations` as it is for the moment.

## 5 - Entities folder

1. Open the folder `entities`, then go to the folder `sound`. Now go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/entities`, open it with WinRAR, and go to `entities/sound`. Find the sound of the base animal (in my case, _FlamingoGreater_M_) and extract it to your folder. Exit the `z2f`. Now open the file and go to this part—HANDS! Yes, you will need them, not the automatic replace all. Now, replace by hand all the places where the original animal codename appears between `"`.

2. Open the folder `objects`.

    a. Open the folder `items/ai` and replace in the names of both files the word `codename` with your animal codename. Open one, code it with the replace form, and do the same with the other. Save and exit.

    b. Now, go to `items/gifts` and you won’t see anything. Guess what! Go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/entities/entities/objects/items` and search for the `.dds` or `.dds` files, the `.nif` or `.nif` files of the gift for your animal. Extract them to your folder. Now, edit with dxtbmp the gifts, save, and code them. Now, open one of the `.nif` files with NifSkope or WinHex and search for `basecodename_Gift` or `basecodename_Gift_Adult`, and code them with the name of the `.dds`. In my case, I’ll put in the `.nif` file "HeronBlue_Gift" in one and "HeronBlue_Gift_Adult" in the other. Click enter—if the `.dds` applies to the model, you did it correctly.

    c. If your animal lays eggs, you have to go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/entities/objects/eggs`. Search for the folder `basecodename_Egg` and the folder `ai`. Code the last folder. Then enter the folder `ai`, search for the `basecodename_Egg` file, and delete the others. Open it and code it, save, and exit. Now go to the folder that you coded (for example, _HeronBlue_Egg_), edit, save, and code the `.dds` files. For this, the name must have the same number of letters as the old `.dds` file before the `_`. In my case, _FlamingoGreater_ has 15 letters, and _HeronBlue_ has 9, so I’ll put six more characters. I always put underscores to make up the difference. If your codename has more letters, just delete some letters. Now open the `.nif` and do the same thing you did in the `.nif` of the gift. Now go to the `.bfm` file, and in the first line you can see `basecodename/basecodename_Egg.nif`. Replace both codenames, but not the others! Now, go to the bottom of that large list of moves. At the bottom of the list, you can see `<Graph name="basecodename_Egg" version="1">`. Replace the codename, save, and exit. Eggs finished!

    d. Open the `ai` folder and you can see a rar file called `ai`. Extract the seven files of your base animal and delete the rar file. Code the names of the files, then select all, right click, and go to properties. See the little white box that says “Read Only” at the bottom of the properties. If it has a tick, quit it. If it doesn’t, don’t do anything. If you keep the tick, the file won’t save. Now, open the file called `codename` and code it with "Replace All". Now, search for `zoopedia`. It will say: `s_Zoopedia="zoopedia:zoopedia_zoopediacode:entry"`. Change `zoopediacode` with the code of your zoopedia (mine is _blueheron_). Now, search for `Rarity` and you will see a number next to it. This changes the zoo fame needed to adopt the animal. Set it according to the following:

- 20: 1 star
- 40: 2 stars
- 60: 3 stars
- 80: 4 stars
- 100: 5 stars

Now, search for `Endangerment`, and at the right, between `" "`, put the status code (see the list of codes at the bottom of the tutorial). After that, search for `BiomeData` and where it says `<BFGBiomeData location="locationcode">`, put your location code there. Now, where it says "sensitivity" and the list of all biomes, put the sensitivity for each biome for your animal. I’ll put 10 for wetlands, 8 for tropical rainforest, and -10 for desert for my blue heron. Now, put the `primary="true"` code next to the main biome of your animal (I’ll put it next to wetlands). Search for `scale` to change the size of your animal. Now save and close this. If your animal has different skins or nifs for male and female, some of these codes will have to be put into the respective files (`basecodename_Adult_M` and `basecodename_Adult_F`).

    e. Now go to the `basecodename_Adult_F` file and only code it using the "Replace All" form. Save and exit. Do the same with the `basecodename_Adult_M` file. Now, open the `basecodename_Adult` file, and code it the old way. Go to the bottom and search for the `.dds` links, and replace them with your `.dds` name links. The name must have the same number of letters as the old `.dds` name before the `_`. For example, _FlamingoGreater_ has 15 characters, and _HeronBlue_ has 9, so I’ll add six more characters. I always put underscores. This only applies to the main skin, not the dirty, sick_dirty, or sick skins. Now, open the `basecodename_Young` file, code it, and adjust the `.dds`. Add the necessary symbols. You may need to add or remove characters. Now, code the `basecodename_Young_M` and `basecodename_Young_F` files, save, and exit. This large and difficult folder is done!

    f. Now go to the `codename` folder, code it if you didn’t do it before, and enter. Code the `codename_emote` file using the "Replace All" form. There’s nothing more there, so go to `C:/Program Files/Microsoft Games/Zoo Tycoon 2/entities/entities/units/animals/basecodename` and extract everything there. Keep only the `.nif` files, `.dds` files, `.bfm` files, and `.xml` files if they are there. Now, edit the `.dds` files and code the names (remember the character number rule for the adult and young main skin!). Open the adult and young `.nif` files with NifSkope and search for `basecodename_Adult_animalsex`, and put the name of the main `.dds` there. Save it. Do this with all the `.nif` files except for the `Animal_emote` and `codename_emote` nifs. Now, open one of the `.bfm` files and code only the first two basecodenames at the top of the first line. You will see a list of moves—don’t change anything there. At the bottom of the list, where it says `<Graph name="basecodename_Young_F" version="1">`, change the codename and save. Now, go back and code the `codename_favdict` file. Your animal is almost complete! (To make the icon, go to the bottom of the tutorial for instructions.)

## 6 - How to put it in game

Now go to the folder called `Animal Name` and rename it with a name (I recommend using the name of your animal). Now, enter the folder and open the `.z2f` file. You will see a folder called “Delete this folder”—LOL! Don’t delete it yet. Put the folders `location`, `ui`, `ai`, `lang`, and `entities` there, and now delete the funny folder. Now, go to the `.dl` file and open it with Word or Notepad. Put your name, page, animal, etc. in the respective places. Now rename the folder that contains the `.z2f` and `.dl` files with the same name. I’ll call mine _Great Blue Heron_. Now put them in the `ZT2 Downloads` folder and test it in the game! Hope this works! Good luck!!!

## CONGRATULATIONS!!!!!!!!!!!

Your animal is done! I hope this helped you!

---

## Important things:

### 7 - Making a location and Location folder

To make a new location, edit an existing one from `C:/Program Files/Microsoft Games/Zoo Tycoon 2/ui/icon_maplocations`. Edit it with dxtbmp, save it, and rename it with your `locationcodename`. Now, put it in `ui/icon_maplocations`. Now, go to the folder `locations` and rename the file `initiallocs_locationcodename`. Then, go into the folder and follow the instructions.

### 8 – Making icons

Open the icon with dxtbmp and on the right click on the arrow that goes to a folder and save that mystery file. Edit the icon, save it, open the edited icon with dxtbmp, and on the right, click on the arrow that goes out from a folder and load the mystery file (this is the alpha channel). Now your icon has transparency. Now, go to the toolbar, click "File > Save As…", and select `.dds` texture in the drop menu. Choose DXT1 (Just DXT1, not DXT1 with no alpha).

---

## 9 - Some other things:

**Scale**: In your animal's main `.xml` file, search for `scale` (not `icon3dscale`) and change the number.

**Enrichments**: Search in your main `.xml` file for `s_`, and you will see enrichment names. Change them, and the animal will use different objects, shelters, etc.

**Food**: In your main `.xml` file, search for `ZTPlacementData` and look for the different food types. Change them for your animal:

### ZT2 food types:
- Ambivore
- BambooEater
- Carnivore
- Crustacivore
- Folivore
- Frugivore
- Graminivore
- Granivore
- HoneyEater
- Insectivore
- Piscivore

### MM2 food types:
- Cancrivorous
- Fucivore
- JellyfishEater
- MarineCarnivore
- MarinePiscivore
- Planktivore
- SquidEater

### Natural food types (food that the animals find while walking on land):
- Browser
- Grazer
- TreeBrowser
- TreeTrunkBrowser

**Space requirement**: In your main `.xml` file, search for `f_RequiredInitialSpace` and change the number to the space that only one animal of that species needs. Then, change the number next to `f_RequiredAdditionalSpace` for the space that the animal needs when you place another animal in the exhibit. For example, if an animal has an initial space of 50 and 10 for additional, and you place only one animal, you will need an exhibit of at least 50 squares. For
