const utils = require('./utils');
const config = require('../config');
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoader({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    })
}