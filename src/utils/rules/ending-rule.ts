import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigRule from "../../interfaces/config-rule";
import TypePath from "../../interfaces/type-path";

export function endingRule(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => {

        const extensionsString = `(${extensions.join('|')})`;
        const extensionsRegex = new RegExp("\." + extensionsString + "$");
        const extensionsCheck = extensionsRegex.test(path);

        resolve(extensionsCheck);

    });

}

export default endingRule as ConfigRule;
