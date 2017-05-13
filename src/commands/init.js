const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const inquirer = require('inquirer')
const chalk = require('chalk')

const copyTemplates = (tplsPath, templateName) => {
  let templatePath = path.join(tplsPath, templateName)
  if (fs.existsSync(templatePath)) {
    console.log('Copying files...')
    shell.cp('-R', `${templatePath}/*`, '.')
  } else {
    console.error(`The requested template "${templateName}" wasn\'t found.`)
    process.exit(1)
  }
}

const replaceVars = vars => {
  Object.entries(vars).forEach(([key, value]) => {
    shell.sed('-i', `\\[${key.toUpperCase()}\\]`, value, 'package.json')
  })
}

const installDependencies = () => {
  console.log('Installing dependencies...')
  shell.exec('npm i')
}

const questions = [
  {
    name: 'project',
    message: 'Project name',
    default: () => path.parse(process.cwd()).name
  },
  {
    name: 'version',
    message: 'Project version',
    default: '0.0.1'
  },
  {
    name: 'description',
    message: 'Project description',
    default: 'My awesome testx project'
  }
]

const initTestxProject = (tplPath, localPath) => {
  copyTemplates(tplPath, localPath)
  return inquirer.prompt(questions).then(answers => {
    replaceVars(answers)
    installDependencies()
  })
}

module.exports = opts => {
  console.log('Initializing testx project...')
  let templatesPath = `${__dirname}/../templates`
  // let templateName = opts.coffee ? 'coffee' : 'js'
  let templateName = 'coffee'
  initTestxProject(templatesPath, templateName).then(() => {
    console.log(chalk.green('Done!'))
    console.log(
      `Use ${chalk.yellow('npm test')} to execute the sample test script.`
    )
  })
}
