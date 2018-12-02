const path = require('path')
const config = require('../config')
// const webpack = require('webpack')
var utils = require('./utils')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.npm_lifecycle_event !== 'build';
// console.log(devMode);

function resolve(dir) {
    return path.join(__dirname, '..', dir) //__dirname 当前目录
}

module.exports = {
    //指定入口
    entry: '@/main.js',
    //指定出口
    output: {
        path: config.build.assetsRoot,
        filename: 'js/[name].js', //这里的name告诉我们的是进去得是什么名字出来的就是什么名字
        // chunkFilename: '[name].chunk.js'
    },

    resolve: {
        extensions: [' ', '.js', '.vue', '.json'], //导入的时候不用写拓展名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src') //全局配置省略写方法
        }
    },

    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loaders: {
                        css: [
                            'vue-style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader'
                        ],
                        less: [
                            'vue-style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'less-loader'
                        ],
                        scss: [
                            'vue-style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'fast-sass-loader'
                        ],
                        sass: [
                            'vue-style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'fast-sass-loader'
                        ],
                        styl: [
                            'vue-style-loader',
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'stylus-loader'
                        ]
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'fast-sass-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
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
        // vue-loader在15之后需要在plugins中引入
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : 'css/[id].[hash].css'
        })
    ],

    // webpack 打公共包 extensions
    // optimization: {
    //     runtimeChunk: {
    //         name: "manifest"
    //     },
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: "vendor",
    //                 chunks: "all"
    //             }
    //         }
    //     }
    // },
}