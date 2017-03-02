/**
 * 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这
 * 个模块，然后就可以直接访问 hello.js 中 exports 对象的成员函数了。
 */

/*使用exports暴露
exports.world = function() {
  console.log('Hello World');
}
*/


/**
 * 有时候我们只是想把一个对象封装到模块中，格式如下：
module.exports = function() {
  // ...
}
*/
function Hello() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 
// 使用module.exports 暴露
module.exports = Hello;
//在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。