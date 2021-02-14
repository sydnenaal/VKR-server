import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import { compose } from 'ramda'
import Mongoose from 'mongoose'

import { DATABASE_URI, DATABASE_CONFIG, PORT } from '@vkr/app-constants'
import { model } from '@vkr/app-schema'

import { logger } from './logger'

const app = express()

app.use(logger).use(cors)

app.get('/ping', async (_: any, res: any) => {
  res.send(200)
})

Mongoose.connect(DATABASE_URI, DATABASE_CONFIG, (err) => {
  if (err) {
    console.error(err)
  }

  model.getById('3')

  console.log('created')

  app.listen(PORT, () => {
    const port: string = chalk.white(PORT)
    const link: string = chalk.white(`http://localhost:${PORT}`)
    const log: Function = compose(console.log, chalk.blueBright)

    console.clear()
    log(`Сервер доступен на порту ${port}`)
    log(`Ссылка на приложение: ${link}`)
    log('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-')
    console.log('\n')
  })
})
