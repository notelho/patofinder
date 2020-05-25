import SearchLevel from "../interfaces/search-level";
import TypeLevel from '../interfaces/type-level';
import PathScanner from './path-scanner';
import SearchType from "../interfaces/search-type";
import Dictionary from "./dictionary";

export class LevelSearcher {

    public readonly limit: TypeLevel;

    constructor(type: SearchType) {

        this.limit = new Dictionary(type).level;

    }

    public async apply(search: SearchLevel): Promise<SearchLevel[]> {

        const limit = this.limit;

        const url = search.path;
        const level = search.level;
        const next = (level + 1);

        if (next <= limit) {
            const scanner = new PathScanner(url);
            const paths = await scanner.apply();
            const searches = paths.map(path => ({ path, level: next }));
            return searches;
        }

        return [];
    }

}

export default LevelSearcher;
