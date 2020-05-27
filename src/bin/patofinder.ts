#!/usr/bin/env node

import pkg from '../../package.json';

import clear from 'clear';
import commander from 'commander';
import chalk from 'chalk';


console.log(chalk.yellow('patofinder') + '\n\n');

commander
    .version('1.0.0-rc.1')
    .description("An easy way to web scrape and mine urls with javascript (https://www.npmjs.com/package/patofinder)")
    .option('-P, --path <url>', 'Specifies the path for scan [required]')
    .option('-T, --type <type>', 'Specifies the type of search [required]')
    .option('-v, --verbose', 'Enable application search logs')
    .parse(process.argv);

console.log('you ordered a pizza with:');


if (!commander.path || !commander.type) {

    console.log('  - path');
    console.log(commander.path);

}

if (!commander.type) {

    console.log('  - type');
    console.log(commander.type);

}

if (commander.verbose) {

    console.log('  - verbose');
    console.log(commander.verbose);

}


if (!process.argv.slice(2).length) {

    clear();

    console.log('log================================');

    console.log(process.argv);

    commander.outputHelp();

}
