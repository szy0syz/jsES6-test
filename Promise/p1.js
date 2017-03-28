'use strict';

// immediate 是一个将同步转换为异步执行的库
var immediate = require('immediate');

// INTERNAL 就是一个空函数，类似于一些代码库中的noop
function INTERNAL() {}

function isFunction(func) {
  return typeof func === 'function';
}
function isObject(obj) {
  return typeof obj === 'object';
}
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 三种状体：Pending、Fulfilled、Rejected
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

// 导出这个构造函数
module.exports = Promise;

// 构造函数
function Promise(resolver) {
  // Promise的resolver参数必须是一个函数
  if (!isFunction(resolver)) {
    throw new TypeError('resolver must be a function');
  }
  // 初始化实例的状态为Pending
  this.state = PENDING;
  // void 0 --> undefined,当 state 是 FULFILLED 时存储返回值，当 state 是 REJECTED 时存储错误。
  this.value = void 0;
  // Promise 内部的回调序列
  this.queue = [];
  if (resolver !== INTERNAL) {
    safelyResolveThen(this, resolver);
  }
}