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

    public readonly type: SearchType;

    public readonly depth: SearchDepth;

    public readonly limit: TypeLevel;

    public readonly preferences: FilterPreferences;

    public readonly rule: FilterRule;

    constructor(dictionary: Dictionary) {
        this.preferences = dictionary.preferences;
        this.type = dictionary.selected;
        this.depth = dictionary.depth;
        this.limit = dictionary.level;
        this.rule = dictionary.rule;
    }

    public async apply(path: TypePath): Promise<TypePath[]> {

        const type = this.type;
        const depth = this.depth;
        const limit = this.limit;
        const preferences = this.preferences;
        const rule = this.rule;

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
