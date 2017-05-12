#!/usr/bin/env node
const initCmd = require('./commands/init')

var program = require('commander')

program.version('0.1.0')

program
  .command('init')
  .description('initialize a testx project')
  // .option('-C, --coffee', 'initialize a CoffeeScript project')
  .action(initCmd)

program.parse(process.argv)
