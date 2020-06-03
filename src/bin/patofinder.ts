#!/usr/bin/env node

import CliArguments from "../utils/cli/cli-arguments";
import TypeSearch from "../interfaces/type-search";
import TypePath from "../interfaces/type-path";
import logger from "../models/logger";
import find from "../public/find";

const args = new CliArguments();

args.create();
args.output();

async function main(): Promise<void> {

    args.info();

    const path: TypePath = args.vars.path;
    const type: TypeSearch = args.vars.type;
    const verbose: boolean = args.vars.verbose;

    logger.cli(verbose);

    const result = await find(path, type);
    const paths = result.join('\n');

    logger.success(paths);

}

if (args.canRun) {
    main();
}
