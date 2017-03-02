/*
 * 模块分为原生模块和文件模块，原生模块在启动时已经被加载，文件模块也称为动态加载模块，
 * 加载文件模块用require方法实现加载。
 */

/**
 * 模块的加载
 */
	//var http= require('http');  //原生模块的加载
	//console.log(http);
 //文件模块的加载,需要写明绝对路径或相对路径
    //绝对路径
    	//var test=require('./test.js');  //这里要写明具体的路径
    //相对路径
    	//var test=require('./test.js');
    	//console.log(test);


/**
 * 文件写入操作
 */
 console.log("开始:"+new Date().getMilliseconds());

 var fs = require("fs") ;
 var txt = "大家要好好学习NodeJS啊！！！\n" ;
 for (var i = 0; i <1000000; i++) {
 	txt+="大家要好好学习NodeJS啊！！！\n";
 };
 //写入文件
 var before=new Date().getMilliseconds();
 console.log(before);
 fs.writeFile("bb.txt",txt,function (err) {
     if (err) throw err ;
     console.log("File Saved !"); //文件被保存
 }) ;
 var after=new Date().getMilliseconds();
 console.log(after);
 console.log('一共用了'+(after-before)+'毫秒');

