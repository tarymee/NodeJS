/**
 * Node.js模块系统
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个
模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
*/


//创建模块
//1.使用exports暴露时（暴露了一个方法），不需要实例化
  //var hello = require('./hello');
  //hello.world(); 

//2.使用module.exports暴露时(暴露了一个对象)，需要实例化
  var Hello = require('./hello');
  hello = new Hello(); 
  hello.setName('BYVoid'); 
  hello.sayHello(); 


/**
以上实例中，代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默
认后缀为js）。Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，
require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
*/