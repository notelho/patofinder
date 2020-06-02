import TypeLogs from "../interfaces/type-logs";
import Loader from './loader';
import chalk from 'chalk';

class Logger {

    private loader: Loader;

    private type: TypeLogs;

    private fixed: boolean;

    constructor() {
        this.loader = new Loader();
        this.type = 'none';
        this.fixed = false;
    }

    public cli(verbose: boolean): void {
        this.type = verbose ? 'verbose' : 'cli';
    }

    public success(message: string): void {
        this.output(chalk.green(message), 'verbose');
    }

    public warn(message: string): void {
        this.output(chalk.yellow(message), 'verbose');
    }

    public error(message: string): void {
        this.output(chalk.red(message), 'verbose');
    }

    public log(message: string, status?: string): void {
        this.output(this.format(message, status));
    }

    private output(message: string, force?: TypeLogs): void {

        const type = force ? force : this.type;
        const fixed = this.fixed;

        if (fixed) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
        }

        if (type === 'verbose') {
            this.fixed = false;
            console.log(message);
        } else if (type === 'cli') {
            this.fixed = true;
            process.stdout.write(message);
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
            { name: 'error', action: (msg: string) => chalk.red(msg) },
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

}

export const logger = new Logger();

export default logger;
