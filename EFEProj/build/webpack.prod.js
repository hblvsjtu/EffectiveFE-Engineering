/**
 * webpack.prod.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const isShowBundleAnalyzer = false; // 是否加入打包的依赖分析

const plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
    }),
];

if (isShowBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js$/,
                chunkFilter: (chunk) => chunk.name !== "vendor",
                parallel: true,
                sourceMap: true,
                cache: true,
            }),
        ],
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vender: {
                    name: "vender",
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    minChunks: 1,
                },
                common: {
                    name: "common",
                    priority: 0,
                    minSize: 0,
                    minChunks: 2,
                },
            },
        },
    },
});
