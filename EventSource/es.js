'use strict'
var express = require('express')
var app = express()

// 访问EventSource
app.get('/es.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'es.html')
})

// EventSource
app.get('/message', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
    setInterval(function() {
        res.write('data: ' + +new Date() + '\n\n');
    }, 1000);
})

// 启动服务器监听端口
var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})