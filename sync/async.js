
/*
 * 文件名：answer.js说明异步调用思想
 * setTimeout（）是个异步函数，这样就实现了异步调用，即代码不会被阻塞，而是继续执行下一段代码
 */

function Person () {
	this.think=function (callback){   //think异步方法里面传了一个callback函数
		setTimeout(function(){
			console.log("I'm thinking");callback();
		},5000);
	}
	this.answer=function(){
		console.log("I'm thinking another question");
	}
}
var person=new Person();    //new 创建Person对象
person.think(function(){
	console.log("think 5 minutes,I got the question");
})
person.answer();
