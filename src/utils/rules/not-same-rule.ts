import ConfigRule from "../../interfaces/config-rule";
import RuleData from "../../interfaces/rule-data";

export function notSameRule(data: RuleData): Promise<boolean> {

    const searchPath = data.searchPath;
    const basePath = data.basePath;

    return new Promise(resolve => {

        const includePath = searchPath.includes(basePath)
        const samePath = searchPath === basePath;

        if (samePath || includePath) {
            resolve(false);
        }

        resolve(true);

    });

}

export default notSameRule as ConfigRule;
