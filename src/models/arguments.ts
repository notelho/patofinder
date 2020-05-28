import absolutePathRegexp from '../utils/regexp/absolute-path';
import searchTypeRegexp from '../utils/regexp/search-type';

import cliPackage from '../utils/cli/cli-package';
import cliLogo from '../utils/cli/cli-logo';

import TypePath from '../interfaces/type-path';
import TypeLogs from '../interfaces/type-logs';
import SearchType from '../interfaces/search-type';

import find from '../public/find';

import commander from 'commander';
import chalk from 'chalk';

export class Arguments {

    private result: TypePath[];

    public readonly type: SearchType;

    public readonly path: TypePath;

    public readonly example: boolean;

    public readonly verbose: boolean;

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
    ]

    private actions = [

        { name: 'showHelp', action: () =>  }

    ]

    constructor() {
        this.path = commander.path;
        this.type = commander.type;
        this.example = commander.example;
        this.verbose = commander.verbose;
        this.result = [];
    }

    public create() {

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

        const path = this.path;
        const type = this.type;
        const example = this.example;
        const verbose = this.verbose;

        // take index from errors
        // map actions?

        const outputs: string[] = [];

        if (!path && !type) {

            this.error = true;

            commander.outputHelp();

        } else {

            if (!path) {
                outputs.push(notFoundPath);
            } else if (!path.match(absolutePathRegexp)) {
                outputs.push(invalidPath);
            }

            if (!type) {
                outputs.push(notFoundType);
            } else if (!type.match(searchTypeRegexp)) {
                outputs.push(invalidType);
            }

            for (const output of outputs) {
                console.log(chalk.red(output));
            }

        }
    }

    public output() {

        // map errors and log messages or run actions

    }

    public config(): void {

    }

    public info() {

        cliLogo();

        console.log('duck');
        console.log('===================');
        console.log('begin search with url aopkfapekffkeaofk and type qpwfkwofkq');



    }

    private throw(error) {

    }

    public get hasError() {
        return this.errors.map(error => error.checked).indexOf(true) === -1;
    }

}

export default Arguments;
