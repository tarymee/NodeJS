/*
Node.js GET/POST请求
在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交。
表单提交到服务器一般都使用GET/POST请求。
本章节我们将为大家介绍 Node.js GET/POST请求。
获取GET请求内容
由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面
的内容作为GET请求的参数。
node.js中url模块中的parse函数提供了这个功能。
*/

var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // console.log(url.parse(req.url,true)); 将url解析成一个对象
    // util.inspect()  将对象转换成字符串
    // res.end(util.inspect(url.parse(req.url,true)));
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站URL：" + params.url);
    res.end();
}).listen(3000);
console.log('http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com');

/**
网站名：菜鸟教程
网站 URL：www.runoob.com
 */