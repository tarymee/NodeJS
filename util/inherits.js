/***util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 
过于精简的不足。*/

// util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
//JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的
//语言级别特性，而是通过原型复制来实现的。

var util = require('util');

//基类
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}
//原型里增加方法
Base.prototype.showName = function() {
	console.log(this.name);
};

//子类
function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);   //让Sub继承Base

var objBase = new Base();   //实例化一个Base类
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();  //实例化一个Sub类
objSub.showName();
//objSub.sayHello();    无法输出，因为只能继承原型里的属性
console.log(objSub);

/*  输出结果
base
Hello base
Base { name: 'base', base: 1991, sayHello: [Function] }
sub
Sub { name: 'sub' }
*/

/**
注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base属性和sayHello函数都没有
被 Sub 继承。同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。
*/

