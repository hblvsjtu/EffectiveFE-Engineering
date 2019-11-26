/**
 * @file server.js
 * @author hblvsjtu (hblvsjtu@163.com)
 * @date    2019-10-06 10:54:51
 * @version 1.0.0
 */

const Koa = require("koa");
const Router = require("koa-router");
const path = require("path");
const body = require("koa-better-body");

const {
  executeMusic,
  uploadMusic,
  playMusic
} = require("./lib/music");

const {
  executeTemplate
} = require("./lib/template");

const {
  executeQuick
} = require("./lib/quick");

const {
  executeTTS,
  uploadMusicTTS,
  playMusicTTS
} = require("./lib/tts");

const app = new Koa();
const home = new Router();
app.use(body({
  textLimit: "2mb",
  formLimit: "2mb",
  uploadDir: path.resolve(__dirname, "../static/upload"),
  keepExtensions: "true" // 文件是否需要扩展名
}));

// 子路由1
home.get("/", async ctx => {
  const html = `
      <ul>
        <li><a href="/music/test/request.ajax">/music/test/request.ajax</a></li>
      </ul>
    `;
  ctx.body = html;
});

// music
const music = new Router();
music.post("/test/request.ajax", executeMusic);
music.post("/test/resource/upload.do", uploadMusic);
music.get("/play", playMusic);

// template
const template = new Router();
template.post("/test/request.ajax", executeTemplate);

// quick
const quick = new Router();
quick.post("/test/request.ajax", executeQuick);

// tts
const tts = new Router();
tts.post("/test/request.ajax", executeTTS);
tts.post("/cc/api/audio/upload", uploadMusicTTS);
tts.get("/play", playMusicTTS);

// 装载所有子路由
const router = new Router();
router.use("/", home.routes(), home.allowedMethods());
router.use("/music", music.routes(), music.allowedMethods());
router.use("/template", template.routes(), template.allowedMethods());
router.use("/quick", quick.routes(), quick.allowedMethods());
router.use("/tts", tts.routes(), tts.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.on("error", (err, ctx) => {
  console.log("server error", err, ctx);
});

app.listen(3000, () => {
  console.log("[demo] route-use-middleware is starting at port 3000");
});
