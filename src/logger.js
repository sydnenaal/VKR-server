import chalk from 'chalk'
import { format } from 'date-fns'

function getColorByStatus(status) {
  if (!status) {
    return ''
  }

  if (status >= 400) {
    return chalk.red(status.toString())
  }

  return chalk.green(status.toString())
}

export async function logger(req, res, next) {
  const date = format(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  const coloredConsoleDate = chalk.dim(`[ ${date} ]: `)
  const start = new Date()

  await next()

  const args = {
    method: chalk.blueBright(req.method),
    status: getColorByStatus(res.statusCode),
    ms: `${new Date() - start}ms`,
    url: chalk.blue(req.url),
  }

  const parsedArgs = Object.values(args).reduce((acc, item) => `${acc} ${item}`, '')

  console.log(`${coloredConsoleDate}${parsedArgs}`)
}
