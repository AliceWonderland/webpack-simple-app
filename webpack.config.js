const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = (env) => {
    console.log(env);
    return {
        mode: env.mode,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            ]
        },
        "plugins": [
            new HtmlWebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    }
};