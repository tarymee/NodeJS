/*
7. 文件上传
以下我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为
 multipart/form-data。
 */

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './public/images'}).array('image'));  //上传到的临时目录，二进制文件

app.get('/index3.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index3.html" );
})

app.post('/file_upload', function (req, res) {

   console.log(req.files[0]);  // 上传的文件信息
  /* 输出信息为
   { fieldname: 'image',
  originalname: '1.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './public/images',
  filename: 'a5297215d0a0a7a11928eb4040e4513b',
  path: 'public\\images\\a5297215d0a0a7a11928eb4040e4513b',
  size: 908490 }
  */
   
   // 最终上传到的目录，可以自定义
   var des_file = './public/images/' + req.files[0].originalname; 
   console.log(des_file);

   fs.readFile( req.files[0].path, function (err, data) { //读取临时目录里的图片
        fs.writeFile(des_file, data, function (err) {  //写入到最终目录
         if(err){
              console.log( err );
         }else{
         	//删除二进制文件
         	fs.unlink('./public/images/' + req.files[0].filename,function(err){
         		if(err){
       				return console.error(err);
         		}
         		console.log('删除二进制文件成功')
         	});

         	//响应信息
            var response = {
                message:'File uploaded successfully', 
                filename:req.files[0].originalname
            };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  console.log("应用实例，访问地址为 http://127.0.0.1:8081/index3.html")

})
