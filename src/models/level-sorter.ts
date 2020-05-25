import TypeFragment from "../interfaces/type-fragment";
import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import LevelIgnorer from "./level-ignorer";
import Dictionary from './dictionary';

export class LevelSorter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public apply(levels: SearchLevel[]): SearchLevel[] {

        const type = this.type;

        const dictionary = new Dictionary(type);
        const ignorer = new LevelIgnorer(type);
        const preferences = dictionary.preferences;
        const rules = preferences.searchInSequence;

        const matches = this.getMatches(levels, rules);
        const fails = ignorer.apply(levels, matches);

        return matches.concat(fails);
    }

    private getMatches(levels: SearchLevel[], rules: TypeFragment[]): SearchLevel[] {

        let allMatches: SearchLevel[] = [];
        let notMatched: SearchLevel[] = [];

        for (const rule of rules) {

            const ruleMatches: SearchLevel[] = [];

            for (const level of levels) {

                const path = level.path;
                const includeRule = path.includes(rule);
                const equalsRule = path === rule;

                if (includeRule || equalsRule) {
                    ruleMatches.push(level);
                } else {
                    notMatched.push(level);
                }

            }

            allMatches = allMatches.concat(ruleMatches);
            levels = notMatched.map(level => level);
            notMatched = []

        }

        return allMatches;
    }

}

export default LevelSorter;
