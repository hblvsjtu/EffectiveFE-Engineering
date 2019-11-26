/**
 * @file music.js
 * @author hblvsjtu (hblvsjtu@163.com)
 * @date    2019-10-06 10:54:51
 * @version 1.0.0
 */

const musicList = require("../../mock/music");
const send = require("koa-send");
const MUSICPLAYURL = "http://server.com:3000/music/play";

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

async function executeMusic (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log(ctx.query);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  if (!ctx.query || !ctx.query.path ||
        !ctx.query.userid ||
        !ctx.query.token ||
        !ctx.query.reqid ||
        !ctx.query.eventId) {
    ctx.body = {
      error: "参数缺失",
      data: ctx.query
    };
  } else {
    setCORS(ctx); // 设置跨域
    switch (ctx.query.path) {
    }
  }
}

async function uploadMusic (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log(ctx.query);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  if (!ctx.query || !ctx.query.userid) {
    ctx.body = {
      error: "参数缺失",
      data: ctx.query
    };
  } else {
    setCORS(ctx); // 设置跨域
    const musicUploadUrl = MUSICPLAYURL + "?url=" +
        ctx.request.fields.upfile0[0].path.split("/").pop();
    ctx.body = {
      status: 200,
      data: [
        {
          url: musicUploadUrl
        }
      ],
      error: null,
      myData: ctx.request.fields
    };
  }
}

async function playMusic (ctx) {
  console.log("\n\r------------- " + new Date().toLocaleString() + " -------------");
  console.log(ctx.query);
  console.log("------------- " + new Date().toLocaleString() + " -------------\n\r");
  const name = ctx.query.url;
  const path = `static/upload/${name}`;
  ctx.attachment(path);
  await send(ctx, "static/upload/" + name);
}

function delay () {
  for (i = 0; i < 100000000; i++) {
    const j = Math.random() * Math.random() * i / 100;
  }
}

module.exports = {
  executeMusic,
  uploadMusic,
  playMusic
};
