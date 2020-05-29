import absolutePathRegexp from '../utils/regexp/absolute-path';
import searchTypeRegexp from '../utils/regexp/search-type';

import cliExamples from '../utils/cli/cli-examples';
import cliPackage from '../utils/cli/cli-package';
import cliHelp from '../utils/cli/cli-help';
import cliLogo from '../utils/cli/cli-logo';

import SearchType from '../interfaces/search-type';
import TypePath from '../interfaces/type-path';
import TypeLogs from '../interfaces/type-logs';

import commander from 'commander';
import chalk from 'chalk';

export class Arguments {

    private result: TypePath[];

    private type: SearchType;

    private path: TypePath;

    private example: boolean;

    private verbose: boolean;

    private options = [
        { flags: '-P, --path <url>', description: 'specifies the path for scan [required]' },
        { flags: '-T, --type <type>', description: 'specifies the type of search [required]' },
        { flags: '-v, --verbose', description: 'enable application search logs (cli only)' },
        { flags: '-e, --example', description: 'show command line examples (cli only)' },
    ];

    private errors = [
        { name: 'notFoundPath', message: 'Path not found. Use --path and input a valid url', checked: false },
        { name: 'invalidPath', message: 'Invalid path provided. Try again with another one', checked: false },
        { name: 'notFoundType', message: 'Type not found. Use --type and input a valid type', checked: false },
        { name: 'invalidType', message: 'Invalid type provided. Use --example for more details', checked: false },
    ];

    private actions = [
        { name: 'showHelp', action: cliHelp, checked: false },
        { name: 'showExample', action: cliExamples, checked: false },
    ];

    constructor() {
        // this.path = '';
        // this.type = '';
        this.result = [];
    }

    public save() {
        this.path = commander.path;
        this.type = commander.type;
        this.example = commander.example;
        this.verbose = commander.verbose;
    }

    public create() {

        console.log('create begin');

        const version = "1.0.0-rc.1";
        const description = "An elegant way to search for urls with web scraping";
        const homepage = "https://www.npmjs.com/package/patofinder";

        commander.version(version);
        commander.description(`${description} (${homepage})`);

        for (const option of this.options) {
            commander.option(option.flags, option.description);
        }

        commander.parse(process.argv);

    }

    public check(): void {

        console.log('check begin');

        const path = this.path;
        const type = this.type;
        const example = this.example;

        console.log('example');
        console.log(example);

        const notFoundPathIndex = this.errors.map(error => error.name).indexOf('notFoundPath');
        const invalidPathIndex = this.errors.map(error => error.name).indexOf('invalidPath');
        const notFoundTypeIndex = this.errors.map(error => error.name).indexOf('notFoundType');
        const invalidTypeIndex = this.errors.map(error => error.name).indexOf('invalidType');

        const showExampleIndex = this.actions.map(action => action.name).indexOf('showExample');
        const showHelpIndex = this.actions.map(action => action.name).indexOf('showHelp');

        if (!path && !type) {

            if (example) {
                this.actions[showExampleIndex].checked = true;
            } else {
                this.actions[showHelpIndex].checked = true;
            }

        } else {

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

    public output(): void {

        console.log('output begin');

        for (const error of this.errors) {
            if (error.checked) {
                console.log(chalk.red(error.message));
            }
        }

        for (const action of this.actions) {
            if (action.checked) {
                action.action();
            }
        }

    }

    public info(): void {

        cliLogo();

        console.log('duck');
        console.log('===================');
        console.log('begin search with url aopkfapekffkeaofk and type qpwfkwofkq');

    }

    public get canRun(): boolean {

        let hasError = false;
        let hasAction = false;

        for (const error of this.errors) {
            if (error.checked) {
                hasError = true;
            }
        }

        for (const action of this.actions) {
            if (action.checked) {
                hasAction = true;
            }
        }

        return (!hasError && !hasAction);
    }

    public get vars() {
        return {
            type: this.type,
            path: this.path,
            example: this.example,
            verbose: this.verbose,
        }
    }

}

export default Arguments;
