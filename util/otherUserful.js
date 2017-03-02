// 1. util.isArray(object)
//如果给定的参数 "object" 是一个数组返回true，否则返回false。
/*
var util = require('util');

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false
*/


//2. util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
/*
var util = require('util');

util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false
*/


//3.util.isDate(object)
//如果给定的参数 "object" 是一个日期返回true，否则返回false。
/*
var util = require('util');

util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false
util.isError(object)
*/


//4.如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
var util = require('util');

util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false

// API:https://nodejs.org/api/util.html
