/*
6. POST 方法
以下实例演示了在表单中通过 POST 方法提交两个参数，我们可以使用 post.js 文件内的 process_post 
路由器来处理输入.
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index1.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index1.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   var response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  console.log("请访问http://127.0.0.1:8081/index1.html")

})