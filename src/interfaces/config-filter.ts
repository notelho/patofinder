import TypePath from "./type-path";
import SearchType from "./search-type";

export type ConfigFilter = (path: TypePath, type: SearchType) => Promise<boolean>;

export default ConfigFilter;
