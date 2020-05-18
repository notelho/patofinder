import SearchType from "../interfaces/search-type";
import TypePaths from "../interfaces/type-paths";
import Dictionary from "./dictionary";

export class Regulator {

    private paths: TypePaths;

    private type: SearchType;

    constructor(paths: TypePaths, type: SearchType) {
        this.paths = paths;
        this.type = type;
    }

    public async applyRule(): Promise<TypePaths> {

        const matches: TypePaths = [];

        const paths = this.paths;
        const type = this.type;

        const dictionary = new Dictionary(type);
        const extensions = dictionary.extensions;
        const filterRule = dictionary.filterRule;

        for (const path of paths) {

            try {

                const result = await filterRule({ path, extensions });

                if (result) {
                    matches.push(path);
                }

            } catch (error) {
                continue;
            }

        }
        return matches;
    }

}

export default Regulator;
