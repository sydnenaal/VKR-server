import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import { compose } from 'ramda'

import { logger } from './logger'

const app = express()

const PORT = 3000

app.use(logger).use(cors)

app.get('/ping', async (_: any, res: any) => {
  res.send(200)
})

app.listen(PORT, () => {
  const port: string = chalk.white(PORT.toString())
  const link: string = chalk.white(`http://localhost:${PORT}`)
  const log: Function = compose(console.log, chalk.blueBright)

  console.clear()
  log(`Сервер доступен на порту ${port}`)
  log(`Ссылка на приложение: ${link}`)
  log('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-')
  console.log('\n')
})
