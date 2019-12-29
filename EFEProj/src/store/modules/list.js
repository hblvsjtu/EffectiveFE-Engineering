/**
 * cart.js
 * @authors hblvsjtu (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  }
};
