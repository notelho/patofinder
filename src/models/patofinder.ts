import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
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

    public async find(): Promise<TypePath[]> {

        try {

            const type = this.type;
            const url = this.url;

            const dictionary = new Dictionary(type);
            const scanner = new Scanner(url);

            const tester = (dictionary.analyzer === 'filter') ?
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
