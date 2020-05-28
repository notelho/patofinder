#!/usr/bin/env node

import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Arguments from "../models/arguments";
import Patofinder from "../models/patofinder";
import find from "../public/find";

const args = new Arguments();

args.create();

args.check();

async function main(): Promise<void> {

    args.logo();

    args.config();

    const type = args.type;

    const path = args.path;

    const result = await find(path, type);

    // logger.force(result);
    // logger.log(result);

}

if (!args.hasError) {
    main();
}
