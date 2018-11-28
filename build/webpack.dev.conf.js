const merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');

Object.keys(baseWebpackConfig.entry).forEach(function(name){
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig,{

})