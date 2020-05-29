import cliPackage from './cli-package';
import commander from 'commander';

export class CliOptions {

    private readonly version: string;

    private readonly description: string;

    private readonly homepage: string;

    private readonly options = [
        { flags: '-P, --path <url>', description: 'specifies the path for scan [required]' },
        { flags: '-T, --type <type>', description: 'specifies the type of search [required]' },
        { flags: '-v, --verbose', description: 'enable application search logs (cli only)' },
        { flags: '-e, --example', description: 'show command line examples (cli only)' },
    ];

    constructor() {
        this.version = cliPackage.version;
        this.description = cliPackage.description;
        this.homepage = cliPackage.homepage;
    }

    public create(): void {

        commander.version(this.version);
        commander.description(`${this.description} (${this.homepage})`);

        for (const option of this.options) {
            commander.option(option.flags, option.description);
        }

        commander.parse(process.argv);

    }

}

export default CliOptions;
