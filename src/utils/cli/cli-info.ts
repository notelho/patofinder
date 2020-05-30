import commander from 'commander';
import chalk from 'chalk';

export function cliInfo(): void {

    console.log(chalk.yellow(`   »  path: ${commander.path}`));
    console.log(chalk.yellow(`   »  type: ${commander.type}`));

    console.log('\n');

}

export default cliInfo;
