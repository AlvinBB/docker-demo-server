const router = require('koa-router')()
const testControllers = require('../controllers/index')

const routers = router
	.get('/test', testControllers.apiTest)

module.exports = routers