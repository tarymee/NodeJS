var https=require('https')
var fs=require('fs')

var options={
	key:fs.readFileSync('ssh_key.pem'),  //读取ssh_key里的证书
	cert:fs.readFileSync('ssh_cert.pem')
}

//构建https的服务器
https.creatServer(options,function(req,res){
	res.writeHead(200)
	res.end('hello https')
}).listen(8090)

//https的其它用法比如get和post和http的一样