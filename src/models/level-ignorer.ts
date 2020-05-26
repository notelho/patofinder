import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import ConfigIgnore from "../interfaces/config-ignore";

export class LevelIgnorer {

    private ignore: ConfigIgnore;

    constructor(ignore: ConfigIgnore) {
        this.ignore = ignore;
    }

    apply(levelList: SearchLevel[], ignoreList: SearchLevel[]): SearchLevel[] {

        const ignoringPaths = ignoreList.map(level => level.path);

        let ignoringRules: TypePath[] = [];

        const ignore = this.ignore;
        const ignoringTypes = ignore.types;
        const ignoringExtensions = ignore.extensions;
        const ignoringKeys = ignore.keys;

        for (const ignoringType of ignoringTypes) { // temp

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
