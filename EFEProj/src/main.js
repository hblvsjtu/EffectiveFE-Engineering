/**
 * main.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */
import _ from 'lodash';
<<<<<<< HEAD
import Vue from 'vue';
import List from './components/List.vue';
=======
>>>>>>> 6baa9c42152a5147c3937ac934cedc62cd0cebfd

'use strict';

function component () {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

const vue = new Vue({
  el: '#' + 'root',
  render: h => {
    return <List></List>;
  }
});
console.log('vue = ', vue);
