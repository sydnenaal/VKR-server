const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Change absolute paths to npm packages to relative
function parseJSFiles(pathToFile) {
  const contents = fs.readFileSync(pathToFile, 'utf-8')
  const pathToDist = path.join(__dirname, '..', 'dist')

  if (contents.includes('@vkr/')) {
    //build relative path to 'dist' directory
    const pathToPackages = pathToFile
      .slice(pathToDist.length + 1, pathToFile.length)
      .split('')
      .filter((item) => item === '\\')
      .reduce((acc, item) => `${acc}../`, '')

    const fixedJSCode = contents.replace('@vkr', `${pathToPackages}packages/@vkr`)

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
