import RuleData from "./rule-data";

export type ConfigRule = (data: RuleData) => Promise<boolean>;

export default ConfigRule;
