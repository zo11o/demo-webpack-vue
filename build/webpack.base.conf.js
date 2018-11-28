const path = require('path')
const config = require('../config')
const webpack = require('webpack')
var utils = require('./utils')
// const vueLoaderConfig = require('./vue-loader.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    //指定入口
    entry: './src/main.js',
    //指定出口
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js'
    },

    resolve: {
        extensions: [ ' ' , '.js', '.vue', '.json']  //导入的时候不用写拓展名
    },

    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: vueLoaderConfig
            // },

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },

    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    //webpack 打公共包 extensions
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
}