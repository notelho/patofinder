import TypeLogs from "../interfaces/type-logs";
import Loader from './loader';
import chalk from 'chalk';

class Logger {

    private type: TypeLogs;

    private loader: Loader;

    constructor() {
        this.type = 'none';
        this.loader = new Loader()
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

    public log(message: string, status?: string): void {

        const log = this.format(message, status);

        if (this.type === 'verbose') {
            this.info(log);
        } else if (this.type === 'cli') {
            this.update(log);
        }

    }

    private format(message: string, status?: string): string {

        let payload: string = message;

        const now: Date = new Date();
        const date: string = now.toTimeString();
        const time: string = date.split(' ')[0];
        const dash: string = this.loader.next();

        const hour: string = chalk.blue(time);
        const loader: string = chalk.red(dash);

        const available = [
            { name: 'success', action: (msg: string) => chalk.green(msg) },
            { name: 'warn', action: (msg: string) => chalk.yellow(msg) },
            { name: 'danger', action: (msg: string) => chalk.red(msg) },
        ];

        if (status) {
            const name = available.map(av => av.name);
            const index = name.indexOf(status);
            if (index !== -1) {
                payload = available[index].action(message);
            }
        }

        return `${loader} | [${hour}] ${payload}`;
    }

    private info(message: string) {
        console.log(message);
    }

    private update(message: string): void {

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
