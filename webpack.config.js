const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
// const presetConfig = require('./build-utils/presets/loadPresets.js'); //Use presets with webpack-bundle-analyzer, compression-webpack-plugin

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
                        test: /\.css$/,
                        use: [
                            "style-loader",
                            "css-loader"
                        ]
                    },
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
                        loader: [
                            {
                                loader: 'url-loader',
                                options:{
                                    limit: 5000
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin()
            ],
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                port: 8080
            }
        },
        modeConfig(mode)
        // presetConfig({ mode, presets })
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