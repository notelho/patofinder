import TypePath from '../interfaces/type-path';
import pkg from '../../package.json';
import find from '../public/find';
import commander from 'commander';

export class Arguments {

    private description: string;

    private link: string;

    private version: string;

    private result: TypePath[];

    private errors: string[];

    private options = [
        { flags: '-P, --path <url>', description: 'Specifies the path for scan [required]' },
        { flags: '-T, --type <type>', description: 'Specifies the type of search [required]' },
        { flags: '-v, --verbose', description: 'Enable application search logs (cli only)' },
    ];

    constructor() {
        this.description = pkg.description;
        this.version = pkg.version;
        this.link = pkg.homepage;
        this.result = [];
        this.errors = [];
    }

    public create() {
        commander.version(this.version);
        commander.description(`${this.description} (${this.link})`);

        for (const option of this.options) {
            commander.option(option.flags, option.description);
        }

        commander.parse(process.argv);
    }

    public check() {

        // if (!commander.path || !commander.type) {
        //     console.log('  - path');
        //     console.log(commander.path);
        // }

        // if (!commander.type) {
        //     console.log('  - type');
        //     console.log(commander.type);
        // }

        // if (commander.verbose) {
        //     console.log('  - verbose');
        //     console.log(commander.verbose);
        // }

    }

    public hasErrors() {
        return (this.errors.length > 0);
    }

    public showLogo(): void {

    }

    public showInfo(): void {

    }

    public showResult() {

    }

    public showErrors() { // : void
        return this.errors.map(error => `> ${error}\n`).join('');
    }

    public showHelp() {

        commander.outputHelp();

    }

    public async app() {

        const path = commander.path;
        const type = commander.type;
        const verbose = commander.verbose;

        // logger.define(verbose);

        const result = await find(path, type);

        this.result = result;

    }


}

export default Arguments;
