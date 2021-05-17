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




