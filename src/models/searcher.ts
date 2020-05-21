import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from '../interfaces/type-level';
import TypePath from "../interfaces/type-path";
import Scanner from './scanner';
import Ignorer from "./ignorer";
import Sorter from "./sorter";

export class Searcher {

    private paths: SearchLevel[];

    private type: SearchType;

    private ignorer: Ignorer;

    public readonly limit: TypeLevel;

    constructor(path: TypePath, type: SearchType, limit: TypeLevel) {
        this.paths = [{ path, level: 0 }];
        this.ignorer = new Ignorer(type);
        this.type = type;
        this.limit = limit;
    }

    public async apply(): Promise<TypePath[]> {

        let matches: TypePath[] = []
        let paths = this.paths;

        if (!this.finished) {

            const type = this.type;
            const limit = this.limit;
            const ignorer = this.ignorer;

            const selected = paths[0].path;
            const level = paths[0].level;
            const next = (level + 1);

            paths.shift();

            if (next <= limit) {

                const scanner = new Scanner(selected);
                const sorter = new Sorter(type);

                const scannedPaths = await scanner.getPaths();
                const filteredPaths = ignorer.apply(scannedPaths);
                const foundPaths = filteredPaths.map(path => ({
                    path, level: next
                }) as SearchLevel);

                const allPaths = paths.concat(foundPaths);
                const sortedFound = sorter.apply(foundPaths);
                const sortedAll = sorter.apply(allPaths);
                const matchedFoundUrls = sortedFound.map(sorted => sorted.path);

                paths = sortedAll;
                matches = matchedFoundUrls;
            }

            this.paths = paths;
        }

        return matches;
    }

    public get finished(): boolean {
        return (this.paths.length <= 0);
    }

}

export default Searcher;
