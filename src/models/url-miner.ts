import Analyzer from "./analyzer";
import SearchType from "../interfaces/search-type";
import Regulator from "./regulator";

export class UrlMiner extends Analyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: string[]): Promise<string[]> {

        const type = this.type;

        const urls: string[] = [
            'https://freesound.org/data/previews/518/518425_11289675-lq.mp3',
            'http://8903.brasilstream.com.br:8903/stream?1589752897235',
        ];

        let matches: string[] = [];

        // apply exclude rule

        // let hasSearch: boolean = true;

        matches = await new Regulator(urls, type).apply( );

        // console.log(matches);


        // pega todos os paths
        // roda o ffmprobe pra cada um

        // do {


        // } while (hasSearch || matches.length === 0);

        return matches;

    }

}

export default UrlMiner;
