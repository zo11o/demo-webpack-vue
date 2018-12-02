const merge = require("webpack-merge");
const path =  require('path');
let baseWebpackConfig = require("./webpack.base.conf");
const webpack = require("webpack");
const config = require("../config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.npm_lifecycle_event !== "build";
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 热加载
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
    module: {},
    // cheap-module-eval-source-map 是打包速度最快的
    devtool: "#cheap-module-eval-source-map",

    plugins: [
        //导出html文档
        new HtmlWebpackPlugin({
            favicon: path.resolve("favicon.ico"),
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            filename: "index.html",
            template: "index.html" //是要打包的html模版路径和文件名称。
        }),
        new webpack.DefinePlugin({
            "process.env": config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载替换
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? "[name].css" : "css/[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "css/[id].[hash].css"
        })
    ],
    //配置webpack开发服务功能
  devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, '../dist'),
    //服务器得IP地址，可以使用IP也可以使用localhost
    host: config.dev.siteConfig.host,
    //服务器端压缩是否开启
    compress: true,
    //配置服务端口号
    port: config.dev.siteConfig.port
  }
});
