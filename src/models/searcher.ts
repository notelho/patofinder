import SearchLevel from "../interfaces/search-level";
import TypeLevel from '../interfaces/type-level';
import Scanner from './scanner';

export class Searcher {

    public readonly limit: TypeLevel;

    constructor(limit: TypeLevel) {
        this.limit = limit;
    }

    public async apply(search: SearchLevel): Promise<SearchLevel[]> {

        const limit = this.limit;

        const url = search.path;
        const level = search.level;
        const next = (level + 1);

        if (next <= limit) {

            const scanner = new Scanner(url);
            const paths = await scanner.getPaths();
            const searches = paths.map(path => ({ path, level: next }));

            return searches;

        }

        return [];
    }

}

export default Searcher;
