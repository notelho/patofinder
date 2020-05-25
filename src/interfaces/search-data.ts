import FilterPreferences from "./filter-preferences";
import TypeExtension from "./type-extension";
import SearchDepth from './search-depth';
import FilterRule from "./filter-rule";
import SearchType from "./search-type";

export interface SearchData {

    type: SearchType;

    depth: SearchDepth;

    extensions: TypeExtension[];

    preferences: FilterPreferences;

    rule: FilterRule;

}

export default SearchData;
