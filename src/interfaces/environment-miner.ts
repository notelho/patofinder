import EnvironmentDefault from "./environment-default";
import FilterRule from './filter-rule';

export interface EnvironmentMiner extends EnvironmentDefault {
    analyzer: 'miner';
    rule: FilterRule;
}

export default EnvironmentMiner;
