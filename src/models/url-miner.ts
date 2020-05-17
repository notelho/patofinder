import UrlAnalyzer from "./url-analyzer";
import SearchType from "../interfaces/search-type";

export class UrlMiner extends UrlAnalyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: string[]): Promise<string[]> {



        return []

    }

}

export default UrlMiner;
