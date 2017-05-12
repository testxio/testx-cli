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

const replaceVars = () => {
  shell.ls('-Rl', '.').forEach(entry => {
    if (entry.isFile()) {
      shell.sed('-i', '\\[MY_VAR\\]', '"testx"', entry.name)
    }
  })
}

const installDependencies = () => {
  console.log('Installing dependencies…')
  shell.exec('npm i')
}

const initTestxProject = (tplPath, localPath) => {
  // Copy template files to the target dir
  copyTemplates(tplPath, localPath)
  // TODO: Prompt the user for input (what input?)
  // Go over all the template files and replace place holders with user input
  replaceVars()
  installDependencies()
}

module.exports = opts => {
  console.log(opts.coffee)
  console.log('Initializing testx project...')
  let templatesPath = `${__dirname}/../templates`
  let templateName = opts.coffee ? 'coffee' : 'js'
  initTestxProject(templatesPath, templateName)
  console.log('Done!')
  console.log('Use "npm run test-local" to execute the sample test script.')
}
