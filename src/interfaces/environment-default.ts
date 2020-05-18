import TypeAnalyzer from "./type-analyzer";
import TypeExtensions from "./type-extensions";

export interface EnvironmentDefault {

    analyzer: TypeAnalyzer;

    extensions: TypeExtensions;

}

export default EnvironmentDefault;
