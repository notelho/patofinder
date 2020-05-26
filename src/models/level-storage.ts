import SearchType from "../interfaces/search-type";
import SearchLevel from "../interfaces/search-level";
import TypePath from "../interfaces/type-path";
import LevelIgnorer from "./level-ignorer";
import LevelSorter from "./level-sorter";
import FilterPreferences from "../interfaces/filter-preferences";

export class LevelStorage {

    private storage: SearchLevel[];

    private history: SearchLevel[];

    private ignorer: LevelIgnorer;

    private sorter: LevelSorter;

    constructor(path: TypePath, preferences: FilterPreferences) {
        this.sorter = new LevelSorter(preferences);
        this.ignorer = new LevelIgnorer(preferences);
        this.storage = [{ path, level: 0 }];
        this.history = [{ path, level: 0 }];
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

        this.storage = newStorage;
        this.history = newHistory;

    }

    public get(): SearchLevel {
        return this.storage.shift() as SearchLevel;
    }

    public get empty(): boolean {
        return (this.storage.length === 0);
    }

}

export default LevelStorage;
