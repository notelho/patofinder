import TypeExtensions from "./type-extensions";
import EnvironmentDefault from "./environment-default";

export interface EnvironmentFilter extends EnvironmentDefault {

    type: 'filter';

    extensions: TypeExtensions;

}

export default EnvironmentFilter;
