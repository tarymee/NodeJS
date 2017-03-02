//一个路由的完整实现

var server = require("./server");
var router = require("./router");

server.start(router.route);