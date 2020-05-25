import SearchLevel from "../interfaces/search-level";
import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class LevelFilter {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public async apply(search: SearchLevel): Promise<TypePath | undefined> {

        const type = this.type;
        const path = search.path;

        const dictionary = new Dictionary(type);
        const rule = dictionary.rule;

        try {

            // console.log('will get deep info for: ' + path + '\n');

            const isMatch = await rule(path, type);

            if (isMatch) {
                return path;
            }

        } catch (error) {
            return undefined;
        }

        return undefined;
    }

}

export default LevelFilter;
