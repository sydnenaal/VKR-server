import Express from 'express'
import chalk from 'chalk'
import { logger } from './logger'

const app = new Express()

const PORT = 3000

app.use(logger)

app.get('/', async (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  const port = chalk.yellow(PORT.toString())
  console.clear()
  console.log(chalk.blueBright(`Сервер доступен на порту ${port}`))
  console.log(chalk.blueBright('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-'))
  console.log('\n')
})
