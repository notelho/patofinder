import ConfigRule from "../../interfaces/config-rule";
import RuleData from "../../interfaces/rule-data";

export function includesRule(data: RuleData): Promise<boolean> {

    const extensions = data.extensions
    const path = data.searchPath;

    return new Promise(resolve => {

        for (const extension of extensions) {
            if (path.includes(extension)) {
                resolve(true);
            }
        }

        resolve(false);

    });

}

export default includesRule as ConfigRule;
