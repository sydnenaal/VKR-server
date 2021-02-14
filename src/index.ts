import express, {Express, Response, Request} from 'express'
import chalk from 'chalk'
import cors from 'cors'
import { compose } from 'ramda'
import Mongoose from 'mongoose'

import { DATABASE_URI, DATABASE_CONFIG, PORT } from '@vkr/app-constants'
import { Company } from '@vkr/app-schema'

import { logger } from './logger'

const app: Express = express()

app.use(logger).use(cors())

app.get('/ping', async (_: Request, res: Response): Promise<void> => {
  try {
    console.log(Company.findCompanies)
    const a = await Company.findCompanies()
    console.log('a:', a)

    res.sendStatus(200)
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
  
})

Mongoose.connect(DATABASE_URI, DATABASE_CONFIG, (err) => {
  app.listen(PORT, async () => {
    const port: string = chalk.white(PORT)
    const link: string = chalk.white(`http://localhost:${PORT}`)
    const log: Function = compose(console.log, chalk.blueBright)

    console.clear()
    
    log(`Сервер доступен на порту ${port}`)
    log(`Ссылка на приложение: ${link}`)
    log('Добро пожаловать на сервер -=ШИЗОФРЕНИЯ=-')
    console.log('\n')

    if (err) {
      console.error(err)
    }
  })
})
