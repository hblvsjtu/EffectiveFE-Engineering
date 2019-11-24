/**
 * @file template.js
 * @author lvhongbin (lvhongbin@baidu.com)
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
    case "cc-platform/GET/VideoBxService/saveFastSynVideo": // 保存视频
      ctx.body = {
        data: true,
        status: 0,
        errors: []
      };
      break;
    case "cc-platform/GET/VideoBxService/fastSubmit": // 提交合成请求
      ctx.body = {
        data: {
          idList: [
            10531,
            10532,
            10533,
            10534
          ]
        },
        status: 0,
        errors: []
      };
      break;
    case "cc-platform/GET/VideoBxService/queryTask": // 轮询快速合成状态
      ctx.body = {
        data: {
          taskList: [
            {
              taskId: 10519,
              status: parseInt(Math.random() * 100, 10) % 5, // 0:为提交合成请求，1:提交合成请求失败，2:合成中，3:合成成功，4:合成失败',
              videoId: 0,
              videoUrl: "",
              errors: ""
            }
          ]
        },
        status: 0,
        errors: []
      };
      break;
    }
  }
}

module.exports = {
  executeQuick
};
