import SearchType from "../interfaces/search-type";

export abstract class UrlAnalyzer {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public abstract run(paths: string[]): string[];

}

export default UrlAnalyzer;
