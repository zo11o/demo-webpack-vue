const merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack')
const config = require('../config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.npm_lifecycle_event !== 'build';

// 热加载
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
    module: {

    },
    // cheap-module-eval-source-map 是打包速度最快的
    devtool: '#cheap-module-eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : 'css/[id].[hash].css'
          })
    ]
})