import TypeExtension from "./type-extension";
import SearchType from "./search-type";

export interface FilterPreferences {
    ignoringTypes: SearchType[];
    ignoringExtensions: TypeExtension[];
    ignoringKeys: string[];
    searchFor: string[];
}

export default FilterPreferences;
