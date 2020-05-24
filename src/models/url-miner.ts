import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import PathStorage from "./path-storage";
import UrlAnalyzer from "./url-analyzer";

export class UrlMiner extends UrlAnalyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const type = this.type;
        const limit = 3;

        const storage = new PathStorage(url, type);
        const searcher = new LevelSearcher(limit);
        const filter = new LevelFilter(type);

        let paths: SearchLevel[];
        let match: TypePath | undefined;
        let search: SearchLevel | undefined;

        do {

            search = storage.get();

            if (search) {
                paths = await searcher.apply(search);
                match = await filter.apply(search);
                storage.put(paths);
            }

        } while (!storage.empty && !match);

        return match ? [match] : [];
    }

}

export default UrlMiner;
