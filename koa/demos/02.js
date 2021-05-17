const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  // console.log(ctx)
  // console.log(app)
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
