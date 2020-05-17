import UrlAnalyzer from "./url-analyzer";
import SearchType from "../interfaces/search-type";
import searchDictionary from '../utils/search-dictionary';

export class UrlFilter extends UrlAnalyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: string[]): Promise<string[]> {

        const extensions = searchDictionary[this.type].extensions as string[];

        return new Promise(resolve => {

            const urls: string[] = [];

            for (const path of paths) {

                for (const extension of extensions) {

                    if (path.includes(extension)) {

                        // console.log(path);

                        urls.push(path);

                        break;

                    }

                }

            }

            resolve(paths);

        })

    }

}

export default UrlFilter;
