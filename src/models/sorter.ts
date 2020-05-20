import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from './dictionary';

export class Sorter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    apply(paths: TypePath[]): TypePath[] {

        const type = this.type;

        const dictionary = new Dictionary(type);
        const preferences = dictionary.preferences;
        const sortRules = preferences.searchFor;

        const matchedPaths: TypePath[] = paths.filter(path => {
            for (const rule of sortRules) {
                if (path.includes(rule)) {
                    return true;
                }
            }
            return false;
        })

        const notMatchedPaths: TypePath[] = paths.filter(path => {
            for (const rule of sortRules) {
                if (path.includes(rule)) {
                    return false;
                }
            }
            return true;
        })

        return matchedPaths.concat(notMatchedPaths);
    }
}

export default Sorter;
