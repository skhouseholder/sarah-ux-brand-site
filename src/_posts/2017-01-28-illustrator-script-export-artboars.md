---
layout: post
date: 2017-01-28
title: 'Illustrator Script: Export Artboards @2x'
description: 
categories: design 
tags: 
  - illustrator
  - artboards
comments: true
---

<div class="row">
  <div class="col s12 m6">
    <p>Exporting .ai artboards at dual resolution and renaming the subsequent files can be a big pain, so I recently scoured the internet for a script to do it for me. Nothing I found quite worked, so I modified and refactored one to meet my needs.</p>
  </div>
  <div class="col s12 m6">
    <img src="{{site.baseurl}}/assets/images/illustrator-script-post.png" alt="Illustrator Script">
  </div>
</div>

### What it does

The script exports all artboards to the directory of your choice at 100% and 200% scaling. It also names them in the form [filename]-[artboard name].png and [filename]-[artboard name]@2x.png.

It will also ignore locked layers so background or guide layers won’t get in your way every time you want to export something.

### Example output

File name: dashboard icons.ai
Artboard names: create, refresh, send
Exported images:

* dashboard-icons-create.png
* dashboard-icons-create\*@\*2x.png
* dashboard-icons-refresh.png
* dashboard-icons-refresh@2x.png
* dashboard-icons-send.png
* dashboard-icons-send@2x.png

### How to install

1. Download the script here
2. Put the file in Illustrator’s scripts directory: Adobe Illustrator/Presets/Scripts
3. Restart Illustrator

### How to use

1. Open the .ai file you wish to export
2. Make sure the layers you wish to export are unlocked
3. Execute via File > Scripts

### How to configure (optional)

If you want specific syntax in your filenames or a hardcoded export directory, open the file in a text editor and review the comments. I’ve created several places where you can easily configure this script to fit your needs like so:

<img src="{{site.baseurl}}/assets/images/script-instructions-example.png" alt="Script instructions">

### Special thanks

I modified this script from a version by [Hot Apps Factory](https://www.google.com)which exports and names compatibly with Android apps as well as iOS. That script is itself an improvement on Herculano Campos’ script.




