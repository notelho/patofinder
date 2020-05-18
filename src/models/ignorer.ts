import TypePath from "../interfaces/type-path";
import SearchType from "../interfaces/search-type";
import TypeExtensions from "../interfaces/type-extensions";

export class Ignorer {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    from(paths: TypePath[]) {


        return this;
    }

}

export default Ignorer;
