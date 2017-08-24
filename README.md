# Tint Assignment
# By Andre Recinto

> I decided to use React to demo how we can componentize the different sections of an item. Also using Redux to demo how to store and fetch data from the given API call which is proxied from our Node.js server.

The actual components are in [**https://foxtint.herokuapp.com/**](https://github.com/andrefox333/tint/tree/master/app/modules/feeds)

- ViewFeed.jsx is the actual page container.
- FeedItem.jsx is the main component foreach item being iterated in the data response and from there, the components and styles are then modularized to Thumbnail, Author, and so on. 

I'm using CSS Modules to keep the styles closely for each component. I'm starting to embrace CSS Modules more and more lately. Coming from SASS, this is such a shift in paradigm. One of the biggest pain points of CSS in general is maintainability and long term sustainability. This becomes more important when a handful of developers are in there creating styles, overwriting styles, or keeping styles that may no longer be needed. With CSS Modules, when I am working with a specific component, I can quickly know where the styles are coming from based on the import statements. I no longer need to dig through a folder of css (where it may be located far away from the component) and really think about where this specific class is. Aye...

As far as file structure goes, I like to keep things in a very modular format,
Within modules, we have a feature called `feeds`.
In feeds, I then have the following files and folders:
 - /tests
 - /components
 - /css
 - actions.js
 - reducer.js
 - types.js

When working on the feature feeds, I can quickly isolate myself within this directory and not worry about cross-contaminating other files and I feel this is more intuitive to locate the files you need.

#### Demo site: [**https://foxtint.herokuapp.com/**](https://foxtint.herokuapp.com/)

Tint Profiles: `helloandrefox` and `catlovers`
