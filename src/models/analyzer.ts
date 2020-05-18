import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";

export abstract class Analyzer {

    protected type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public abstract async run(paths: TypePath[]): Promise<TypePath[]>;

}

export default Analyzer;
