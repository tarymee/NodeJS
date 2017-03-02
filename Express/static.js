/*
4. 静态文件
Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件
放在 public 目录下，你可以这么写：
 app.use(express.static('public'));
*/

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
  console.log("在浏览器中访问http://127.0.0.1:8081/images/logo.png");
})

// 在浏览器中访问 http://127.0.0.1:8081/images/logo.png（本实例采用了菜鸟教程的logo），结果如
// 下图所示：

