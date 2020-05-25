import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from "../interfaces/type-level";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import PathStorage from "./path-storage";

export class PathAnalyzer {

    private readonly url: TypePath;

    private readonly limit: TypeLevel;

    private readonly type: SearchType;

    constructor(url: TypePath, limit: TypeLevel, type: SearchType) {
        this.url = url;
        this.limit = limit;
        this.type = type;
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const limit = this.limit;
        const type = this.type;

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

export default PathAnalyzer;
