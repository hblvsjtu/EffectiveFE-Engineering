/**
 * main.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */
import _ from 'lodash';
import Vue from 'vue';
import store from './store';
import List from './components/List.vue';

'use strict';

function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());

// 现在，应用已经启动了！
const vue = new Vue({
  el: '#' + 'root',
  store,
  render: h => {
    return <List></List>;
  }
});

console.log('vue = ', vue);
