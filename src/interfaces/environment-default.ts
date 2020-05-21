import FilterPreferences from "./filter-preferences";
import TypeExtension from "./type-extension";
import TypeAnalyzer from "./type-analyzer";

export interface EnvironmentDefault {
    analyzer: TypeAnalyzer;
    extensions: TypeExtension[];
    preferences: FilterPreferences;
}

export default EnvironmentDefault;
