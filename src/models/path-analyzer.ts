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
        const rule = this.dictionary.filter;

        const storage = new LevelStorage(path, sort, ignore);
        const filter = new LevelFilter(extensions, rule);
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
            logger.log(`analyzing: ${search.path}`);
            match = await filter.apply(search.path);

            if (match) {
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
