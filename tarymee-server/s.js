const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const zlib = require("zlib")
const querystring = require('querystring')
const mime = require('mime')
const config = {
    port: 8000
}


console.log(mime.getType('css'))
console.log(mime.getType('jpg'))
console.log(mime.getExtension('text/plain'))

// http://nodejs.cn/api/http.html


// Node.js 静态文件服务器实战
// https://www.infoq.cn/article/2011%2F11%2Ftyq-nodejs-static-file-server
// http://coderlt.coding.me/2016/03/16/http-server-nodejs/
// https://www.cnblogs.com/SheilaSun/p/7271883.html

const server = http.createServer(function (request, response) {
    // response.setHeader('Cache-Control', 'max-age=43200')
    // response.writeHead(200, {
    //     'Content-Type': 'text/plain',
    //     'Cache-Control': 'max-age=43200'
    // })
    // response.write(JSON.stringify(request.headers))
    // response.write('<br />')
    // return response.end('结束')





})

server.listen(config.port)

console.log('server listen on port %d', config.port)




// var http = require("http");
// var url = require("url");
// var fs = require("fs");
// var server = http.createServer(function (req, res) {
//     var req_path = url.parse(req.url).path;
//     var filepath = __dirname + req_path;

//     fs.exists(filepath, function (exists) {
//         if (exists) {
//             fs.stat(filepath, function (err, stats) {
//                 if (err) {
//                     res.writeHead(500, { 'Content-Type': 'text/html;charset=utf8' });
//                     res.end('<div styel="color:black;font-size:22px;">server error</div>');
//                 } else {
//                     if (stats.isFile()) {
//                         var file = fs.createReadStream(filepath);
//                         res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
//                         file.pipe(res);
//                     } else {
//                         fs.readdir(filepath, function (err, files) {
//                             var str = '';
//                             for (var i in files) {
//                                 str += files[i] + '<br/>';
//                             }
//                             res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
//                             res.write(str);
//                         });
//                     }
//                 }
//             });
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' });
//             res.end('<div styel="color:black;font-size:22px;">404 not found</div>');
//         }
//     });
// });
// server.listen('9090', '127.0.0.1');