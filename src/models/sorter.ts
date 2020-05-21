import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from './dictionary';
import SearchLevel from "../interfaces/search-level";

export class Separator {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    apply(levels: SearchLevel[]): SearchLevel[] {

        const type = this.type;

        const dictionary = new Dictionary(type);
        const preferences = dictionary.preferences;
        const sortRules = preferences.searchFor;

        const includes = (path: TypePath): boolean => {

            for (const rule of sortRules) {
                if (path.includes(rule)) {
                    return true;
                }
            }

            return false;
        };

        const matches = levels.filter(level => includes(level.path));
        const fails = levels.filter(level => !includes(level.path));

        return matches.concat(fails);
    }
}

export default Separator;
