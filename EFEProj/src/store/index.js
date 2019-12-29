/**
 * index.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

import Vue from 'vue';
import Vuex from 'vuex';
import list from './modules/list';
import bar from './modules/bar';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    bar,
    list
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
