import TypeFragment from "../interfaces/type-fragment";
import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import LevelIgnorer from "./level-ignorer";
import Dictionary from './dictionary';
import FilterPreferences from "../interfaces/filter-preferences";

export class LevelSorter {

    private preferences: FilterPreferences;

    constructor(preferences: FilterPreferences) {
        this.preferences = preferences;
    }

    public apply(levels: SearchLevel[]): SearchLevel[] {

        const preferences = this.preferences;
        const rules = preferences.searchBy;

        const ignorer = new LevelIgnorer(preferences);

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
