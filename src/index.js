const Koa = require('koa')
const chalk = require('chalk')
const { logger } = require('./logger')

const app = new Koa()

const PORT = 3000

app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(PORT, () => {
  console.clear()
  console.log(chalk.blue(`Сервер доступен на порту ${PORT}`))
  console.log(chalk.blue('Добро пожаловать!'))
  console.log('\n')
})
