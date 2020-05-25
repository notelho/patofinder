import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class LevelFilter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public async apply(path: TypePath): Promise<boolean> {

        // console.log('will get deep info for: ' + path + '\n');

        const type = this.type;

        const dictionary = new Dictionary(type);
        const rule = dictionary.rule;

        try {

            return await rule(path, type);

        } catch (error) {

            return false;

        }

    }

}

export default LevelFilter;
