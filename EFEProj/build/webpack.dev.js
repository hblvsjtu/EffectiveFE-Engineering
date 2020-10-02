/**
 * webpack.dev.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:24:58
 * @version 1.0.0
 */

const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { dev } = require("../config/index");

module.exports = merge(common, {
    devtool: "cheap-module-eval-source-map",
    devServer: dev,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
    ],
});
