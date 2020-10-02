/**
 * config.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:24:58
 * @version 1.0.0
 */
const path = require("path");

("use strict");
module.exports = {
    dev: {
        contentBase: path.join(__dirname, "dist"),
        index: "index.html",
        compress: true,
        host: "127.0.0.1",
        port: 8081,
        stats: {
            errors: true,
            modules: false,
            colors: true,
        },
        hotOnly: true,
        https: true,
        publicPath: "/",
        headers: {
            Origin: "",
        },
        proxy: {
            "/tts/hairuo/request.ajax": {
                target: "http://localhost:3000", // 接口的域名 10.107.137.51
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                bypass: function (req, res, proxyOptions) {
                    // if (req.headers.origin === '') {
                    console.log("Skipping proxy for browser request.");
                    // return "/index.html";
                    // }
                },
            },
        },
    },
    staticAssertsPath: {
        from: "",
        to: "",
    },
    isSplitCSS: true,
};
