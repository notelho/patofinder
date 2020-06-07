import ConfigRule from "../../interfaces/config-rule";
import RuleData from "../../interfaces/rule-data";

export function emptyRule(data: RuleData): Promise<boolean> {

    return new Promise(resolve => resolve(true));

}

export default emptyRule as ConfigRule;
