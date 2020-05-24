import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import SearchLevel from "../interfaces/search-level";

export class Regulator {

    private type: SearchType;

    constructor(type: SearchType) {
        this.type = type;
    }

    public async apply(search: SearchLevel): Promise<TypePath | undefined> {

        const type = this.type;
        const path = search.path;

        const dictionary = new Dictionary(type);
        const extensions = dictionary.extensions;
        const filterRule = dictionary.filterRule;

        try {

            // console.log('will get deep info for: ' + path + '\n');

            const isMatch = await filterRule({ path, extensions });

            if (isMatch) {

                // console.log('is match + \n');

                return path;

            }

        } catch (error) {

            // console.log('got a error in deep info + \n');

            return undefined;

        }

        return undefined;

    }

}

export default Regulator;
