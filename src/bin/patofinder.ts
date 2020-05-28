#!/usr/bin/env node

import SearchType from "../interfaces/search-type";
import TypeLogs from "../interfaces/type-logs";
import TypePath from "../interfaces/type-path";
import Arguments from "../models/arguments";
import find from "../public/find";

const args = new Arguments();

args.create();
args.check();
args.output();

async function main(): Promise<void> {

    args.config();
    args.info();

    const verbose: boolean = args.verbose;
    const type: SearchType = args.type;
    const path: TypePath = args.path;

    logger.cli(verbose);

    const result = await find(path, type);

    logger.force(result);

}

if (!args.hasError) {
    main();
}
