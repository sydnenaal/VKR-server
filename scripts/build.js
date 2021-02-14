const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// replaceAll polyfill
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr)
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr)
  }
}

// Change absolute paths to npm packages to relative
function parseJSFiles(pathToFile) {
  const fileСontents = fs.readFileSync(pathToFile, 'utf-8')
  const pathToDist = path.join(__dirname, '..', 'dist')

  if (fileСontents.includes('@vkr/')) {
    //build descent path to 'dist' directory
    const descentToDistRoot = pathToFile
      .slice(pathToDist.length + 1, pathToFile.length)
      .split('')
      .filter((symbol) => symbol === '\\' || symbol === '/')
      .reduce((path) => `${path}../`, '')

    const fixedJSCode = fileСontents.replaceAll('@vkr', `${descentToDistRoot}packages/@vkr`)

    fs.writeFileSync(pathToFile, fixedJSCode)
  }
}

// Recursive find js files and parse them
function fixCodeAliases(directory) {
  const dirs = fs.readdirSync(directory)

  dirs.forEach((item) => {
    const pathToItem = fs.lstatSync(path.join(directory, item))

    if (pathToItem.isFile() && item.endsWith('.js')) {
      parseJSFiles(path.join(directory, item))
    }

    if (pathToItem.isDirectory()) {
      fixCodeAliases(path.join(directory, item))
    }
  })
}

exec('rimraf ./dist && tsc --build', (err, stdOut, stdErr) => {
  if (err) {
    console.error(err)
  }

  if (stdOut) {
    console.log(stdOut)
  }

  if (stdErr) {
    console.log(stdErr)
  }

  console.info('Replace absolute paths to relative in build...')

  fixCodeAliases(path.join(__dirname, '..', 'dist'))

  console.log('Paths replaced')
})
