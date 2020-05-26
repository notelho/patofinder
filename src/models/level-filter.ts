import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import FilterRule from "../interfaces/filter-rule";

export class LevelFilter {

    private readonly type: SearchType;

    private readonly rule: FilterRule;

    constructor(type: SearchType, rule: FilterRule) {
        this.type = type;
        this.rule = rule;
    }

    public async apply(path: TypePath): Promise<boolean> {

        try {

            // console.log('will get deep info for: ' + path + '\n');

            const type = this.type;
            const rule = this.rule;

            return await rule(path, type);

        } catch (error) {

            return false;

        }

    }

}

export default LevelFilter;
