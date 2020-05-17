import SearchType from "../interfaces/search-type";

export abstract class UrlAnalyzer {

    protected type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public abstract async run(paths: string[]): Promise<string[]>;

}

export default UrlAnalyzer;
