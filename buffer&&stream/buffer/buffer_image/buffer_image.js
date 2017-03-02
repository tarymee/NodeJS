var fs=require('fs')
//读出logo.gif，读这个文件的数据，同时创建到一个buffer对象中，也就是origin_buffer
fs.readFile('logo.gif',function(err,origin_buffer){
	//console.log(Buffer.isBuffer(origin_buffer))

	//将这个origin_buffer写入到文件里
	fs.writeFile('logo_file.png',origin_buffer,function(err){
		if(err){
			console.log(err)
		}
	})

	//将这个origin_buffer转换成base64编码
	  //var base64Image=new Buffer(origin_buffer).toString('base64')
    var base64Image=origin_buffer.toString('base64')
    //console.log(base64Image)


    var decodedImage=new Buffer(base64Image,'base64')   //新生成的buffer，指定了base64编码
    console.log(Buffer.compare(origin_buffer,decodedImage))  //比较是否相等

    fs.writeFile('logo_decoded.png',decodedImage,function(err){
		if(err){
			console.log(err)
		}
	})
})