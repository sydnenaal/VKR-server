import chalk from 'chalk'
import { format } from 'date-fns'

import { getColorByStatus, getColorByReqLength } from './utils.js'

export async function logger(req: any, res: any, next: any) {
  const date = format(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  const coloredConsoleDate = chalk.dim(`[ ${date} ]: `)
  const start = Number(new Date())

  await next()

  const params = {
    method: chalk.blue(req.method),
    status: getColorByStatus(res.statusCode),
    ms: getColorByReqLength(Number(new Date()) - start),
    url: req.url,
  }
  const parsedParams = Object.values(params).reduce((acc, item) => `${acc} ${item}`, '')

  console.log(`${coloredConsoleDate}${parsedParams}`)
}
