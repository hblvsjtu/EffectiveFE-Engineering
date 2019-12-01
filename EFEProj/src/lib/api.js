/**
 * @file api.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date 2019-08-06 13:08:18
 * @version 1.0.0
 */
import axios from 'axios';
import EVENTS from './constant';
import { stringify } from 'qs';

let APIURL = '';
let USEID = '';
let OPTID = '';
let TOKEN = '';
let getReqid = '';
let EVENTID = '';
let DEBUG = false;
// 设置
function initEnv ({
  url,
  userid,
  optid,
  eventId,
  token,
  genReqid,
  debug
}) {
  APIURL = url;
  USEID = userid;
  OPTID = optid;
  TOKEN = token;
  getReqid = genReqid;
  EVENTID = eventId;
  DEBUG = debug;
}
async function executeResponse (method, url, body, isMusic) {
  let result;
  let fetchOpt = {
    method,
    url,
    data: setBody(body)
  };

  if (isMusic) {
    body.params = JSON.stringify(body.params);
    fetchOpt = {
      method,
      url,
      data: stringify(body),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
  }

  try {
    const res = (await axios(fetchOpt)).data;
    const {
      data,
      status,
      redirect
    } = res;
    if (redirect) { // 重定向
      result = {
        ERROR: EVENTS.NET_REDIRECT,
        msg: '重定向',
        res
      };
      // throw res;
    } else if (status !== 0 && status !== 200) { // 状态错误
      result = {
        ERROR: EVENTS.NET_STATUSERROR,
        msg: '状态错误',
        res
      };
      // throw res;
    } else if (JSON.stringify(data) === '{}' ||
            (data instanceof Array && data.length === 0) ||
            data === undefined ||
            data === null) {
      result = {
        ERROR: EVENTS.NET_DATANULL,
        msg: '数据为空',
        res
      };
    } else {
      result = data;
    }
  } catch (err) { // 请求错误
    result = {
      ERROR: EVENTS.NET_REQUESTERROR,
      msg: '请求错误',
      res: err
    };
    throw err;
  }
  return result;
}
// 通过参数拼凑body
function setBody (option) {
  const formData = new FormData();
  for (const item in option) {
    if (Object.prototype.hasOwnProperty.call(option, item)) {
      let value = option[item];
      if (Object.prototype.toString.call(value).slice(8, -1) === 'Object') {
        value = JSON.stringify(value);
      }
      formData.append(item, value);
    }
  }
  return formData;
}
// 发送请求
async function request (path, param, isMusic) {
  let result = {};
  const params = {
    path,
    userid: USEID,
    optid: OPTID,
    eventId: EVENTID,
    token: TOKEN,
    reqid: getReqid()
  };
  if (param) {
    params.params = param;
  }
  if (DEBUG) {
    params.debug = DEBUG;
  }
  result = await executeResponse('post', APIURL, params, isMusic);
  return result;
}

module.exports = {
  initEnv,
  request,
  setBody
};
