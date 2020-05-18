import SearchFilter from "./search-filter";

export interface SearchEnvironment {

    analyzer: SearchFilter;

    extensions: string[];

    rule?: (data?: any) => boolean;

}

export default SearchEnvironment;
