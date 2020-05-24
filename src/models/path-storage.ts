import TypePath from "../interfaces/type-path";
import SearchLevel from "../interfaces/search-level";
import Ignorer from "./ignorer";
import Sorter from "./sorter";
import SearchType from "../interfaces/search-type";

export class PathStorage {

    private storage: SearchLevel[];

    private history: SearchLevel[];

    private ignorer: Ignorer;

    private sorter: Sorter;

    constructor(path: TypePath, type: SearchType) {
        this.sorter = new Sorter(type);
        this.ignorer = new Ignorer(type);
        this.storage = [{ path, level: 0 }];
        this.history = [{ path, level: 0 }];
    }

    public get empty(): boolean {
        return (this.storage.length === 0);
    }

    public get(): SearchLevel | undefined {
        return this.storage.shift();
    }

    public put(searches: SearchLevel[]): void {

        const storage = this.storage;
        const history = this.history;
        const ignorer = this.ignorer;
        const sorter = this.sorter;

        const filteredPaths = ignorer.apply(searches, history);
        const concatedPaths = storage.concat(filteredPaths);
        const newStorage = sorter.apply(concatedPaths);
        const newHistory = history.concat(filteredPaths);

        // console.log(filteredPaths);

        this.storage = newStorage;
        this.history = newHistory;

    }

}

export default PathStorage;
