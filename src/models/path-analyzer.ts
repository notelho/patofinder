import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from "../interfaces/type-level";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import LevelStorage from "./level-storage";
import Dictionary from "./dictionary";
import FilterRule from "../interfaces/filter-rule";
import SearchDepth from "../interfaces/search-depth";
import FilterPreferences from "../interfaces/filter-preferences";

export class PathAnalyzer {

    public readonly dictionary: Dictionary

    constructor(dictionary: Dictionary) {
        this.dictionary = dictionary;
    }

    public async apply(path: TypePath): Promise<TypePath[]> {

        const type = this.dictionary.selected;
        const depth = this.dictionary.depth;
        const limit = this.dictionary.level;
        const preferences = this.dictionary.preferences;
        const rule = this.dictionary.rule;

        const storage = new LevelStorage(path, preferences);
        const filter = new LevelFilter(type, rule);
        const searcher = new LevelSearcher(limit);

        const matches: TypePath[] = [];

        let search: SearchLevel;
        let paths: SearchLevel[];
        let match: boolean;

        while (
            (!storage.empty && depth === 'first' && matches.length === 0) ||
            (!storage.empty && depth === 'all')
        ) {

            search = storage.get();

            match = await filter.apply(search.path);

            if (match) {
                matches.push(search.path);
            } else {
                paths = await searcher.apply(search);
                storage.put(paths);
            }

        };

        return matches;
    }

}

export default PathAnalyzer;
