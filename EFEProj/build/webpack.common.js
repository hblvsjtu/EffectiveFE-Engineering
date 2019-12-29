/**
 * webpack.common.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('../config/index');

const plugins = [
  new VueLoaderPlugin(),
  new webpack.BannerPlugin('版权所有，翻版必究'),
  new CleanWebpackPlugin('dist'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: 'body'
  })
];

const optimization = {
  runtimeChunk: {
    name: entrypoint => `runtime~${entrypoint.name}`
  }
};

if (config.staticAssertsPath.from) {
  plugins.push(new CopyWebpackPlugin([
    {
      from: config.staticAssertsPath.from,
      to: config.staticAssertsPath.to
    }
  ])
  );
}

if (config.isSplitCSS) {
  plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].css', //类似出口文件
  }));
}

if (config.isSplitChunks) {
  optimization.splitChunks = config.isSplitChunks
}

function dir(myPath) {
  if (myPath) {
    return path.resolve(__dirname, '../', myPath);
  } else {
    return path.resolve(__dirname, '../');
  }
}

module.exports = {
  entry: {
    EFEProj: config.isUseRouter ? './src/app.js' : './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: dir('dist'),
    // library: 'VideoCommonMusicSDK',
    // libraryTarget: 'umd',
    // libraryExport: 'default'
  },
  resolve: { // 给vue模板的提供编译支持
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': dir('src')
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter'),
          fix: true
        }
      },
      {
        test: /test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: [
          dir('src'),
          dir('test'),
          dir('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.css$/,
        use: config.isSplitCSS ? [MiniCssExtractPlugin.loader, 'css-loader'] : 'css-loader'
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: config.isSplitCSS ? [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ] : [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins,
  optimization,
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
