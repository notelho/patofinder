import Analyzer from "./analyzer";
import SearchType from "../interfaces/search-type";

export class Finder {

    analyzer: Analyzer;

    type: SearchType;

    constructor(type: SearchType) {


        this.type = type;

        this.analyzer = new Analyzer()

    }

    public async find(urls: string[]): Promise<string[]> {


        return []

    }

}
