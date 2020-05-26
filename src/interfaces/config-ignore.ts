import TypeExtension from "./type-extension";
import TypeFragment from "./type-fragment";
import SearchType from "./search-type";

export interface ConfigIgnore {

    extensions: TypeExtension[];

    keys: TypeFragment[];

    types: SearchType[];

}

export default ConfigIgnore;
