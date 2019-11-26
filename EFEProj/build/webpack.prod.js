/**
 * webpack.prod.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('../config/index');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [
  new UglifyJSPlugin({
    sourceMap: true,
    parallel: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

if (config.isShowBundleAnalyzer) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
  mode: 'production',
  plugins
});
