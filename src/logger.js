const chalk = require('chalk')
const { format } = require('date-fns')
const { pathOr } = require('ramda')

function logger(ctx, next) {
  const date = format(Date.now(), 'yyyy-MM-dd hh:mm:ss')
  const coloredConsoleDate = chalk.dim(`[ ${date} ]: `)

  const args = {
    method: chalk.blueBright(pathOr('', ['request', 'method'], ctx)),
    url: chalk.blue(pathOr('', ['request', 'url'], ctx)),
  }

  const parsedArgs = Object.values(args).reduce((acc, item) => `${acc} ${item}`, '')

  console.log(`${coloredConsoleDate}${parsedArgs}`)

  next()
}

module.exports = { logger }
