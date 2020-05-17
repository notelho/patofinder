import SearchType from "../interfaces/search-type";
import SearchEnvironment from "../interfaces/search-environment";

export abstract class UrlAnalyzer {

    protected type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public abstract async run(paths: string[]): Promise<string[]>;

}

export default UrlAnalyzer;
