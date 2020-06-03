import ConfigExtensions from "./config-extensions";
import ConfigIgnore from './config-ignore';
import ConfigFilter from './config-filter';
import ConfigSort from './config-sort';
import SearchDepth from './search-depth';
import TypeSearch from "./type-search";
import TypeLevel from "./type-level";

export interface SearchConfig {
    type: TypeSearch;
    depth: SearchDepth;
    limit: TypeLevel;
    extensions: ConfigExtensions;
    sort: ConfigSort;
    ignore: ConfigIgnore;
    filter: ConfigFilter;
}

export default SearchConfig;
