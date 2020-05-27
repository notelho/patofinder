import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Patofinder from "../models/patofinder";

export async function find(path: TypePath, type: SearchType, verbose: boolean) {

    return await new Patofinder(type).find(path);

}

export default find;
