import TypePath from "../interfaces/type-path";
import SearchType from "../interfaces/search-type";

export class Ignorer {

    private type: SearchType;

    private history: TypePath[];

    constructor(type: SearchType) {
        this.type = type;
        this.history = [path];
    }

    from(paths: TypePath[]): TypePath[] {


        // ignore paths

        return [];
    }

    orderBy(paths: TypePath[]): TypePath[] {

        return []
    }

}

export default Ignorer;
