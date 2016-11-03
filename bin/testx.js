#!/usr/bin/env node
const spawn = require('child_process').spawn
const cli = require('../lib')

var program = require('commander');

program
  .version('0.1.0')
  .arguments('<config_file>')
  .description('Run a TestX project')
  .action(function (config_file) {
    spawn('/usr/local/lib/node_modules/testx-cli/node_modules/protractor/bin/protractor', [config_file], {stdio: 'inherit'});
  });

program.parse(process.argv);

// TODO: Start a test
