import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from "../interfaces/type-level";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import LevelStorage from "./level-storage";
import Dictionary from "./dictionary";

export class PathAnalyzer {

    private readonly dictionary: Dictionary;

    constructor(dictionary: Dictionary) {
        this.dictionary = dictionary;
    }

    public async apply(path: TypePath): Promise<TypePath[]> {

        const dictionary = this.dictionary;

        const preferences = dictionary.preferences;
        const type = dictionary.selected;
        const depth = dictionary.depth;
        const limit = dictionary.level;
        const rule = dictionary.rule;

        const storage = new LevelStorage(path, preferences);
        const filter = new LevelFilter(type, rule);
        const searcher = new LevelSearcher(limit);

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

                match = await filter.apply(search.path);

                if (match) {

                    matches.push(search.path);

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
