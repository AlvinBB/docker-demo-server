const Koa = require('koa')

const routers = require('./routers/index')
const app = new Koa()

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(8086)
console.log('[demo] start-quick is starting at port 3000')