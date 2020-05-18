import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class Regulator {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public async applyRuleFor(paths: TypePath[]): Promise<TypePath[]> {

        const matches: TypePath[] = [];

        const type = this.type;

        const dictionary = new Dictionary(type);
        const extensions = dictionary.extensions;
        const filterRule = dictionary.filterRule;

        for (const path of paths) {

            try {

                if (await filterRule({ path, extensions })) {
                    matches.push(path);
                    break;
                }

            } catch (error) {
                continue;
            }

        }

        return matches;
    }

}

export default Regulator;
