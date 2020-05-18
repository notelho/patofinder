import TypeExtensions from "./type-extensions";
import EnvironmentDefault from "./environment-default";
import FilterRule from './filter-rule';

export interface EnvironmentMiner extends EnvironmentDefault {

    analyzer: 'miner';

    extensions: TypeExtensions;

    filterRule: FilterRule;

}

export default EnvironmentMiner;
