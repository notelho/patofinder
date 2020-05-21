import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Regulator from "./regulator";
import Analyzer from "./analyzer";
import Searcher from "./searcher";

export class UrlMiner extends Analyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const type = this.type;
        const limit = 3;

        const regulator = new Regulator(type);
        const searcher = new Searcher(url, type, limit);

        let paths: string[] = [];
        let matches: string[] = [];

        do {

            paths = await searcher.apply();

            matches = await regulator.apply(paths);

        } while (!searcher.finished && matches.length === 0);

        return matches;
    }

}

export default UrlMiner;
