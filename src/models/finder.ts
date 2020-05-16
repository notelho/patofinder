import SearchType from "../interfaces/search-type";
import UrlAnalyzer from "./url-analyzer";

export class Finder {

    private analyzer: UrlAnalyzer;

    private type: SearchType;

    constructor(type: SearchType) {

        this.type = type;

        // this.miner = new UrlMiner();

        // this.filter = new UrlFilter();

    }

    public async find(urls: string[]): Promise<string[]> {


        return []

    }

}
