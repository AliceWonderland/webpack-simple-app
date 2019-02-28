const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    console.log(mode);
    return webpackMerge(
        {
            mode: mode,
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
        },
        modeConfig(mode)
    );
};


// return {
//     mode: mode,
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//         {
//             test: /\.m?js$/,
//             exclude: /(node_modules|bower_components)/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env']
//                 }
//             }
//         }
//         ]
//     },
//     "plugins": [
//         new HtmlWebpackPlugin(),
//         new webpack.ProgressPlugin()
//     ]
// }