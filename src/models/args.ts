// import { ArgumentParser, ArgumentParserOptions } from "argparse";

// import { IArgs, IDefaultArgs } from '../interfaces';

// export class Args extends ArgumentParser {

//     private _args: IArgs;

//     constructor(options?: ArgumentParserOptions) {
//         super(options);
//         this.default();
//         this.parse();
//     }

//     public default(): void {
//         this.getDefaultArgs().forEach((value: IDefaultArgs, key) => {
//             this.addArgument(
//                 value.keys,
//                 value.options
//             )
//         });
//     }

//     private parse() {
//         const args = super.parseArgs();

//         Object.keys(args).forEach((key) => {
//             if (parseInt(args[key])) {
//                 args[key] = parseInt(args[key]);
//             }
//         });

//         this._args = args;
//     }

//     private getDefaultArgs(): IDefaultArgs[] {
//         const args: IDefaultArgs[] = [
//             {
//                 keys: [ "-dd", "--default-default" ],
//                 options: {
//                     help: "The default default default (required)",
//                     dest: "defaultVar",
//                     required: true
//                 }
//             },
//             {
//                 keys: [ "-ee", "--error-error" ],
//                 options: {
//                     help: "The error error error (required)",
//                     dest: "errorVar",
//                     required: true
//                 }
//             },
//             {
//                 keys: [ "-st", "--status" ],
//                 options: {
//                     help: "The status",
//                     dest: "status",
//                     type: "int"
//                 }
//             },
//         ];

//         return args;
//     }

//     get args() {
//         return this._args;
//     }

// }
