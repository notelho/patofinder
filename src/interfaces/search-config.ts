import ConfigExtensions from "./config-extensions";
import ConfigIgnore from './config-ignore';
import ConfigRule from './config-rule';
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

    rules: ConfigRule[];

}

export default SearchConfig;
