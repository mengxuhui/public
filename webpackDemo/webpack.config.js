/*
 * @@Description: webpack配置文件
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-08 15:24:03
 * @LastEditTime: 2020-09-09 11:33:29
 * @LastEditors: i.mengxh@gmail.com
 */

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js[x]?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('菜鸟教程 webpack 实例'),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "cheap-module-eval-source-map" // 2. 这个配置必须
};
