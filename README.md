# Webpack Mini App Demo
Simple Node.js App with Webpack

## Install
* ```git clone https://github.com/AliceWonderland/webpack-simple-app```
* ```npm install```

## Run in Console
* ```node ./dist/bundle.js```

## Run in Browser
* ```npm run dev```
* Browse to http://localhost:8080/


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
* ```npm install --save-dev html-webpack-plugin```
```npm install webpack-merge --save-dev```

## Sean Larkin Webpack Workshop
https://github.com/TheLarkInn/webpack-workshop-2018