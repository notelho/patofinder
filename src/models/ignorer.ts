import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class Ignorer {

    private type: SearchType;

    private history: TypePath[];

    constructor(type: SearchType) {
        this.type = type;
        this.history = [];
    }

    apply(paths: TypePath[]): TypePath[] {

        let ignoringRules: TypePath[] = [];

        const type = this.type;
        const history = this.history;

        const dictionary = new Dictionary(type);

        const preferences = dictionary.preferences;
        const ignoringTypes = preferences.ignoringTypes;

        for (const ignoringType of ignoringTypes) {

            const excludingDictionary = new Dictionary(ignoringType);
            const excludingExtensions = excludingDictionary.extensions;

            ignoringRules = ignoringRules.concat(excludingExtensions);

        }

        const ignoringExtensions = preferences.ignoringExtensions;
        const ignoringKeys = preferences.ignoringKeys;

        ignoringRules = ignoringRules.concat(ignoringExtensions);
        ignoringRules = ignoringRules.concat(ignoringKeys);
        ignoringRules = ignoringRules.concat(history);

        const matches: TypePath[] = [];

        for (const path of paths) {

            let matchAnyWord: boolean = false;

            for (const rule of ignoringRules) {

                const pathHasRule = path.includes(rule);
                const pathIsRule = path === rule;

                if (pathHasRule || pathIsRule) {
                    matchAnyWord = true;
                    break;
                }
            }

            if (!matchAnyWord) {
                matches.push(path);
            }

        }

        this.history = history.concat(matches);

        return matches;
    }

}

export default Ignorer;
