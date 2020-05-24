import TypePath from "./type-path";
import SearchType from "./search-type";

export type FilterRule = (path: TypePath, type: SearchType) => Promise<boolean>;

export default FilterRule;
