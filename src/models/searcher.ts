import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from '../interfaces/type-level';
import TypePath from "../interfaces/type-path";
import Ignorer from './ignorer';
import Scanner from './scanner';

export class Searcher {

    // private ignorer: Ignorer;

    private paths: SearchLevel[] = [];

    public readonly limit: TypeLevel;

    private level: TypeLevel = 0;

    private index: number = 0;

    constructor(path: TypePath, limit: TypeLevel) { // , ignorer?: Ignorer
        this.limit = limit;
        // this.ignorer = ignorer;
        this.push(path, 0);
    }

    private async consume(): Promise<TypePath[]> {

        const paths = this.paths;
        // const ignorer = this.ignorer;
        const limit = this.limit;

        const searchIndex = this.index;
        const searchData = paths[searchIndex];
        const searchPath = searchData.path;
        const searchLevel = searchData.level;

        const nextIndex = (searchIndex + 1);
        const nextLevel = (searchLevel + 1);

        if (nextLevel < limit) {

            const scanner = new Scanner(searchPath);
            const urls = await scanner.getPaths();
            // const matches = ignorer.from(urls);
            const matches = urls;

            for (const path of matches) {
                this.push(path, nextLevel);
            }

            this.index = nextIndex;
            this.level = searchLevel;

            return matches;
        }

        return [];
    }

    private push(path: TypePath, level: TypeLevel) {
        this.paths.push({ path, level });
    }

    public async find(): Promise<TypePath[]> {
        return (!this.finished) ? await this.consume() : [];
    }

    public get finished(): boolean {
        return (this.level >= this.limit);
    }

}

export default Searcher;
