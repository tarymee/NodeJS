/*
Node.js RESTful API

什么是 REST？
REST即表述性状态传递（英文：Representational State Transfer，简称REST）是Roy Fielding博士在
2000年他的博士论文中提出来的一种软件架构风格。
表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。
需要注意的是，REST是设计风格而不是标准。REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的
一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。REST 通常使
用 JSON 数据格式。

HTTP 方法
以下为 REST 基本架构的四个方法：
GET - 用于获取数据。
PUT - 用于更新或添加数据。
DELETE - 用于删除数据。
POST - 用于添加数据。

RESTful Web Services
Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML
（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分
布式的互操作的应用程序。

基于 REST 架构的 Web Services 即是 RESTful。
由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。
可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客
户端。RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性
让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。
*/

/*
创建 RESTful
首先，创建一个 json 数据资源文件 users.json
我们创建以下 RESTful API：
序号	URI			HTTP 方法	发送内容	结果
1		listUsers	GET			空			显示所有用户列表
2		addUser		POST		JSON字符串	添加新用户
3		deleteUser	DELETE		JSON字符串	删除用户
4		:id			GET			空			显示用户详细信息
*/

//以下代码，我们创建了 RESTful API listUsers
var express = require('express');
var app = express();
var fs = require("fs");

//1.获取用户列表
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//2.添加用户
 //添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var data = JSON.parse(data);
       //console.log(data);
       data["user4"] = user["user4"];  //添加数据
       //console.log( data );
       fs.writeFile(__dirname + "/" + "users.json",JSON.stringify(data), function (err1) {
       		console.log('添加成功')
       })
       res.end(JSON.stringify(data));
   });
})

//3.删除用户
//创建RESTful API deleteUser， 用于删除指定用户的详细信息
var id=4;
app.get('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var data = JSON.parse(data);  //转换成对象
       delete data["user"+id];  //删除对象里的某个元素
       fs.writeFile(__dirname + "/" + "users.json",JSON.stringify(data), function (err1) {
          console.log('删除成功');
       })
       res.end(JSON.stringify(data));
   });
})

//4. 显示用户详情
//创建 RESTful API :id（用户id）,用于读取指定用户的详细信息
app.get('/detail/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var data = JSON.parse( data );
       var user = data["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {
  console.log("获取用户列表,访问地址为 http://127.0.0.1:8081/listUsers")
  console.log("添加用户,访问地址为 http://127.0.0.1:8081/addUser")
  console.log("显示用户详情,访问地址为 http://127.0.0.1:8081/detail/1")
  console.log("删除用户,访问地址为 http://127.0.0.1:8081/deleteUser")
})
