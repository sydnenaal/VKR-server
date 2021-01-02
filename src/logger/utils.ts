import chalk from 'chalk'

export function getColorByReqLength(length: number): string {
  if (length >= 20) {
    return chalk.red(`${length}ms`)
  }

  if (length >= 10) {
    return chalk.yellow(`${length}ms`)
  }

  if (length >= 0) {
    return chalk.green(`${length}ms`)
  }

  return ''
}

export function getColorByStatus(status: number): string {
  if (status >= 400) {
    return chalk.red(status.toString())
  }

  if (status < 400) {
    return chalk.green(status.toString())
  }

  return ''
}
