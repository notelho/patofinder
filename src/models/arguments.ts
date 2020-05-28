import absolutePathRegexp from '../utils/regexp/absolute-path';
import searchTypeRegexp from '../utils/regexp/search-type';
import cliPackage from '../utils/cli/cli-package';
import cliLogo from '../utils/cli/cli-logo';
import TypePath from '../interfaces/type-path';
import find from '../public/find';
import commander from 'commander';

export class Arguments {

    private error: boolean;

    private result: TypePath[];

    private options = [
        { flags: '-P, --path <url>', description: 'specifies the path for scan [required]' },
        { flags: '-T, --type <type>', description: 'specifies the type of search [required]' },
        { flags: '-v, --verbose', description: 'enable application search logs (cli only)' },
        // -V, --version
        // -e, --examples
        // -H, --help
    ];

    constructor() {
        this.error = false;
        this.result = [];
    }

    public create() {

        commander.version(cliPackage.version as string);
        commander.description(`${cliPackage.description} (${cliPackage.homepage})`);

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

        const output: string[] = [];

        if (!path && !type) {

            commander.outputHelp();

        } else {

            if (!path) {
                output.push(notFoundPath);
            } else if (!path.match(absolutePathRegexp)) {
                output.push(invalidPath);
            }

            if (!type) {
                output.push(notFoundType);
            } else if (!type.match(searchTypeRegexp)) {
                output.push(invalidType);
            }

        }

        this.error = (output.length === 0);

    }

    public get hasError() {
        return this.error;
    }

    public showHelp(): void {

        //

    }

    public showLogo(): void {

        cliLogo();

    }

    public showInfo() {

        //

    }

    public showResult() {

        //

    }

    public async app() {

        const path = commander.path;
        const type = commander.type;
        const logs = commander.verbose;

        // logger.logs(logs);

        const result = await find(path, type);

        this.result = result;

    }


}

export default Arguments;
