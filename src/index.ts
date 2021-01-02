import express, { Express, Request, Response } from 'express'
import { compose } from 'ramda'
import chalk from 'chalk'
import cors from 'cors'

import { logger } from './logger'

const app: Express = express()

const PORT: number = 3000

app.use(logger).use(cors)

app.get('/ping', async (_: Request, res: Response) => {
  res.send(200)
})

app.listen(PORT, () => {
  const port: string = chalk.white(PORT.toString())
  const log: Function = compose(console.log, chalk.blueBright)

  console.clear()
  log(`Сервер доступен на порту ${port}`)
  log(`Ссылка на приложение: ${chalk.white(`http://localhost:${PORT}`)}`)
  log('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-')
  console.log('\n')
})
