#!/usr/bin/env node

import SearchType from "../interfaces/search-type";
import TypeLogs from "../interfaces/type-logs";
import TypePath from "../interfaces/type-path";
import Arguments from "../models/arguments";
import find from "../public/find";

const args = new Arguments();

args.create();

args.check();

async function main(): Promise<void> {

    args.logo();

    args.config();

    const type: SearchType = args.type;

    const path: TypePath = args.path;

    const logs: TypeLogs = args.type;

    // logger.config(logs);

    const result = await find(path, type);

    // logger.force(result);
    // logger.log(result);

}

if (!args.hasError) {
    main();
}
