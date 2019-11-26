/**
 * @file template.js
 * @author hblvsjtu (hblvsjtu@163.com)
 * @date    2019-10-06 10:54:51
 * @version 1.0.0
 */

const send = require("koa-send"); // 传输文件必须，如播放音乐
const MUSICPLAYURL = "http://server.com:3000/tts/play";
const musicList = require("../../mock/music");
const {
  getVideoMaterial,
  getVideoMaterialList,
  getTemplateLabel,
  getList
} = require("../../mock/tts");

function setCORS (ctx) {
  ctx.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT"
  });
}

function getUrl (id) {
  const base = {
    "MV9UMTAwNDk3MjY4MTY=": MUSICPLAYURL + "?url=うどんを食べに行く (Udon O Tabe Ni Iku).aac",
    "MV9UMTAwNDk3NDU0NzU=": MUSICPLAYURL + "?url=FALLEN.aac",
    "MV9UMTAwMzg5ODEzNTQ=": MUSICPLAYURL + "?url=未登理.aac",
    "MV9UMTAwNDk1NTU2NTI=": MUSICPLAYURL + "?url=悄悄.aac",
    "MV9UMTAwNDk3MjY2NjQ=": MUSICPLAYURL + "?url=Rodéo.aac",
    "MV9UMTAwNDY3MjQ5Mjc=": MUSICPLAYURL + "?url=躺着.aac",
    "MV9UMTAwNDc3MzA5Mzg=": MUSICPLAYURL + "?url=妈妈叫我回家吃饭.aac",
    "MV9UMTAwMzg4NDM1MzE=": MUSICPLAYURL + "?url=幸福可以很简单.aac",
    "MV9UMTAwNDA1NTAxMzI=": MUSICPLAYURL + "?url=一个人的快乐.aac"
  };
  return base[id];
}
// delay
function delay () {
  for (i = 0; i < 100000000; i++) {
    const j = Math.random() * Math.random() * i / 100;
  }
}

// 上传音乐
async function uploadMusicTTS (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log(ctx.query);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  const body = ctx.request.fields;
  if (!body.filedata) {
    ctx.body = {
      error: "二进制流文件缺失",
      data: ctx.query
    };
  } else {
    setCORS(ctx); // 设置跨域
    const musicUploadUrl = MUSICPLAYURL + "?url=" +
        ctx.request.fields.filedata[0].path.split("/").pop();
    ctx.body = {
      status: 200,
      data: musicUploadUrl,
      errors: null,
      myData: body
    };
  }
}

// 播放音乐
async function playMusicTTS (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log(ctx.query);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  const name = ctx.query.url;
  const path = `static/upload/${name}`;
  console.log(name, path);
  ctx.attachment(path);
  await send(ctx, "static/upload/" + name);
}

async function executeTTS (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log("params = ", ctx.query);
  console.log("body = ", ctx.request.fields);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  const body = ctx.request.fields;
  // if (!body || !body.path
  //     || !body.userid
  //     || !body.token
  //     || !body.reqid
  //     || !body.eventId) {
  //     ctx.body = {
  //         error: '参数缺失',
  //         data: ctx.query
  //     };
  // }
  // if (!body || !body.path
  //     || !body.userid
  //     || !body.token
  //     || !body.reqid) {
  //     ctx.body = {
  //         error: '参数缺失',
  //         data: ctx.query
  //     };
  // }
  {
    setCORS(ctx); // 设置跨域
    switch (body.path) {
    }
  }
}

module.exports = {
  uploadMusicTTS,
  playMusicTTS,
  executeTTS
};
