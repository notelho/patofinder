import SearchFilter from "./search-filter";

export interface SearchEnvironment {

    analyzer: SearchFilter;

    extensions: string[];

}

export default SearchEnvironment;
