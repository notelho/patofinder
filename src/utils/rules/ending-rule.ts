import ConfigRule from "../../interfaces/config-rule";
import RuleData from "../../interfaces/rule-data";

export function endingRule(data: RuleData): Promise<boolean> {

    const extensions = data.extensions
    const path = data.searchPath;

    return new Promise(resolve => {

        const extensionsString = `(${extensions.join('|')})`;
        const extensionsRegex = new RegExp("\." + extensionsString + "$");
        const extensionsCheck = extensionsRegex.test(path);

        resolve(extensionsCheck);

    });

}

export default endingRule as ConfigRule;
