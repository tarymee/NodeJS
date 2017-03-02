/*****使用pipe方法******/
var http=require('http')
var fs=require('fs')

//create Server
http.createServer(function(req,res){

	/*  1.read logo.png through fiel system ,then show on brower
	fs.readFile('logo.png',function(err,data){
		if(err){
			res.end('file not exist')
		}else{
			res.writeHead(200,{'Content-Type':'text/html'})
			res.end(data)
		}
	})
	*/
    
    // 2.through pipe,so cool
	fs.createReadStream('logo.png').pipe(res)

	// 3. you can also request from internet,then pipe
	//request('URL').pipe(res)

	// 4. another
	fs.createReadStream('logo.png').pipe(fs.createWriteStream('logo-pipe.png'))


}).listen(8090)