'use strict'
var fs = require('fs')
var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var multer = require('multer')


var app = express()

app.use(cookieParser())

// application/x-www-form-urlencoded 编码解析
// node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
app.use(bodyParser.urlencoded({extended: false}))

// node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据
app.use(multer({dest: '/tmp/'}).array('image'))




// 静态资源
app.use('/static', express.static('static'))

//  主页输出 'Hello World'
app.get('/', function(req, res) {
    res.send('Hello World!')
})

// 访问首页
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html')
})

// 输出 JSON 格式
// http://127.0.0.1:3000/json?first=tarymee&last=slimyth
app.get('/json', function(req, res) {
    var response = {
        'firstName': req.query.first,
        'lastName': req.query.last
    }
    res.end(JSON.stringify(response))
})



//  POST 请求
app.post('/post', function(req, res) {
    res.send('Hello POST')
})
app.post('/post2', function(req, res) {
    var response = {
        'firstName': req.body.first,
        'lastName': req.body.last
    }
    res.end(JSON.stringify(response))
})



// 上传文件
app.post('/file', function(req, res) {
    console.log(req.files[0]) // 上传的文件信息
    var des_file = __dirname + '/file/' + req.files[0].originalname
    fs.readFile(req.files[0].path, function(err, data) {
        if (err) res.send('读文件操作失败')
        else {
            fs.writeFile(des_file, data, function(err) {
                if (err) res.send('写文件操作失败.')
                else res.send(JSON.stringify({
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }))
            })
        }
    })
})

// cookie
app.get('/cookie', function(req, res) {
    res.send(req.cookies)
})


// jsonp
app.get('/jsonp', function(req, res) {
    var response_data = {
        email: 'example@163.com',
        name: 'jaxu'
    }
    if (req.query.callback) {
        res.type('text/javascript')
        res.send(req.query.callback + '(' + JSON.stringify(response_data) + ')')
    } else {
        res.json(response_data)
    }
})


// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function(req, res, next) {
    console.log(req)
    console.log(res)
    next();
}, function(req, res, next) {
    res.send(req.params.id)
})


// 启动服务器监听端口
var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})