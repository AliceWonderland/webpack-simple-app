# Webpack Mini App Demo
Simple Node.js App with Webpack

## Install
* Make sure [Node 8+](https://nodejs.org/en/download/) is installed
* Browse to the directory you'd like to download and install this project into by running the following commands in Terminal:
* ```cd your-local-dir```
* ```git clone https://github.com/AliceWonderland/webpack-simple-app```
* ```cd webpack-simple-app```
* ```npm install```


## Run in Console
* ```node ./dist/bundle.js```

## Run in Browser
* ```npm run dev-watch```
* Browse to http://localhost:8080/

## Builds
* ```npm run dev-build```
* ```npm run prod-build```

## Debugging with Webpack
* "debugthis": "node --inspect --inspect-brk ./src/index.js"
* "debugwebpack": "node --inspect --inspect-brk ./node_modules/webpack/bin/webpack.js",
* Browse to chrome://inspect (in Chrome)
* Click on file to inspect
* Choose Console, try ```process``` or ```global```
* Use this to debug a node package if you are creating a custom plugin or loader
* Cmd + P to get a filebrowser

## Packages Used
* ```npm install --save-dev webpack@4.29.6``` (latest webpack)
* ```npm install --save-dev webpack-cli``` (must install this if using 4.0+)
* ```npm install -D babel-loader @babel/core @babel/preset-env webpack``` (https://www.npmjs.com/package/babel-loader)
* ```npm install  --save-dev webpack-dev-server``` (express web server/sockets)
* ```npm install --save-dev html-webpack-plugin``` (for browser usage)
* ```npm install --save-dev webpack-merge``` (for env builds)

## Create Your Own Project
* ```npm init``` to in your new project folder
* ```git init``` if you'd like to use Git + Github
* Create your own custom Node project from there!

## Sean Larkin Webpack Workshop
https://github.com/TheLarkInn/webpack-workshop-2018