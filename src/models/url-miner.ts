import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Regulator from "./regulator";
import Analyzer from "./analyzer";
import Searcher from "./searcher";
import Ignorer from "./ignorer";

export class UrlMiner extends Analyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const type = this.type;

        const breakpoint = 5;
        const ignorer = new Ignorer(type);
        const regulator = new Regulator(type);
        // , ignorer
        const searcher = new Searcher(url, breakpoint);

        // const matches: string[] = [];

        let matches: string[] = [];
        let searchPaths: string[] = [];
        // let filteredPaths: string[] = [];

        do {

            searchPaths = await searcher.find();

            // filteredPaths = ignorer.from(searchPaths);
            // matches = await regulator.apply(filteredPaths);

            matches = await regulator.apply(searchPaths);

            // matches = searchPaths;

        } while (!searcher.finished && matches.length === 0);

        return matches;

    }

}

export default UrlMiner;
