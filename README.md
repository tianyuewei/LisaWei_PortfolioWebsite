Your Project
============

This project template uses Eleventy to generate static HTML pages.

💡 Before starting to use this template, you should have completed the Eleventy tutorial.

### ← README.md

That's this file, which includes details about this project template.

### ← /src/

This is the directory where you will do all of your work, including your HTML and Less.

### ← /src/less/

This is where you will write the styles for your project. 

The most important file here is **`main.less`** since this is the file that is referenced in our `_layouts/base.html`. You can add your own styles to the end of `main.less` or, if you want to group related styles together, create another file named something like `less/components.less` and then add the line `@import "components";` to `main.less`.

There are three additional files that `main.less` already has `@import` statments for:
  - **`reset.less`**: this contains the [CSS reset](https://meyerweb.com/eric/tools/css/reset/) we've used previously. Note that `main.less` has an `@import` line for this but it's commented out. Uncomment it if you want to use the reset.
  - **`variables.less`**: this is where you can define variables specifying colors, fonts, sizes, etc. that you can then refer to in the rules you add to `main.less`
  - **`utilities.less`**: define classes that you can apply to your elements to add bits of one-off styling here 

### ← /src/js/main.js

As you add interactivity to your pages you’ll eventually need a way to run javascript code in response to user input. The **main.js** file is loaded at the bottom of the `_layout/base.html` template and any code you add to it will be run each time the page loads.

### Adding media

To add images to your project, you must use the Glitch editor in the browser and drag your files into the `assets` container. You can then copy the URL for the asset and use it in your HTML or Less. 👍🏻

### Project 4

Remember to review all the requirements for [Project 4](https://fewd.samizdat.co/2021/project/4/). While this template includes some of the necessary bits (like the homepage and 404), it does not create everything you need for a complete Project 4.
