import TypeExtension from "./type-extension";
import EnvironmentDefault from "./environment-default";
import FilterRule from './filter-rule';
import FilterPreferences from "./filter-preferences";

export interface EnvironmentMiner extends EnvironmentDefault {
    analyzer: 'miner';
    extensions: TypeExtension[];
    preferences: FilterPreferences;
    filterRule: FilterRule;
}

export default EnvironmentMiner;
