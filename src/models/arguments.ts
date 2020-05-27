import pkg from '../../package.json';
import find from '../public/find';
import commander from 'commander';

export class Arguments {

    private description: string;

    private link: string;

    private version: string;

    private errors: string[];

    constructor() {
        this.description = pkg.description;
        this.version = pkg.version;
        this.link = pkg.homepage;
    }

    public getErrors() {
        return this.errors.map(error => `> ${error}\n`).join('');
    }

    public hasErrors() {
        return (this.errors.length > 0);
    }

    public create() {

        commander
            .version(this.version)
            .description(`${this.description} (${this.link})`)
            .option('-P, --path <url>', 'Specifies the path for scan [required]')
            .option('-T, --type <type>', 'Specifies the type of search [required]')
            .option('-v, --verbose', 'Enable application search logs (cli only)')
            .parse(process.argv);

    }

    public check() {

        if (!commander.path || !commander.type) {

            console.log('  - path');
            console.log(commander.path);

        }

        if (!commander.type) {

            console.log('  - type');
            console.log(commander.type);

        }

        if (commander.verbose) {

            console.log('  - verbose');
            console.log(commander.verbose);

        }

    }

    public async app() {

        // find

    }


}

export default Arguments;
