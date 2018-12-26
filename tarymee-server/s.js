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
    // request 是一个 http.IncomingMessage 实例，它是可读流。
    // response 是一个 http.ServerResponse 实例，它是可写流。

    // console.log(request.headers)
    // for (var x in request) {
    //     console.log(x)
    // }
    console.log(request.method)
    console.log(url.parse(request.url, true))
    request.on('data', (chunk) => {

    })
    request.on('end', () => {
        // response.setHeader('Cache-Control', 'max-age=43200')
        // console.log(response.headers)
        // for (var x in response) {
        //     console.log(x)
        // }
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=43200'
        })
        console.log(response.getHeaders())

        response.write(JSON.stringify(request.headers))
        response.write('<br />')
        return response.end('结束')
    })


})

server.listen(8888)

console.log('server listen on port %d', port)