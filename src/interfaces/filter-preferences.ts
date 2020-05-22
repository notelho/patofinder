import TypeExtension from "./type-extension";
import SearchType from "./search-type";
import TypeFragment from "./type-fragment";

export interface FilterPreferences {
    ignoringTypes: SearchType[];
    ignoringExtensions: TypeExtension[];
    ignoringKeys: TypeFragment[];
    searchFor: TypeFragment[];
}

export default FilterPreferences;
