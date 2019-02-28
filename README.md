# Webpack Mini App Demo
Simple Node.js App with Webpack

npm install --save-dev webpack@4.29.6
npm install --save-dev webpack-cli (must install this if using 4.0+)
npm install -D babel-loader @babel/core @babel/preset-env webpack (https://www.npmjs.com/package/babel-loader)



Debugging with Webpack
"debugthis": "node --inspect --inspect-brk ./src/index.js"
"debugwebpack": "node --inspect --inspect-brk ./node_modules/webpack/bin/webpack.js",
chrome://inspect
Click on file to inspect
Choose Console, try 'process' or 'global'
Use this to debug a node package if you are creating a custom plugin or loader
Cmd + P to get a filebrowser
