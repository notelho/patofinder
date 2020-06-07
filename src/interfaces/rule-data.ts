import ConfigExtensions from "./config-extensions";
import TypePath from "./type-path";

export interface RuleData {

    readonly extensions: ConfigExtensions;

    readonly searchPath: TypePath;

    readonly basePath: TypePath;

}

export default RuleData;
