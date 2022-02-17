/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Version:
 * @Date: 2019-06-27 11:56:43
 * @LastEditors: etongfu
 * @LastEditTime: 2019-07-30 09:54:16
 * @Description: webpack plugins
 * @youWant: add you want info here
 * /////////////////////////////////
 */
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
/**
 * @author: etongfu
 * @description: GZIP plugin
 * @returns:  {*}
 */
module.exports.compressionPlugin = Object.freeze({
  name: 'compression',
  use: true,
  plugin: new CompressionPlugin({
    test: /\.js$|\.html$|.\css/, //匹配文件名
    threshold: 10240, //对超过10k的数据压缩
    deleteOriginalAssets: false //不删除源文件
  })
})
/**
 * @author: etongfu
 * @description: Dll plugin if
 * @returns:  {*}
 * DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。
 * DllReferencePlugin:DLLPlugin中打包后比如会生成 vendor.dll.js文件和vendor-manifest.json文件，
 * vendor.dll.js文件包含所有的第三方库文件，vendor-manifest.json文件会包含所有库代码的一个索引，
 * 当在使用webpack.config.js文件打包DllReferencePlugin插件的时候，
 * 会使用该DllReferencePlugin插件读取vendor-manifest.json文件，
 * 看看是否有该第三方库。vendor-manifest.json文件就是有一个第三方库的一个映射而已
 */
module.exports.dllPlugins = Object.freeze({
  name: 'dll',
  use: false,
  plugin: new webpack.DllReferencePlugin({
    context: process.cwd(),
    manifest: require('../public/vendor/vendor-manifest.json')
  })
})
