const path = require('path');

module.exports = {
    //正式环境
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'), //正式环境页面入口
        assetsRoot: path.resolve(__dirname, '../dist'), //正式环境打包目录
        productionSourceMap: false,
        assetsSubDirectory: 'static',
    },
    //开发环境
    dev: {
        env: require('./dev.env'),
        assetsSubDirectory: 'static',
        cssSourceMap: false,
        //开发环境配置端口
        siteConfig: {
            publicPath: 'http://127.0.0.1:8801/',
            host: '127.0.0.1',
            port: 8801
        }
    }
}