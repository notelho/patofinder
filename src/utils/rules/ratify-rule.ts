import SearchType from "../../interfaces/search-type";
import TypePath from "../../interfaces/type-path";

export function ratifyRule(path: TypePath, type: SearchType): Promise<boolean> {

    return new Promise(resolve => resolve(true));

}

export default ratifyRule;
