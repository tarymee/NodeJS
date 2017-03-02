/*querystring常用于查询字符串的处理*/

var querystring=require('querystring')

// 1. querystring.stringify()用于把一个对象转换成字符串，即序列化。
/*
var obj={
	name:'scoot',
	course:['jade','node'],
	from:'jx'
};
//console.log(querystring.stringify(obj)); 
//输出：'name=scoot&course=jade&course=node&from=jx'

//第二个参数是用指定的连接符将参数连接起来，默认是&。
//console.log(querystring.stringify(obj,'*')) //用*连接
//输出：'name=scoot*course=jade*course=node*from=jx'

//第三个参数是用指定符号替换key和value之间的=号，默认是=。
console.log(querystring.stringify(obj,'*',':')) //用:替换
//输出：'name:scoot*course:jade*course:node*from:jx' 
*/


/*
// 2.querystring.parse() 用于将一个字符串转化成对象，即反序列化。
console.log(querystring.parse('name=scoot&course=jade&course=node&from=jx'))
// { name: 'scoot', course: [ 'jade', 'node' ], from: 'jx' }

//第二个参数是指定用什么分割符来分割字符串，默认是&
//console.log(querystring.parse('name=scoot*course=jade*course=node*from=jx','*')) //用*分割
// { name: 'scoot', course: [ 'jade', 'node' ], from: 'jx' }

//第三个参数是指定用什么分隔符来分割键值对
//console.log(querystring.parse('name:scoot*course:jade*course:node*from:jx','*',':'))
*/



// 3.querystring.escape()   将字符串转义
console.log(querystring.escape('哈哈<>'))
// '%E5%93%88%E5%93%88%3C%3E'
 

// 4.querystring.unescape() // 用于反转义
console.log( querystring.unescape('%E5%93%88%E5%93%88%3C%3E'))
// '哈哈<>'