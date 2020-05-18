import Analyzer from "./analyzer";
import SearchType from "../interfaces/search-type";
import searchDictionary from '../utils/dictionary';

export class UrlFilter extends Analyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: string[]): Promise<string[]> {

        const type = this.type
        const dictionary = searchDictionary;
        const environment = dictionary[type];
        const extensions = environment.extensions;

        return new Promise(resolve => {

            const urls: string[] = [];

            for (const path of paths) {
                for (const extension of extensions) {
                    if (path.includes(extension)) {
                        urls.push(path);
                        break;
                    }
                }
            }

            resolve(urls);
        })
    }

}

export default UrlFilter;
