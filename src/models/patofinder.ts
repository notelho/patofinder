import TypeSearch from "../interfaces/type-search";
import TypePath from "../interfaces/type-path";
import PathAnalyzer from "./path-analyzer";
import Dictionary from "./dictionary";
import typeSearch from "../utils/regexp/type-search";

export class Patofinder {

    public readonly type: TypeSearch;

    constructor(type: TypeSearch) {
        this.type = type;
    }

    public async find(path: TypePath): Promise<TypePath[]> {

        const type = this.type;

        if (typeSearch.test(type)) {

            const dictionary = new Dictionary(type);
            const analyzer = new PathAnalyzer(dictionary);
            const matches = await analyzer.apply(path);

            return matches;

        } else {

            throw new Error('Invalid search type');

        }

    }

}

export default Patofinder;
