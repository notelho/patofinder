import TypeSearch from "../interfaces/type-search";
import TypePath from "../interfaces/type-path";
import Patofinder from "../models/patofinder";

export async function find(path: TypePath, type: TypeSearch): Promise<TypePath[]> {

    return await new Patofinder(type).find(path);

}

export default find;
