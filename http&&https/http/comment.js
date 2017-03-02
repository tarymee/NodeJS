var http=require('http')
var querystring=require('querystring')

//post的内容
var postData=querystring.stringify({
	'content':'收货很大的啊!',
	'cid':'348'
})

//可选项,path就是url除了域名的部分  ，http://www.imooc.com/course/docomment
var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment', 
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=545e3772-30d7-41c3-8fb6-6792378b075f; imooc_isnew_ct=1485164221; loginstate=1; apsid=ZhM2VhNmI3MDM4ZjViMjFkZDg0MWIxNGYwNDlkZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjA5MDY5NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5ODY5OTI0ODRAcXEuY29tAAAAAAAAAAAAAAAAAAAAADQ2OWU0ZjlhYWQzZWE0ZjY4ZTFkZmQyMzUxY2NhYzBjx9CFWMfQhVg%3DMT; last_login_username=986992484%40qq.com; PHPSESSID=en7hmraoqb82iem8hcb3p78av7; imooc_isnew=2; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1485246080,1485404752,1485417653,1485429235; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1485429332; cvde=5889d9f340c60-34',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

//构造一个request
var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode)
	console.log('headers:'+JSON.stringify(res.headers))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end',function(){
		console.log('评论完毕')
	})
})

req.on('error',function(e){
	console.log('Error'+e.message)
})
//将请求的数据写到头部，用write方法
req.write(postData)
//结束请求
req.end()