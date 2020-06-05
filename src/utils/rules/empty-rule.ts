import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigRule from "../../interfaces/config-rule";
import TypePath from "../../interfaces/type-path";

export function emptyRule(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => resolve(true));

}

export default emptyRule as ConfigRule;
