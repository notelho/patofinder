import TypeExtension from "./type-extension";
import TypePath from "./type-path";
import SearchType from "./search-type";

export interface FilterPreferences {

    ignoringTypes: SearchType[];

    ignoringKeys: string[];

    // TypeExtension[] | TypePath | string[];

    // .ignoreSearchType(['img', "css", "php"])
    // .ignoreCustomTypes(['.min.js', '.min', '.json'])
    // .ignoreSearchKeys(['google', 'analytics', 'store', 'apple', 'cdnjs', 'cloudflare', 'jquery', 'ajax', 'm2d'])
    // .orderByKeys(['stream', 'player', ';'])
    // .getSourcePaths();


}

export default FilterPreferences;
