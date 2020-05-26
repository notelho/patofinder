import ConfigIgnore from "../interfaces/config-ignore";
import SearchLevel from "../interfaces/search-level";

export class LevelIgnorer {

    private ignore: ConfigIgnore;

    constructor(ignore: ConfigIgnore) {
        this.ignore = ignore;
    }

    apply(levelList: SearchLevel[], ignoreList: SearchLevel[]): SearchLevel[] {

        let matches: SearchLevel[] = [];
        let rules: string[] = [];

        rules = rules.concat(ignoreList.map(level => level.path));
        rules = rules.concat(this.ignore.extensions);
        rules = rules.concat(this.ignore.keys);

        matches = levelList;

        rules.map(rule => {

            matches = matches.filter(match => {

                const includeRule = match.path.includes(rule);
                const equalsRule = match.path === rule;

                return !(includeRule || equalsRule);

            });

        });

        return matches;
    }

}

export default LevelIgnorer;
