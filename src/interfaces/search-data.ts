import FilterPreferences from "./filter-preferences";
import TypeExtension from "./type-extension";
import SearchDepth from './search-depth';
import FilterRule from "./filter-rule";
import SearchType from "./search-type";
import TypeLevel from "./type-level";

export interface SearchData {

    type: SearchType;

    depth: SearchDepth;

    level: TypeLevel;

    extensions: TypeExtension[];

    preferences: FilterPreferences;

    rule: FilterRule;

}

export default SearchData;
