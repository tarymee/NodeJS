/**********利用流来拷贝图片*********/
var fs=require('fs')
//创建可读的流
var readStream=fs.createReadStream('logo.png')    
//创建可写的流
var writeStream=fs.createWriteStream('1-logo.png')  

readStream.on('data',function(chunk){  //chunk is a buffer when stream streams
	if(writeStream.write(chunk)===false){  // only if the writeStream writes successfuly that
		// the readStream can read. if not ,then pause
		console.log('still cached')
		readStream.pause()
	}
	
})
readStream.on('end',function(){    // when the readStream ends,the writeStream ends,too
	writeStream.end()
})
writeStream.on('drain',function(){  // 流写完的事件
	console.log('data drains')
	readStream.resume()   //  when the writeStream  writes successfully,the readStream resumes
})