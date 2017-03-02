/**
 * Node.js 路由
我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由需要根据这些数据来执行相应的代码。
因此，我们需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数。这一功能应当属于路由还是服务
器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
我们需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递。但是
为了解析这些数据，我们需要额外的Node.JS模块，它们分别是url和querystring模块。
 */

var url=require('url');
var string="http://localhost:8888/start?foo=bar&hello=world#id";

// 1.使用url的parse方法，可以把这个地址解析成一个对象。
//console.log(url.parse(string));
/* 输出的结果如下：
Url {
  protocol: 'http:',  //协议
  slashes: true,
  auth: null,
  host: 'localhost:8888',  //主机
  port: '8888',  //端口
  hostname: 'localhost',  //主机名
  hash: '#id',  //hash值
  search: '?foo=bar&hello=world',  //带?查询字符串
  query: 'foo=bar&hello=world',   //查询字符串
  pathname: '/start',   //路径名称
  href: 'http://localhost:8888/start?foo=bar&hello=world#id'  //全路径
}
*/

//console.log(url.parse(string,true)); //设置第二个参数会把query变成一个对象
/* 输出的结果如下：
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8888',
  port: '8888',
  hostname: 'localhost',
  hash: '#id',
  search: '?foo=bar&hello=world',
  query: { foo: 'bar', hello: 'world' },
  pathname: '/start',
  path: '/start?foo=bar&hello=world',
  href: 'http://localhost:8888/start?foo=bar&hello=world#id' 
}
*/
//var query=url.parse(string,true).query;
//console.log(query.foo);


// 2.使用url的format方法，可以把对象转换成url地址。
/*
var obj={
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8888',
  port: '8888',
  hostname: 'localhost',
  hash: '#id',
  search: '?foo=bar&hello=world',
  query: { foo: 'bar', hello: 'world' },
  pathname: '/start',
  path: '/start?foo=bar&hello=world',
  href: 'http://localhost:8888/start?foo=bar&hello=world#id' 
};
console.log(url.format(obj));
*/


// 3. 使用url的resolve方法替换域名后面第一个“/”后的内容。
console.log(url.resolve(string,'course/list'));
//  http://localhost:8888/course/list



