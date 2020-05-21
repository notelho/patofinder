import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import Analyzer from "./analyzer";
import Searcher from "./searcher";

export class UrlFilter extends Analyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        const url = this.url;
        const type = this.type;
        const limit = 1;

        const matches: TypePath[] = [];

        const dictionary = new Dictionary(type);
        const searcher = new Searcher(url, type, limit);

        const extensions = dictionary.extensions;

        const paths = await searcher.apply();

        for (const path of paths) {
            for (const extension of extensions) {
                if (path.includes(extension)) {
                    matches.push(path);
                    break;
                }
            }
        }

        return matches;
    }

}

export default UrlFilter;
