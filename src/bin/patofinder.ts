#!/usr/bin/env node

import Arguments from "../models/arguments";

const args = new Arguments();

args.create();

async function main(): Promise<void> {
    if (!args.hasError) {
        args.showLogo();
        args.showInfo();
        await args.app();
    }
}

main();
