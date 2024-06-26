const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const route = require('koa-route')
const serve = require('koa-static')


const app = new Koa()

const cors = async (ctx, next) => {
  //允许来自所有域名请求(不携带cookie请求可以用*，如果有携带cookie请求必须指定域名)
  ctx.set('Access-Control-Allow-Origin', '*')
  // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080")

  // 设置所允许的HTTP请求方法
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')

  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type')

  // Content-Type表示具体请求中的媒体类型信息
  // ctx.set('Content-Type', 'application/json;charset=utf-8')

  // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*"
  // ctx.set('Access-Control-Allow-Credentials', true)

  // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
  // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
  // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
  // ctx.set('Access-Control-Max-Age', 300)

  // 需要获取其他字段时，使用Access-Control-Expose-Headers，getResponseHeader('myData')可以返回我们所需的值
  // ctx.set('Access-Control-Expose-Headers', 'myData')

  // CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
  // Cache-Control
  // Content-Language
  // Content-Type
  // Expires
  // Last-Modified
  // Pragma

  // 解决OPTIONS请求
  if (ctx.method == 'OPTIONS') {
    ctx.body = ''
    ctx.status = 204
  } else {
    await next()
  }
}

app.use(cors)

app.use(route.get('/', (ctx) => {
  // debugger
  ctx.response.body = 'Hello World'
}))

app.use(route.get('/about', (ctx) => {
  // debugger
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}))

app.use(route.get('/template', async (ctx) => {
  // console.log(ctx)
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./template.html')
  // ctx.response.body = await fs.readFile('./demos/template.html', 'utf8')
}))

app.use(route.get('/nativeapi.html', async (ctx) => {
  // console.log(ctx)
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./nativeapi.html')
}))

app.use(route.get('/cookie', (ctx) => {
  const n = Number(ctx.cookies.get('view') || 0) + 1
  ctx.cookies.set('view', n)
  ctx.response.body = n + ' views'
}))

app.use(route.get('/redirect', (ctx) => {
  ctx.response.redirect('/')
}))

app.use(route.get('/500', (ctx) => {
  ctx.throw(500)
}))

app.use(route.get('/404', (ctx) => {
  ctx.response.status = 404
  ctx.response.body = 'Page Not Found'
}))

app.on('error', (err, ctx) => {
  console.error('server error', err)
})







// 静态资源
// https://www.npmjs.com/package/koa-static
const static = serve(path.join(__dirname))
app.use(static)




app.listen(3000)
