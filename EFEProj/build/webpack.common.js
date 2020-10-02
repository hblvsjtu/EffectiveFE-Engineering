/**
 * webpack.common.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require("../config/index");
const plugins = [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        inject: "body",
    }),
];

if (config.staticAssertsPath.from) {
    plugins.push(
        new CopyWebpackPlugin([
            {
                from: config.staticAssertsPath.from,
                to: config.staticAssertsPath.to,
            },
        ])
    );
}

if (config.isSplitCSS) {
    plugins.push(new ExtractTextPlugin("styles.css"));
}

function dir(myPath) {
    if (myPath) {
        return path.resolve(__dirname, "../", myPath);
    } else {
        return path.resolve(__dirname, "../");
    }
}

module.exports = {
    entry: {
        EFEProj: "./src/main.js",
    },
    output: {
        filename: "[name].[hash].js",
        path: dir("dist"),
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: require("eslint-friendly-formatter"),
                    fix: true,
                },
            },
            {
                test: /test\.js$/,
                use: "mocha-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: config.isSplitCSS
                    ? ExtractTextPlugin.extract({
                          fallback: "style-loader",
                          use: "css-loader",
                      })
                    : ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: config.isSplitCSS
                    ? ExtractTextPlugin.extract(["css-loader", "less-loader"])
                    : [
                          {
                              loader: "style-loader", // creates style nodes from JS strings
                          },
                          {
                              loader: "css-loader", // translates CSS into CommonJS
                          },
                          {
                              loader: "less-loader", // compiles Less to CSS
                          },
                      ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins,
};
