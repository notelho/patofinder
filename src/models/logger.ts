// logger.config(logs);
// logger.force(result);
// logger.log(result);

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


})();

export default logger;
