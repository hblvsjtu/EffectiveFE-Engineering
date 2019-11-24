/**
 * webpack.common.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:25:54
 * @version 1.0.0
 */

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config/index');
const plugins = [
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
  plugins.push(new ExtractTextPlugin('styles.css'));
}

if (config.isSplitChunks) {
  optimization.splitChunks = {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  };
}

function dir (myPath) {
  if (myPath) {
    return path.resolve(__dirname, '../', myPath);
  } else {
    return path.resolve(__dirname, '../');
  }
}

module.exports = {
  entry: {
    EFEProj: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: dir('dist')
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: config.isSplitCSS ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }) : ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: config.isSplitCSS ? ExtractTextPlugin.extract(['css-loader', 'less-loader']) : [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
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
