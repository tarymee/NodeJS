const http = require('http')
const url = require('url')

http.createServer(function (request, response) {
  console.log(request)
  debugger
  // request 是一个 http.IncomingMessage 实例 它是可读流
  // response 是一个 http.ServerResponse 实例 它是可写流

  // console.log(request.headers)
  // for (var x in request) {
  //   console.log(x)
  // }
  // console.log(request.method)
  request.on('data', (chunk) => {

  })
  request.on('end', () => {
    // response.setHeader('Cache-Control', 'max-age=43200')
    // console.log(response.headers)
    // for (var x in response) {
    //   console.log(x)
    // }
    response.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=43200'
    })
    setTimeout(() => {
      console.log(request)
    }, 500)
    // console.log(response.getHeaders())

    response.write(JSON.stringify(request.headers))
    response.write('<br />')
    console.log('end')
    return response.end('结束')
   })

  // response.on('close', () => {
  //   console.log('close')
  // })
  // response.on('finish', () => {
  //   console.log('finish')
  // })


}).listen(8888)




// var http = require('http');


// setTimeout(() => {
//   var req = http.request({
//     hostname: '127.0.0.1',
//     path: '/',
//     port: '8888',
//     method: 'Get'
//   }, function (response) {
//     // console.log(response)
//     // debugger
//     var str = '';
//     response.on('data', function (chunk) {
//       console.log(chunk)
//       str += chunk;
//     });
//     response.on('end', function () {
//       console.log(str);
//     });
//   });
//   console.log(req)
//   req.end();
// }, 1000)

// console.log(http.METHODS)
// console.log(typeof http.STATUS_CODES)
