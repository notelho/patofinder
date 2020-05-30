import TypeLogs from "../interfaces/type-logs";
import chalk from 'chalk';

class Logger {

    private type: TypeLogs;

    constructor() {
        this.type = 'none';
    }

    public cli(verbose: boolean): void {
        this.type = verbose ? 'verbose' : 'cli';
    }

    public error(message: string): void {
        console.log(chalk.red(message));
    }

    public force(message: string): void {
        console.log(chalk.yellow(message));
    }

    public log(message: string): void {
        if (this.type === 'verbose') {
            this.info(message);
        } else if (this.type === 'cli') {
            this.update(message);
        }
    }

    private info(message: string) {
        console.log(chalk.blue(message));
    }

    private update(message: string) {

        // logger.config(logs);
        // logger.force(result);
        // logger.log(result);

        // process.stdout.write("Hello, World");
        // process.stdout.clearLine();
        // process.stdout.cursorTo(0);
        // process.stdout.write("\n"); // end the line

    }

}

export const logger = new Logger();

export default logger;
