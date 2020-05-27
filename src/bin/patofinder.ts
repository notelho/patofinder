#!/usr/bin/env node

import Arguments from "../models/arguments";

async function main() {

    const args = new Arguments();

    args.create();
    args.check();

    if (args.hasErrors()) {

        args.showErrors();

    } else {

        args.showLogo();

        args.showInfo();

        await args.app();

        args.showResult();

    }

}

main();
