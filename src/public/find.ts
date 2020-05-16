import SearchUrl from "../interfaces/search-url";
import SearchType from "../interfaces/search-type";
import Patofinder from "../models/patofinder";

export async function find(url: SearchUrl, type: SearchType) {

    return await new Patofinder(url, type).find();

}

export default find;
