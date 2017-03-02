//创建http服务器
var http=require("http"); //加载一个http模块
http.createServer(function(req,res){  //创建一台服务器
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('hello nodej45s\n');
}).listen(1337,'127.0.0.1');
console.log("server running at http://127.0.0.1:1337");