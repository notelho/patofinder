import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Regulator from "./regulator";
import Analyzer from "./analyzer";
import Searcher from "./searcher";
import PathStorage from "./path-storage";

export class UrlMiner extends Analyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const type = this.type;
        const limit = 3;

        const storage = new PathStorage(url, type);
        const regulator = new Regulator(type);
        const searcher = new Searcher(limit);

        let match: TypePath | undefined;
        let search: SearchLevel | undefined;

        let paths: SearchLevel[];

        do {

            search = storage.get();

            if (search) {

                match = await regulator.apply(search);

                if (!match) {

                    paths = await searcher.apply(search);

                    storage.put(paths);

                }

            }

        } while (!storage.empty && !match);

        if (match) {
            return [match]
        }

        return [];
    }

}

export default UrlMiner;
