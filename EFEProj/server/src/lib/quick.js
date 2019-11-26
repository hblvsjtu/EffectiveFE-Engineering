/**
 * @file template.js
 * @author hblvsjtu (hblvsjtu@163.com)
 * @date    2019-10-06 10:54:51
 * @version 1.0.0
 */

const {
  defaultSmartData
} = require("../../mock/quick");

function setCORS (ctx) {
  ctx.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT"
  });
}

async function executeQuick (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log("params = ", ctx.query);
  console.log("body = ", ctx.request.fields);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  const body = ctx.request.fields;
  if (!body || !body.path ||
        !body.userid ||
        !body.token ||
        !body.reqid ||
        !body.optid) {
    ctx.body = {
      error: "参数缺失",
      data: ctx.query
    };
  } else {
    setCORS(ctx); // 设置跨域
    switch (body.path) {
    }
  }
}

module.exports = {
  executeQuick
};
