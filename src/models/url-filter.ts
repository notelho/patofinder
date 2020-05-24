import SearchType from "../interfaces/search-type";
import SearchUrl from "../interfaces/search-url";
import TypePath from "../interfaces/type-path";
import UrlAnalyzer from "./url-analyzer";
import Dictionary from "./dictionary";
import LevelSearcher from "./level-searcher";
import PathStorage from './path-storage';

export class UrlFilter extends UrlAnalyzer {

    constructor(url: SearchUrl, type: SearchType) {
        super(url, type);
    }

    public async run(): Promise<TypePath[]> {

        // const url = this.url;
        // const type = this.type;
        // const limit = 1;

        const matches: TypePath[] = [];

        // const storage = new PathStorage(url, type);
        // const searcher = new LevelSearcher(limit);
        // const dictionary = new Dictionary(type);

        // const extensions = dictionary.extensions;

        // const search = storage.get();
        // const paths = await searcher.apply(search);

        // for (const path of paths) {
        //     for (const extension of extensions) {
        //         if (path.includes(extension)) {
        //             matches.push(path);
        //             break;
        //         }
        //     }
        // }



        // let paths: SearchLevel[];
        // let match: TypePath | undefined;
        // let search: SearchLevel | undefined;

        // do {

        //     search = storage.get();

        //     if (search) {
        //         paths = await searcher.apply(search);
        //         match = await filter.apply(search);
        //         storage.put(paths);
        //     }

        // } while (!storage.empty && !match);

        // return match ? [match] : [];

        return matches;
    }

}

export default UrlFilter;
