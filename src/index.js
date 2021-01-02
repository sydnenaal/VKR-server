const Koa = require('koa')
const chalk = require('chalk')
const { logger } = require('./logger')
const Router = require('@koa/router')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

const PORT = 3000

router.get('/a', async (ctx) => {
  ctx.status = 200
})

app.use(logger).use(cors()).use(router.routes()).use(logger).use(router.allowedMethods())

app.listen(PORT, () => {
  console.clear()
  console.log(chalk.blue(`Сервер доступен на порту ${PORT}`))
  console.log(chalk.blue('Добро пожаловать!'))
  console.log('\n')
})
