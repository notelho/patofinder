import SearchType from "../interfaces/search-type";
import Dictionary from "./dictionary";

const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');

export class Regulator {

    private paths: string[];

    constructor(paths: string[], type: SearchType) {
        this.paths = paths;
    }

    public async applyRule(): Promise<string[]> {

        const paths = this.paths;

        const matches: string[] = [];

        const dictionary = new Dictionary(type);
        const extensions = dictionary.extensions;
        const rule = dictionary.rule;

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
