#!/usr/bin/env node

import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Arguments from "../models/arguments";
import find from "../public/find";

const args = new Arguments();

args.create();
args.save();
args.check();
args.output();

async function main(): Promise<void> {

    args.info();

    const path: TypePath = args.vars.path;
    const type: SearchType = args.vars.type;
    const verbose: boolean = args.vars.verbose;

    // logger.cli(verbose);

    const result = await find(path, type);

    // logger.force(result);
    console.log(result);

}

if (args.canRun) {
    main();
}
