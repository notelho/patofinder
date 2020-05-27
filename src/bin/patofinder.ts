#!/usr/bin/env node

import Arguments from "../models/arguments";

const args = new Arguments();


args.create();

args.check();

if (args.hasErrors()) {

    console.log(args.getErrors());

} else {



    // args.clear();

    // await args.app() etc etc

    // commander.outputHelp(); // args . show help?


}
