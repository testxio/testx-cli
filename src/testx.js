#!/usr/bin/env node
const program = require("commander");
const initCmd = require("./commands/init");
const package = require("../package.json");
program.version(package.version);

program
  .command("init")
  .description("initialize a testx project")
  .alias("i")
  .option("-N, --next", "initialize a testx@3.x project")
  .action(initCmd);

program.parse(process.argv);
