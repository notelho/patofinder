import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Regulator from "./regulator";
import Analyzer from "./analyzer";
import Searcher from "./searcher";
import Ignorer from "./ignorer";

export class UrlMiner extends Analyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: TypePath[]): Promise<TypePath[]> {

        const type = this.type;

        const ignorer = new Ignorer(type);
        const regulator = new Regulator(type);
        const searcher = new Searcher(paths, 5);

        let matches: string[] = [];
        let searchPaths: string[] = [];
        let filteredPaths: string[] = [];

        do {

            searchPaths = await searcher.next();

            filteredPaths = ignorer.from(searchPaths);

            matches = await regulator.applyRuleFor(filteredPaths);

        } while (searcher.hasNext && matches.length === 0);

        return matches;

    }

}

export default UrlMiner;
