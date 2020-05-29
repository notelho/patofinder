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
import CliOptions from './cli-options';
import CliErrors from './cli-errors';

export class CliArguments {


    private options: CliOptions;

    private errors: CliErrors;

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

        this.options.create();
        this.errors.check();
        this.actions.check();

    }

    public check(): void {

        const path = this.path;
        const type = this.type;
        const example = this.example;


        const showExampleIndex = this.actions.map(action => action.name).indexOf('showExample');
        const showHelpIndex = this.actions.map(action => action.name).indexOf('showHelp');

        if (!path && !type) {

            if (example) {
                this.actions[showExampleIndex].checked = true;
            } else {
                this.actions[showHelpIndex].checked = true;
            }

        }

    }

    public output(): void {

        console.log('output begin');

        this.errors.show()

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
        return (!this.errors.hasError && !this.actions.hasAction);
    }

    public get vars() {
        return {
            type: commander.type,
            path: commander.path,
            example: commander.example,
            verbose: commander.verbose,
        }
    }

}

export default CliArguments;
