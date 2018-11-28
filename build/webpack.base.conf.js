const path = require('path')

let config = {
    build:{
        assetsRoot: path.resolve(__dirname, '../manage')
    }
}

module.exports = {
    //指定入口
    entry:  './src/main.js',
    //指定出口
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js'
    }
}