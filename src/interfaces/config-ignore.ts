import TypeExtension from "./type-extension";
import TypeFragment from "./type-fragment";
import SearchType from "./search-type";

export interface ConfigIgnore {

    types: SearchType[];

    extensions: TypeExtension[];

    keys: TypeFragment[];

}

export default ConfigIgnore;
