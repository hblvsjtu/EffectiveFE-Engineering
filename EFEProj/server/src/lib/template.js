/**
 * @file template.js
 * @author lvhongbin (lvhongbin@baidu.com)
 * @date    2019-10-06 10:54:51
 * @version 1.0.0
 */

const {
  templateStyleResp,
  templateStyleListResp,
  defaultSmartData,
  uploadImage,
  imageCopyRight,
  musicBaseList,
  defaultSmartData2
} = require("../../mock/template");

function setCORS (ctx) {
  ctx.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT"
  });
}

async function executeTemplate (ctx) {
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
    case "cc-platform/GET/VideoBxService/getTemplateLables": // 模板tab列表请求参数中的path
      ctx.body = templateStyleResp;
      break;
    case "cc-platform/GET/VideoBxService/getTemplates": // 模板列表请求参数中的path
      ctx.body = templateStyleListResp[0];
      break;
    case "cc-platform/GET/VideoBxService/getAudioList": // 音乐库列表请求参数中的path
      ctx.body = musicBaseList;
      break;
    case "cc-platform/GET/VideoBxService/uploadVideoMaterial": // 上传素材请求参数中的path
      ctx.body = {
        data: 10033,
        status: 0,
        errors: []
      };
      break;
    case "cc-platform/GET/VideoBxService/secondUploadVideo": // 二次编辑合成请求path
      ctx.body = {
        data: 10033,
        status: 0,
        errors: []
      };
      break;
    case "cc-platform/GET/VideoBxService/getVideoMaterial": // 获取二次编辑数据的path
      ctx.body = defaultSmartData2;
      break;
    case "cc-platform/GET/VideoBxService/listTaskRecord": // 获取tip消息列表
      ctx.body = {
        data: [
          {
            name: "123",
            status: "FINISHED",
            createTime: "2019-10-21 00:00:00"
          },
          {
            name: "123",
            status: "PROCESSING",
            createTime: "2019-10-21 00:00:00"
          }
        ],
        status: 0,
        errors: []
      };
      break;
    case "cc-platform/GET/VideoBxService/getVideoMaterial": // 图片上传
      ctx.body = uploadImage;
      break;
    case "cc-platform/GET/VideoBxService/getVideoMaterial": // 版权图数据
      ctx.body = imageCopyRight;
      break;
    }
  }
}

module.exports = {
  executeTemplate
};
