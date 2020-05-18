import SearchType from "../interfaces/search-type";
import searchDictionary from "../utils/dictionary";

const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');

export class Regulator {

    private paths: string[];

    constructor(paths: string[]) {
        this.paths = paths;
    }

    public async applyRule(type: SearchType): Promise<string[]> {

        const matches: string[] = [];
        const dictionary = searchDictionary;
        const environment = dictionary[type];
        const extensions = environment.extensions;
        const rule = environment.rule as (data: any) => boolean;

        for (const path of this.paths) {
            try {
                const ffdata = await ffprobe(path, { path: ffprobeStatic.path });
                if (await rule({ ffdata, extensions })) {
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
