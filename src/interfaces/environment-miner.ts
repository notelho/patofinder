import TypeExtensions from "./type-extensions";
import EnvironmentDefault from "./environment-default";
import FilterRule from './filter-rule';
import FilterPreferences from "./filter-preferences";

export interface EnvironmentMiner extends EnvironmentDefault {

    analyzer: 'miner';

    extensions: TypeExtensions;

    ignore: FilterPreferences;

    filterRule: FilterRule;

}

export default EnvironmentMiner;
