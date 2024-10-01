---
title: Fence Tutorial
draft: false
date: 2008-01-21
author: ShenTirag
---

# Fence Tutorial

## Step One: Gathering the Files

For a fence, you will need entities, lang and ui folders, just like many other ZT2 projects. Download the attatched file at the bottom of this tutorial to get the folder template for your fence.

First, we shall gather the files we need for the entities folder. You will need to go to your Zoo Tycoon 2 directory (which by default is `C:\Program Files\Microsoft Games\Zoo Tycoon 2`). There, we need to decide what expansion pack the fence you want to base your project on is from. According to the list below, open the required file in WinRAR, WinZip or any other zip program:

- Original ZT2 (No Expansions): `entities.z2f`
- Endangered Species (and original ZT2 if you have expansions): `x100_000.z2f`
- African Adventures: `x110_000.z2f`
- Marine Mania: `x200_000.z2f`
- Extinct Animals: `x210_000.z2f`

You will need to navigate through to the fences by clicking **entities > objects > fences**. Now we shall retrieve the AI files. Open the ai folder, and look for your base. For example, I want to make a fence from the wooden slat fence, I will need to look for the files named `woodslat`. Below you can see that I have highlighted the files I need to extract:

![Fence Tutorial 1](images/FenceTutorial1.webp)

As you can see, I have selected three files for the ai, a `normal` XML, a `_broken` XML and a `gate` XML. These three files have to work together to make your fence. Extract these files and place them in your template in the **entities > objects > fences > ai** folder.

Now, return to the open .z2f. You will now need to go back one and find the folders for your base fence, so for my example I need to find these two folders below:

![Fence Tutorial 2](images/FenceTutorial2.webp)

As you can see, you have to extract a normal folder and a gate folder for each fence. (Windowed fences can be made independantly from the normal fence, but usually use the same gate files.) Copy the contents of these folders into the codename `andcodenamegate` folders respectively.

Now you have all the files to start making your fence - let's get coding!

## Step Two: Coding the AI Files

First, rename the XML files that you put in your ai folder. I would keep it simple, following the `codename.xml`, `codenamegate.xml` and `codename_broken.xml` conventions. Once that is done, open up the `codename.xml` in Notepad.

The basic idea is, as usual, to click **Edit > Replace**, and replace the base fence's codename with your own! Just be careful, as many of the base fences have silly codenames with tags on the end identifying their theme (such as `_df`, `_st`, `_jt`) which means you may have to run the Replace for both the original codename with and without these tags on the end just to make sure.

Make sure that you change this area:

```xml
<UIHelpInfo name="" ****="" long="" help="" ids="entityname:codename"/>
```

This section here contains a few essentials, make sure that `zoopedia_codename` is in lowercase, and that the `s_Broken="codename"` is present:

```xml
<BFAIEntityDataShared s_uisort="gb" f_FenceStrength="2" s_Zoopedia="zoopedia:zoopedia_codename:entry" s_Broken="codename_broken" b_SeeThrough="true"/>
```

And make sure this part links to your gate:

```xml
<BFBinder required="1">
<instance>
<ZTFence gate="codenamegate"/>
</instance>
</BFBinder>
```

Save and close, and open up the `codename_broken.xml`. You need to follow the same proce=edure as before, replacing the base codename with your codename, but watch out for these areas where your codename should not have "`_broken`" in it:

```xml
<UIAspect>
<default image="entities\objects\fences\bamboo_st\bamboo_icon.dds"/>
</UIAspect>
<UIHelpInfo name="" ****="" long="" help="" ids="entityname:codename"/>
```

And this should also link to `codenamegate`:

```xml
<BFBinder required="1">
<instance>
<ZTFence gate="codenamegate"/>
</instance>
</BFBinder>
```

Now save and close. Finally, open the `codenamegate.xml`. Again, same proceedure applies, replacing the base with your codename. Pay attention to making sure that the `s_Broken="codename_broken"` is there, as well as not changing the the icon link where it says:

```xml
<UIToggleButton template="fence">
<UIAspect>
<default image="entities\objects\fences\staffgate_df\staffgate_icon.dds"/>
</UIAspect>
</UIToggleButton>
```

This ensures it uses the default `staffgate` icon. Now all that is done, save and close. Well done, you've done half the coding!

## Step Three: Coding the Model and Skinning

Now open yourcodename folder, and you should see a large collection of files (either NIFs or BFBs, depending on which expansion you are using). Either way, you need to rename all these files, replacing the `codename_df` (or whatever tag it uses) with your codename. This is easiest achieved with a mass file renaming tool such as ReNamer. Once that is done, you can skin your project in whatever is your preferred manner. If the skins for your fence are not present in that folder, sometimes you need to open up the NIF or Materials files (whichever you have) to find the names of the skins that the fence has. In that case, you may have to hunt around in the `entities.z2f` or whichever .z2f you took your base files from in the Shared folder to find the skins. If you find your skins in a Shared folder, you may need to make your own Shared folder in the template.

Once you have skinned your project and renamed the DDS files, you can start coding your Materials files or NIFs. Simply open them in a hex editor/Notepad for the Materials files, Search for the original codename's skin, and replace that name with your new skin's name, and save. This is quite time consuming as you may have many NIFs or Materials files. If you have BFBs, make sure that your Materials files are renamed and that those name changes are reflected inside the BFB.

Once done, you can now move on to the gate folder, and repeat again. The only difference is that you have a BFM to code, which you do by opening in Notepad and replacing the all the codenames. Well done, now all the coding should be complete!

## Step Four: Coding the Lang Folder

Whoops! Not quite! You need to code the lang folder! Luckily I already included the XML for you in the **lang > 1033** folder! Make sure you rename it to your codename! Simply open it and **Edit > Replace** codename, making sure to use lowercase here:

```xml
<LOC_STRING _locID="zoopedia_codename:entry">Codename</LOC_STRING>
<LOC_STRING _locID="zoopedia_codename:text">
```

Make sure you add your own text as well!

And now finally:

## Step Five: Coding the UI Folder

Go to your ui folder and navigate to **zoopedia > entries**, and rename the codename.xml that is there. Open it and also replace the codename, making sure that you use lowercase letters. Save and close. Now, you really are all done this time! 