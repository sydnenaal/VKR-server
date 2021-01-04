const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

// Change absolute paths to npm packages to relative
function parseJSFiles(pathToFile) {
  const contents = fs.readFileSync(pathToFile, 'utf-8')

  if (contents.includes('@vkr/')) {
    //build relative path to 'dist' directory
    const pathToPackages = pathToFile
      .slice(path.join(__dirname, '..', 'dist').length + 1, pathToFile.length)
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

exec('rimraf ./dist && tsc --build', () => {
  fixCodeAliases(path.join(__dirname, '..', 'dist'))
})
