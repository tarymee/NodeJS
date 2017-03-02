/**
 * test.js文件，用来测试exports的功能
 */

/*测试 exports的用法*/
exports.name="我是被暴露的";
exports.happy=function () {
	console.log("方法");
}
var yourName="张三";
function love(){
	console.log("我爱你");
}
/*只有被暴露出去的函数或变量才能被外部的js调用*/
