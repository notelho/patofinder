import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypeLevel from '../interfaces/type-level';
import TypePath from "../interfaces/type-path";
import Ignorer from './ignorer';
import Scanner from './scanner';

export class Searcher {

    private ignorer: Ignorer;

    private paths: SearchLevel[] = [];

    public readonly limit: TypeLevel;

    private level: TypeLevel = 0;

    private index: number = 0;

    constructor(path: TypePath, limit: TypeLevel, ignorer?: Ignorer) {
        this.limit = limit;
        this.ignorer = ignorer;
        this.push(path, 0);
    }

    public async find(): Promise<TypePath[]> {

        return (!this.finished) ? await this.consume() : null;

    }

    private async consume(): Promise<TypePath[]> {

        const paths = this.paths;
        const ignorer = this.ignorer;

        const searchIndex = this.index;
        const searchData = paths[searchIndex];
        const searchPath = searchData.path;
        const searchLevel = searchData.level

        const nextIndex = searchIndex + 1;

        const scanner = new Scanner(searchPath);
        const newPaths = await scanner.getPaths();
        const matches = ignorer.from(newPaths);

        for (const path of matches) {
            this.push(path, (searchLevel + 1));
        }

        this.index = nextIndex;
        this.level = searchLevel;

        return matches;

    }

    private push(path: TypePath, level: TypeLevel, check: boolean = false) {
        this.paths.push({ path, level, check })
    }

    public get finished(): boolean {
        return (this.level < this.limit);
    }

}

export default Searcher;
