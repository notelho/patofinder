import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class LevelIgnorer {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    apply(levelList: SearchLevel[], ignoreList: SearchLevel[]): SearchLevel[] {

        let ignoringRules: TypePath[] = [];

        const dictionary = new Dictionary(this.type);

        const preferences = dictionary.preferences;
        const ignoringTypes = preferences.ignoringTypes;
        const ignoringExtensions = preferences.ignoringExtensions;
        const ignoringKeys = preferences.ignoringKeys;
        const ignoringPaths = ignoreList.map(level => level.path);

        for (const ignoringType of ignoringTypes) {

            const excludingDictionary = new Dictionary(ignoringType);
            const excludingExtensions = excludingDictionary.extensions;

            ignoringRules = ignoringRules.concat(excludingExtensions);

        }

        ignoringRules = ignoringRules.concat(ignoringExtensions);
        ignoringRules = ignoringRules.concat(ignoringPaths);
        ignoringRules = ignoringRules.concat(ignoringKeys);

        const matches: SearchLevel[] = [];

        for (const level of levelList) {

            let matchAnyRule: boolean = false;

            for (const rule of ignoringRules) {

                const includeRule = level.path.includes(rule);
                const equalsRule = level.path === rule;

                matchAnyRule = includeRule || equalsRule;

                if (matchAnyRule) {
                    break;
                }

            }

            if (!matchAnyRule) {
                matches.push(level);
            }

        }

        return matches;
    }

}

export default LevelIgnorer;
