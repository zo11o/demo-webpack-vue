const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');
//PurifyCSSPlugin该插件不能够过滤掉vue文件内部未用到的style
//可以过滤掉引用的样式文件中未用到的样式
// const PurifyCSSPlugin = require('p');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
//解决css抽离后js和css压缩的问题
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
        plugins: [
            new cleanWebpackPlugin(['dist/*'], {
                root: path.resolve(__dirname, '../')
            }),
            //导出html文档
            new HtmlWebpackPlugin({
                minify: {
                    //是对html文件进行压缩
                    removeComments: true, //移除HTML中的注释 (生产环境使用)
                    collapseWhitespace: true, //删除空白符与换行符 (生产环境使用)
                    removeAttributeQuotes: true //removeAttrubuteQuotes是去掉属性的双引号 (生产环境使用)。
                },
                favicon: path.resolve('favicon.ico'),
                hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
                filename: 'index.html',
                template: 'index.html' //是要打包的html模版路径和文件名称。
            }),
        ],
        //这个配置是用来处理优化配置的，它将会覆盖webpack默认的js压缩（其他测试中），
        //所以这里要使用UglifyJsPlugin()重新压缩一下js，optimizeCss({})压缩抽离出来的css
        optimization: {
            minimize: true,
            minimizer: [new UglifyJsPlugin(), new optimizeCss()],
            splitChunks: {
                chunks: 'async',
                // 大于30KB才单独分离成chunk
                minSize: 30000,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: true,
                cacheGroups: {
                    default: {
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        chunks: 'all'
                    },
                }
            }
        }

    }

)