import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";

export abstract class Analyzer {

    protected readonly url: SearchUrl;

    protected readonly type: SearchType;

    constructor(url: SearchUrl, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public abstract async run(): Promise<TypePath[]>;

}

export default Analyzer;
