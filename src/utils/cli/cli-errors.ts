import absolutePathRegexp from '../regexp/absolute-path';
import searchTypeRegexp from '../regexp/search-type';
import commander from 'commander';
import chalk from 'chalk';

export class CliErrors {

    private readonly errors = [
        { name: 'notFoundPath', message: 'Path not found. Use --path and input a valid url', checked: false },
        { name: 'invalidPath', message: 'Invalid path provided. Try again with another one', checked: false },
        { name: 'notFoundType', message: 'Type not found. Use --type and input a valid type', checked: false },
        { name: 'invalidType', message: 'Invalid type provided. Use --example for more details', checked: false },
    ];

    public check() {

        const notFoundPathIndex = this.errors.map(error => error.name).indexOf('notFoundPath');
        const invalidPathIndex = this.errors.map(error => error.name).indexOf('invalidPath');
        const notFoundTypeIndex = this.errors.map(error => error.name).indexOf('notFoundType');
        const invalidTypeIndex = this.errors.map(error => error.name).indexOf('invalidType');

        const path = commander.path;
        const type = commander.type;
        const example = commander.example;

        if (path || type) {

            if (!path) {
                this.errors[notFoundPathIndex].checked = true;
            } else if (!path.match(absolutePathRegexp)) {
                this.errors[invalidPathIndex].checked = true;
            }

            if (!type) {
                this.errors[notFoundTypeIndex].checked = true;
            } else if (!type.match(searchTypeRegexp)) {
                this.errors[invalidTypeIndex].checked = true;
            }

        }

    }

    public show() {

        for (const error of this.errors) {
            if (error.checked) {
                console.log(chalk.red(error.message));
            }
        }

    }

    public get hasError(): boolean {

        for (const error of this.errors) {
            if (error.checked) {
                return true;
            }
        }

        return false;

    }
}

export default CliErrors;