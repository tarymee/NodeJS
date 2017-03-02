/****************流的事件**************/
var fs=require('fs')
//创建可读的流
var readStream=fs.createReadStream('stream_copy_logo.js')     
var n=0   //计数器，统计触发data事件的次数
readStream.on('data',function(chunk){  //chunk是流传递时的一个buffer
	n++
	console.log('data emits')
	console.log(Buffer.isBuffer(chunk))    //true
	//console.log(chunk.toString('utf8'))   //chunk
	readStream.pause()   //流暂停
	console.log('data pause')
	setTimeout(function(){
		console.log('data pause end')
		readStream.resume()   //流恢复
	},3000)
}).on('readable',function(){     //可读
	console.log('data readable')
}).on('end',function(){    //流结束
	console.log(n)
	console.log('data end')
}).on('close',function(){   //流关闭
	console.log('data close')
}).on('error',function(e){
	console.log('data error:'+e)
})

