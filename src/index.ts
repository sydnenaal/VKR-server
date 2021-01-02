import express, { Express, Request, Response } from 'express'
import chalk from 'chalk'
import { logger } from './logger'

const app: Express = express()

const PORT: number = 3000

app.use(logger)

app.get('/ping', async (_: Request, res: Response) => {
  res.sendStatus(200)
})

app.listen(PORT, () => {
  const port = chalk.white(PORT.toString())
  console.clear()
  console.log(chalk.blueBright(`Сервер доступен на порту ${port}`))
  console.log(chalk.blueBright(`Ссылка на приложение: ${chalk.white(`http://localhost:${PORT}`)}`))
  console.log(chalk.blueBright('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-'))
  console.log('\n')
})
