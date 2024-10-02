---
title: How to Make Filters for Animals and Objects
draft: false
date: 2009-09-26
author: ShenTirag
---

# How to Make Filters for Animals and Objects

There are two parts to making filters, first creating the filter xml, then adding the filter to animals and objects.

Penguinman added this important note:

> The only quick thing to add to Shen's fantastic explanation is that for a Product tag, you want your codename to begin with a capital letter, and for a Theme tag the codename needs to be all lowercase.
> For example:
> `s_Product="Packname"`
> and
> `s_Theme="themename"`

## Making the Filter XML

Okay so a filter is determined by an xml file in `Lang/1033`. It contents should look like this:

```xml
<ZT2Strings>
<LOC_STRING _locID="FilterText:format">
<font name="arial" size="10" shadowx="-1" shadowy="1">
  <b>%text%</b> 
  </font>
  </LOC_STRING>
  <LOC_STRING
_locID="FilterText:s_Product_Packname">Pack/Expansion Name Content</LOC_STRING> 
</ZT2Strings>
```

If you are making an expansion or pack, you would use the above text (because you are making a "product"). Selecting this in the filter would make all content for this expansion/pack appear in the selection menu. You will need to replace the `Packname`, and make sure that the text you want to appear when your filter is selected replaces `Pack/Expansion Name Content`.

If you are making a specific theme (for a set of scenery items, for example), you would use the following code:

```xml
<ZT2Strings>
<LOC_STRING _locID="FilterText:format">
<font name="arial" size="10" shadowx="-1" shadowy="1">
  <b>%text%</b> 
  </font>
  </LOC_STRING>
<LOC_STRING _locID="FilterText:s_Theme_themename">Name of Theme</LOC_STRING> 
  <LOC_STRING _locID="categories:theme_themename">Name of Theme</LOC_STRING> 
</ZT2Strings>
```

## Adding Animals and Objects To A Filter

To add objects and animals into these themes, you would add the following codes into their `entities/.../ai` xml files in the `BFAIEntityDataShared` line of code (where you find the zoopedia link code):

| Filter Type | Description |
| --- | --- |
| s_Product="Packname" | Adds the animal or object into a particular expansion/pack filter |
| s_Theme="themename" | Adds the object into a particular theme filter |