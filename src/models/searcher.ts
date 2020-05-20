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

    public readonly limit: TypeLevel;

    private level: TypeLevel;

    private index: number;

    constructor(path: TypePath, type: SearchType, limit: TypeLevel) {
        this.paths = [{ path, level: 0 }];
        this.type = type;
        this.limit = limit;
        this.level = 0;
        this.index = 0;
    }

    public async apply(): Promise<TypePath[]> {

        let matches: TypePath[] = [];

        if (!this.finished) {

            const paths = this.paths;
            const type = this.type;
            const limit = this.limit;

            const searchIndex = this.index;
            const searchData = paths[searchIndex];
            const searchPath = searchData.path;
            const searchLevel = searchData.level;

            const nextIndex = (searchIndex + 1);
            const nextLevel = (searchLevel + 1);

            const ignorer = new Ignorer(type);
            const sorter = new Sorter(type);

            if (nextLevel < limit) {

                const scanner = new Scanner(searchPath);

                const foundPaths = await scanner.getPaths();
                const filteredPaths = ignorer.apply(foundPaths);
                const sortedPaths = sorter.apply(filteredPaths);

                for (const path of sortedPaths) {
                    this.paths.push({ path, level: nextLevel });
                }

                this.index = nextIndex;
                this.level = searchLevel;

                matches = sortedPaths;
            }

        }

        return matches;
    }

    public get finished(): boolean {
        return (this.level >= this.limit);
    }

}

export default Searcher;
