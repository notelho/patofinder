import absolutePathRegexp from '../utils/regexp/absolute-path';
import searchTypeRegexp from '../utils/regexp/search-type';
import cliPackage from '../utils/cli/cli-package';
import cliLogo from '../utils/cli/cli-logo';
import TypePath from '../interfaces/type-path';
import find from '../public/find';
import commander from 'commander';
import chalk from 'chalk';

export class Arguments {

    private error: boolean;

    private result: TypePath[];

    // const path = commander.path;
    // const type = commander.type;
    // const logs = commander.verbose;

    private options = [
        { flags: '-P, --path <url>', description: 'specifies the path for scan [required]' },
        { flags: '-T, --type <type>', description: 'specifies the type of search [required]' },
        { flags: '-v, --verbose', description: 'enable application search logs (cli only)' },
        // -e, --examples
        // -V, --version
        // -H, --help
    ];

    private errors = [

        // { name: 'notfoundpath ', message: 'path not...', checked: true/false }

    ]

    constructor() {
        this.error = false;
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

        const path: string = commander.path;
        const type: string = commander.type;
        const examples: boolean = commander.examples;
        const logs: boolean = commander.verbose;

        const notFoundPath = 'Path not found. Use --path and input a valid url';
        const invalidPath = 'Invalid path provided. Try again with another one';
        const notFoundType = 'Type not found. Use --type and input a valid type';
        const invalidType = 'Invalid type provided. Use --example for more details';

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

            this.error = (outputs.length !== 0);

            for (const output of outputs) {
                console.log(chalk.red(output));
            }

        }

    }

    public get hasError() {
        return this.error;
    }

    public showLogo(): void {

        cliLogo();

    }

    public showInfo() {

        console.log('afu afu afu');

    }

    public async app() {

        const path = commander.path;
        const type = commander.type;
        const logs = commander.verbose;

        // logger.logs(logs);

        const result = await find(path, type);

        console.log(result);


        this.result = result;

    }


}

export default Arguments;
