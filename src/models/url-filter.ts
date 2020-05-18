import SearchType from "../interfaces/search-type";
import TypePaths from "../interfaces/type-paths";
import Dictionary from "./dictionary";
import Analyzer from "./analyzer";

export class UrlFilter extends Analyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: TypePaths): Promise<TypePaths> {

        const type = this.type;
        const dictionary = new Dictionary(type);
        const extensions = dictionary.extensions;

        return new Promise(resolve => {

            const urls: TypePaths = [];

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
