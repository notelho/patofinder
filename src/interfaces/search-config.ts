
import TypeExtension from "./type-extension";
import SearchDepth from './search-depth';

import SearchType from "./search-type";
import TypeLevel from "./type-level";

import ConfigSort from './config-sort'
import ConfigIgnore from './config-ignore'
import ConfigFilter from './config-filter'

export interface SearchConfig {

    type: SearchType;

    depth: SearchDepth;

    limit: TypeLevel;

    extensions: TypeExtension[];

    sort: ConfigSort;

    ignore: ConfigIgnore;

    rule: ConfigFilter;

}

export default SearchConfig;
