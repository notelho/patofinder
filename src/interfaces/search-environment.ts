import SearchFilter from "./search-filter";

export interface SearchEnvironment {

    analyzer: SearchFilter;

    breakpoint?: number;

    extensions?: string[];

}

export default SearchEnvironment;
