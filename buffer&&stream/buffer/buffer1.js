/**
 * 1. 将 Buffer 转换为 JSON 对象
语法
将 Node Buffer 转换为 JSON 对象的函数语法格式如下：
buf.toJSON()
返回值
返回 JSON 对象。

var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);
console.log(json);
*/


/**
 * 2. 缓冲区合并
语法
Node 缓冲区合并的语法如下所示：
Buffer.concat(list[, totalLength])
参数
参数描述如下：
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
返回值
返回一个多个成员合并的新 Buffer 对象。

var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
*/


/**
 * 3. 缓冲区比较
语法
Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
buf.compare(otherBuffer);
参数
参数描述如下：
otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
返回值
返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
*/


/**
 * 4. 拷贝缓冲区
语法
Node 缓冲区拷贝语法如下所示：
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
参数
参数描述如下：
targetBuffer - 要拷贝的 Buffer 对象。
targetStart - 数字, 可选, 默认: 0
sourceStart - 数字, 可选, 默认: 0
sourceEnd - 数字, 可选, 默认: buffer.length
返回值
没有返回值。

var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);  //将buffer1的内容拷贝到buffer2里
console.log("buffer2 content: " + buffer2.toString());
*/


/**
 * 5. 缓冲区裁剪
Node 缓冲区裁剪语法如下所示：
buf.slice([start[, end]])
参数
参数描述如下：
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
返回值
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

var buffer1 = new Buffer('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(1,2); //从索引1开始，剪切到索引2的位置，但不取索引2的值
console.log("buffer2 content: " + buffer2.toString());  // u
*/


/**
 * 6. 缓冲区长度
语法
Node 缓冲区长度计算语法如下所示：
buf.length;
返回值
返回 Buffer 对象所占据的内存长度。
*/
var buffer = new Buffer('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);