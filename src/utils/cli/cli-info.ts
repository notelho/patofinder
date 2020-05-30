import commander from 'commander';
import chalk from 'chalk';

export function cliInfo(): void {

    const type = commander.type || 'invalid';
    const path = commander.path || 'invalid';
    const verbose = commander.verbose || false;

    console.log(chalk.bgGreen('» path:') + ' ' + chalk.green(path));
    console.log(chalk.bgGreen('» verbose:') + ' ' + chalk.green(verbose));
    console.log(chalk.bgGreen('» type:') + ' ' + chalk.green(type));

    console.log('\n');

}

export default cliInfo;
