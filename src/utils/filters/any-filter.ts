import SearchType from "../../interfaces/search-type";
import TypePath from "../../interfaces/type-path";

export function anyFilter(path: TypePath, type: SearchType): Promise<boolean> {

    return new Promise(resolve => resolve(true));

}

export default anyFilter;
