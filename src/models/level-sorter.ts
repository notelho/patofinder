import TypeFragment from "../interfaces/type-fragment";
import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import LevelIgnorer from "./level-ignorer";
import Dictionary from './dictionary';
import ConfigSort from "../interfaces/config-sort";
import ConfigIgnore from "../interfaces/config-ignore";

export class LevelSorter {

    public readonly sort: ConfigSort;

    public readonly ignore: ConfigIgnore;

    constructor(sort: ConfigSort, ignore: ConfigIgnore) {
        this.sort = sort;
        this.ignore = ignore;
    }

    public apply(levels: SearchLevel[]): SearchLevel[] {

        const sort = this.sort;
        const ignore = this.ignore;
        const keys = sort.keys;

        const ignorer = new LevelIgnorer(ignore);

        const matches = this.getMatches(levels, keys);
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
