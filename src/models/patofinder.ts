import searchDictionary from '../utils/search-dictionary';
import SearchUrl from "../interfaces/search-url";
import SearchType from "../interfaces/search-type";
import UrlFilter from "./url-filter";
import UrlMiner from "./url-miner";
import Scanner from "./scanner";

export class Patofinder {

    private url: SearchUrl;

    private type: SearchType;

    constructor(url: SearchUrl, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public async find(): Promise<string[]> {

        try {

            const type = this.type;
            const dictionary = searchDictionary;
            const environment = dictionary[type];
            const analyzer = environment.analyzer;

            const scanner = new Scanner(this.url);

            const tester = (analyzer === 'filter') ?
                new UrlFilter(type) :
                new UrlMiner(type);

            const paths = await scanner.getPaths();
            const matches = await tester.run(paths);

            return matches;

        } catch (error) {

            throw error;

        }

    }

}

export default Patofinder;
