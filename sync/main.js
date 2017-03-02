var fs=require('fs');

/* 
同步阻塞代码，使用readFileSync
var data=fs.readFileSync('input.txt');   //返回一个buffer对象
console.log(data.toString());
console.log('读取完毕');
*/

//异步非阻塞代码，使用readFile
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");

/*
以上两个实例我们了解了阻塞与非阻塞调用的不同。第一个实例在文件读取完后才执行完程序。 第二个实例
我们不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。因
此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在
回调函数内。
在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第
一个参数。
*/
