Nextbone Wires
==============

An opinionated example application built with Nextbone. 

## Overview

This is based on [Marionette Wires](https://github.com/thejameskyle/marionette-wires)

#### Features

* Code splitting of colors routes (open network tab of dev tools and go to colors section)
* Remember last selected book
* Live webserver for development (auto reload on source change)
* Animated page transitions (determined dynamically)
* Animated book selection change
* Use of VirtualCollection to implement colors view
* Pagination implemented as a web component
* Dialog to prevent exiting color edit form with unsaved changes
 
 Check the [live version](https://blikblum.github.io/nextbone-wires/dist/)
 
 Scaffold a new project with similar setup using [generator-nextbone](https://github.com/blikblum/generator-nextbone)

## Quick start

[Clone](http://git-scm.com/docs/git-clone) or [download](https://github.com/blikblum/marionette.routing/archive/master.zip) this repo.

```sh
git clone https://github.com/blikblum/nextbone-wires.git && cd nextbone-wires
```

Make sure [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) are
[installed](http://nodejs.org/download/). Installation of [Yarn](https://yarnpkg.com/) is recommended but not required 

Install
```sh
yarn
//or
npm install
```

Develop
```sh
npm run dev
```

Build
```sh
npm run prod
```

Once that's done, open up dist/index.html in a browser using a static server.

## Guide

As a general rule, be sure to read through all of the source code yourself and make sure you understand what is happening.

|    Directories | Purpose         |
| -------------: | :-------------- |
|   [api](./api) | Mock api routes |
| [dist](./dist) | Built assets    |
|   [src](./src) | Source files    |
| [test](./test) | Test files      |

===

&copy; 2019 Luiz Américo Pereira Câmara
