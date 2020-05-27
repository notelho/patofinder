import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import PathAnalyzer from "./path-analyzer";
import Dictionary from "./dictionary";

export class Patofinder {

    public readonly type: SearchType;

    // public readonly verbose: boolean;

    constructor(type: SearchType) { // , verbose: boolean
        this.type = type;
        // this.verbose = verbose;
    }

    public async find(path: TypePath): Promise<TypePath[]> {

        const type = this.type;
        const dictionary = new Dictionary(type);
        const analyzer = new PathAnalyzer(dictionary);
        const matches = await analyzer.apply(path);

        return matches;

    }

}

export default Patofinder;
