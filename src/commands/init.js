const fs = require('fs')
const path = require('path')
const shell = require('shelljs')

const copyTemplates = (tplsPath, templateName) => {
  let templatePath = path.join(tplsPath, templateName)
  if (fs.existsSync(templatePath)) {
    console.log('Copying files…')
    shell.cp('-R', `${templatePath}/*`, '.')
  } else {
    console.error(`The requested template "${templateName}" wasn\'t found.`)
    process.exit(1)
  }
}

const initTestxProject = (tplPath, localPath) => {
  copyTemplates(tplPath, localPath)
  // TODO: Copy template files to the target dir
  // TODO: Prompt the user for input
  // TODO: Go over all the template files and replace place holders with user input  console.log('Command-line input received:')
}

module.exports = opts => {
  console.log(opts.coffee)
  console.log('Initializing...')
  let templatesPath = `${__dirname}/../templates`
  let templateName = opts.coffee ? 'coffee' : 'js'
  initTestxProject(templatesPath, templateName)
  console.log('Done!')
}
