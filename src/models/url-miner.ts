import UrlAnalyzer from "./url-analyzer";
import SearchType from "../interfaces/search-type";

export class UrlMiner extends UrlAnalyzer {

    constructor(type: SearchType) {
        super(type);
    }

    public async run(paths: string[]): Promise<string[]> {

        // deep-scanner


        // console.log(paths);

        // pega todos os paths
        // roda o ffmprobe pra cada um

        // se encontrar, retorna os matches em um array

        // se não, faz um deepscan




        return paths

    }

}

export default UrlMiner;
