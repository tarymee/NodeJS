const Koa = require('koa')
const route = require('koa-route')
const koa = new Koa()

koa.use(route.get('/', (ctx) => {
  debugger
  ctx.response.body = 'Hello World'
}))

koa.use(route.get('/about', (ctx) => {
  debugger
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}))

koa.listen(3000)





const http = require('http')
const url = require('url')
http.createServer(function (request, response) {
  // request 是一个 http.IncomingMessage 实例 它是可读流
  // response 是一个 http.ServerResponse 实例 它是可写流

  // console.log(request.headers)
  // for (var x in request) {
  //	 console.log(x)
  // }
  console.log(request.method)
  console.log(url.parse(request.url, true))
  request.on('data', (chunk) => {

  })
  request.on('end', () => {
    // response.setHeader('Cache-Control', 'max-age=43200')
    // console.log(response.headers)
    // for (var x in response) {
    //	 console.log(x)
    // }
    response.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=43200'
    })
    console.log(response.getHeaders())

    response.write(JSON.stringify(request.headers))
    response.write('<br />')
    return response.end('结束')
   })


}).listen(8888)
