/*********利用文件系统来拷贝图片**************/

var fs=require('fs')
var source=fs.readFileSync('logo.png')    //read file 

fs.writeFileSync('stream_copy_log.png',source)   // write file

