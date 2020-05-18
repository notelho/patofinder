import SearchType from "../interfaces/search-type";
import searchDictionary from "../utils/dictionary";

const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');

export class Searcher {

    private paths: string[];

    constructor(paths: string[]) {
        this.paths = paths;
    }

    public async getMatches(type: SearchType): Promise<string[]> {

        const matches: string[] = [];

        const dictionary = searchDictionary;
        const environment = dictionary[type];
        const extensions = environment.extensions;
        const typeRule = environment.rule as (data: any) => boolean;

        // apply exclude rule

        for (const path of this.paths) {

            try {

                const ffdata = await ffprobe(path, { path: ffprobeStatic.path });

                if (typeRule({ ffdata, extensions })) {

                    matches.push(path);

                }

            } catch (error) {

                // console.log(error); // temp

                continue;

            }

        }

        return matches;
    }

}

export default Searcher;
