import TypeExtensions from "./type-extensions";
import EnvironmentDefault from "./environment-default";

export interface EnvironmentFilter extends EnvironmentDefault {

    analyzer: 'filter';

    extensions: TypeExtensions;

}

export default EnvironmentFilter;
