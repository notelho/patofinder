import SearchLevel from "../interfaces/search-level";
import TypePath from "../interfaces/type-path";
import LevelSearcher from "./level-searcher";
import LevelFilter from "./level-filter";
import LevelStorage from "./level-storage";
import Dictionary from "./dictionary";
import logger from './logger';

export class PathAnalyzer {

    public readonly dictionary: Dictionary

    constructor(dictionary: Dictionary) {
        this.dictionary = dictionary;
    }

    public async apply(path: TypePath): Promise<TypePath[]> {

        const depth = this.dictionary.depth;
        const limit = this.dictionary.limit;
        const sort = this.dictionary.sort;
        const ignore = this.dictionary.ignore;
        const extensions = this.dictionary.extensions;

        const filterRule = this.dictionary.filterRule;
        const equalsRule = this.dictionary.equalsRule;

        const equals = new LevelFilter([path], equalsRule);
        const filter = new LevelFilter(extensions, filterRule);
        const storage = new LevelStorage(path, sort, ignore);
        const searcher = new LevelSearcher(limit);

        const matches: TypePath[] = [];

        let search: SearchLevel;
        let paths: SearchLevel[];
        let filterMatch: boolean;
        let equalsMatch: boolean;

        logger.cli(true);

        while (
            (!storage.empty && depth === 'first' && matches.length === 0) ||
            (!storage.empty && depth === 'all')
        ) {

            search = storage.get();
            logger.log(`searching: ${search.path}`);
            filterMatch = await filter.apply(search.path);
            equalsMatch = await equals.apply(search.path);

            if (filterMatch && equalsMatch) {
                logger.log(`match: ${search.path}`, 'success');
                matches.push(search.path);
            } else {
                logger.log(`scanning: ${search.path}`);
                paths = await searcher.apply(search);
                storage.put(paths);
            }

        };

        return matches;
    }

}

export default PathAnalyzer;
