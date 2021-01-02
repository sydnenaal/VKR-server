import { Request, Response } from 'express'
import chalk from 'chalk'
import { format } from 'date-fns'

import { getColorByStatus, getColorByReqLength } from './utils'

interface logParams {
  method: string;
  status: string;
  ms: string;
  url: string;
}

export async function logger(req: Request, res: Response, next: Function): Promise<void> {
  const date: string = format(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  const coloredConsoleDate: string = chalk.dim(`[ ${date} ]: `)
  const start: number = Number(new Date())

  await next()

  const params: logParams = {
    method: chalk.blue(req.method),
    status: getColorByStatus(res.statusCode),
    ms: getColorByReqLength(Number(new Date()) - start),
    url: req.url,
  }
  const parsedParams: string = Object.values(params).reduce((acc, item) => `${acc} ${item}`, '')

  console.log(`${coloredConsoleDate}${parsedParams}`)
}
