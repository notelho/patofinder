import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from './dictionary';
import SearchLevel from "../interfaces/search-level";
import TypeFragment from "../interfaces/type-fragment";

export class LevelSorter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public apply(searches: SearchLevel[]): SearchLevel[] {

        const type = this.type;

        const dictionary = new Dictionary(type);
        const preferences = dictionary.preferences;

        const rules = preferences.searchInSequence;

        // const matches = searches.filter(level => this.includes(level.path, rules));

        // const fails = searches.filter(level => !this.includes(level.path, rules));

        // return matches.concat(fails);

        return [];
    }

    private includes(path: TypePath[], rules: TypeFragment[]): boolean {

        // for (const rule of rules) {

        //     const includeRule = path.includes(rule);
        //     const equalsRule = path === rule;

        //     if (includeRule || equalsRule) {
        //         return true;
        //     }

        // }

        return false;
    }

    // private ignores ( path : TypePath[ ], rules: TypeFragment [ ] [ ] ) : boolean {

    //     searchInSequence

    // }

}

export default LevelSorter;
