import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Patofinder from "../models/patofinder";

export async function find(url: TypePath, type: SearchType) {

    return await new Patofinder(url, type).find();

}

export default find;
