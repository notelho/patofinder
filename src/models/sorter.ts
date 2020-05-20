import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";

export class Sorter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    apply(paths: TypePath[]): TypePath[] {



        // ignore paths

        return paths;
    }
}

export default Sorter;
