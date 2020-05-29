import TypeLogs from "../interfaces/type-logs";


export const logger = new (class Logger {

    type: TypeLogs

    constructor() {
        this.type = 'none';
    }

    cli(verbose: boolean): void {

        //


    }

    force(message: string): void {

        //

    }

    log(message: string): void {

        //

    }

    update(message: string) {

        // logger.config(logs);
        // logger.force(result);
        // logger.log(result);

        // process.stdout.write("Hello, World");
        // process.stdout.clearLine();
        // process.stdout.cursorTo(0);
        // process.stdout.write("\n"); // end the line

    }


})();

export default logger;
