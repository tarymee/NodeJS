/*
1. 创建目录
语法
以下为创建目录的语法格式：
fs.mkdir(path,[mode], callback)
参数
参数使用说明如下：
path - 文件路径。
mode - 设置目录权限，默认为 0777。
callback - 回调函数，没有参数。
*/
/*
var fs = require("fs");

console.log("创建目录 ./tmp");
fs.mkdir("./tmp",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
*/
/*
创建目录 ./tmp
目录创建成功。
*/




/* 递归创建目录
var fs = require("fs");
var path = require("path"); 
//递归创建目录 异步方法
function mkdirs(dirname, mode, callback){
    fs.exists(dirname,function (exists){
        if(exists){
            callback();
        }else{
            console.log(path.dirname(dirname));
            mkdirs(path.dirname(dirname), mode, function (){
                fs.mkdir(dirname, mode, callback);
            });
        }
    });
}
//递归创建目录 同步方法
function mkdirsSync(dirname, mode){
    console.log(dirname);
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}
 */

var fs = require("fs");
var path = require("path"); 
function mkdirsSync(dirname, mode){
    console.log(dirname);
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirsSync(path.dirname(dirname), mode)){
            fs.mkdirSync(dirname, mode);
            return true;
        }
    }
}
mkdirsSync('./temp/test/hhh',0777,function(){
	console.log('创建成功');
})
/*
./temp/test/hhh
./temp/test
./temp
.
*/


// console.log(path.dirname('./temp/test/hhh'))     ./temp/test
