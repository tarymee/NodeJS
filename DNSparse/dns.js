/*
 *  功能：实现Web解析DNS
 */
var http= require('http'),  //创建服务器 
    dns= require('dns'),     //DNS查询,返回DNS服务器的IP地址
    fs= require('fs'),      // 文件操作，读取html页面
    url=require('url'),      //url处理，处理文件url路径
    querystring=require('querystring');    //字符串处理，处理前端传回的字符串解析

http.createServer(function (req,res) {
	res.writeHead(200,'Content-type:text/html');
	//获取index.html的路径
	var readPath=__dirname+'/'+url.parse('index.html').pathname;
	//  url.parse('index.html').pathname 即index.html;
	//读取html文件数据
	var indexPage=fs.readFileSync(readPath);
	//输出
	res.end(indexPage);
}).listen(1300,"127.0.0.1");