/**
 * config.js
 * @authors Your Name (you@example.org)
 * @date    2019-11-24 15:24:58
 * @version 1.0.0
 */
const path = require('path');
const PORT = process.env.PORT && Number(process.env.PORT);

'use strict';
module.exports = {
  dev: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    compress: true,
    host: '127.0.0.1',
    port: PORT || 8081,
    stats: {
      errors: true,
      modules: false,
      colors: true
    },
    hotOnly: true,
    https: true,
    publicPath: '/',
    headers: {
      Origin: ''
    },
    proxy: {
      '/tts/hairuo/request.ajax': {
        target: 'http://localhost:3000', // 接口的域名 10.107.137.51
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        bypass: function (req, res, proxyOptions) {
          // if (req.headers.origin === '') {
          console.log('Skipping proxy for browser request.');
          // return "/index.html";
          // }
        }
      }
    }
  },
  staticAssertsPath: {
    from: '',
    to: ''
  },
  isShowBundleAnalyzer: false, // 是否加入打包的依赖分析
  isSplitCSS: true, // 是否分离CSS样式
  isSplitChunks: {
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
  } // 是否分块
};
