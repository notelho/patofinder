import chalk from 'chalk';

export function cliInstall() {

    console.log(chalk.cyan('    Welcome to patofinder,'));
    console.log(chalk.cyan('    if you are installing this lib globally'));
    console.log(chalk.cyan('    see usage examples using patofinder --example'));
    console.log(chalk.cyan('    or see all commands available with patofinder --help'));
    console.log(chalk.cyan('    also, you can check the repository at https://github.com/notelho/patofinder'));
    console.log(chalk.cyan('    or the oficial npm page at https://www.npmjs.com/package/patofinder'));
    console.log('\n');

}

export default cliInstall;
