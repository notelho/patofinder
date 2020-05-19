import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import UrlFilter from "./url-filter";
import UrlMiner from "./url-miner";

export class Patofinder {

    public readonly url: SearchUrl;

    public readonly type: SearchType;

    constructor(url: SearchUrl, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public async find(): Promise<TypePath[]> {

        try {

            const type = this.type;
            const url = this.url;

            const dictionary = new Dictionary(type);

            const analyzer = (dictionary.analyzer === 'filter') ?
                new UrlFilter(url, type) :
                new UrlMiner(url, type);

            const matches = await analyzer.run();

            return matches;

        } catch (error) {

            throw error;

        }

    }

}

export default Patofinder;
