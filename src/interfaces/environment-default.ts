import TypeAnalyzer from "./type-analyzer";
import TypeExtension from "./type-extension";

export interface EnvironmentDefault {
    analyzer: TypeAnalyzer;
    extensions: TypeExtension[];
}

export default EnvironmentDefault;
