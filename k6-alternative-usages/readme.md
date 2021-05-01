## System-level Test
* Importing modules https://k6.io/docs/using-k6/modules/
* Use Typescript

## Prerequisites
* yarn
* node


## Use the node modules

PS!! k6 is not NodeJS, nor is it a browser:
* Packages that rely on APIs provided by NodeJS, for instance the os and fs modules, will not work in k6. 
* The same goes for browser-specific APIs like the window object.

2 main choices:
* Mimic the top-level application
* Make an OS-abstraction level in the application

## Getting started
k6 lacks the node resolution algorithm. Selected Parcel after reading this: https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9

### Add Typescript and Parcel
* `yarn init`
* Install Parcel bundler `yarn global add parcel-bundler`
* Add dependencies`yarn add -D typescript @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript`
* Add babel config `.babelrc`
