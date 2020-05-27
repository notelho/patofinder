#!/usr/bin/env node

const clear = require('clear');
const commander = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');



console.log(chalk.yellow(figlet.textSync('patofinder', { horizontalLayout: 'full' })) + '\n\n');

commander
    .version('1.0.0-rc.1')
    .description("An easy way to web scrape and mine urls with javascript (https://www.npmjs.com/package/patofinder)")
    .option('-P, --path <url>', 'Specifies the path for scan [required]')
    .option('-T, --type <type>', 'Specifies the type of search [required]')
    // .option('-v, --verbose', 'Enable application search logs')
    // .option('-s, --save <directory>', 'Specifies a directory to save logs file')
    .parse(process.argv);

console.log('you ordered a pizza with:');

if (commander.path) {

    console.log('  - path');

}

if (commander.type) {

    console.log('  - type');

}


if (!process.argv.slice(2).length) {

    clear();

    console.log('log================================');

    console.log(process.argv);

    commander.outputHelp();

}

// #!/usr/bin/env node

// 'use strict';

// const yargs = require('yargs');
// // const { resolve } = require('path');
// const { commands } = require('../lib/core/yargs');

// // Switch CWD if specified from options
// // const cwd = resolve(yargs.argv.cwd || process.cwd());
// // process.chdir(cwd);

// // Init CLI commands and options

// commands()
//     .forEach(cmd =>
//         yargs.command(cmd.command, cmd.desc, cmd.builder, cmd.handler),
//     );

// const cli = yargs
//     .help()
//     .version()
//     .wrap(yargs.terminalWidth())
//     .strict();

// const args = cli.argv;

// // if no command then show help
// if (!args._[0]) {
//     cli.showHelp();
// }


// const parser = new Args({
//     version: "0.1.0",
//     addHelp: true,
//     description: "Pato finder options",
// });

// const args = new args(url | urls, type)


// // patofinder


// // patofinder --path https:www.google.com --type png


// // new Args
// // new Scanner ( path );

// // args .path
// // args .type

// // await scanner.getUrls()
