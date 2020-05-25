import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from "../interfaces/type-level";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import PathStorage from "./path-storage";
import Dictionary from "./dictionary";

export class PathAnalyzer {

    private readonly url: TypePath;

    private readonly type: SearchType;

    constructor(url: TypePath, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;

        const type = this.type;

        const storage = new PathStorage(url, type);
        const searcher = new LevelSearcher(type);
        const filter = new LevelFilter(type);

        const dictionary = new Dictionary(type);
        const depth = dictionary.depth;

        const matches: TypePath[] = [];

        let search: SearchLevel | undefined;
        let paths: SearchLevel[];
        let match: boolean;

        while (
            (!storage.empty && depth === 'first' && matches.length === 0) ||
            (!storage.empty && depth === 'all')
        ) {

            search = storage.get();

            if (search) {

                const path = search.path;

                match = await filter.apply(path);

                if (match) {

                    matches.push(path);

                } else {

                    paths = await searcher.apply(search);

                    storage.put(paths);

                }

            }

        };

        return matches;
    }

}

export default PathAnalyzer;
