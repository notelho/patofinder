import TypeExtension from "./type-extension";
import EnvironmentDefault from "./environment-default";

export interface EnvironmentFilter extends EnvironmentDefault {
    analyzer: 'filter';
    extensions: TypeExtension[];
}

export default EnvironmentFilter;
