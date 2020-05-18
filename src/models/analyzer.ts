import SearchType from "../interfaces/search-type";
import TypePaths from "../interfaces/type-paths";

export abstract class Analyzer {

    protected type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public abstract async run(paths: TypePaths): Promise<TypePaths>;

}

export default Analyzer;
