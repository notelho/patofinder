import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import PathAnalyzer from "./path-analyzer";

export class Patofinder {

    public readonly url: TypePath;

    public readonly type: SearchType;

    constructor(url: TypePath, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public async find(): Promise<TypePath[]> {

        try {

            const type = this.type;
            const url = this.url;
            const limit = 2;

            const analyzer = new PathAnalyzer(url, limit, type);

            const matches = await analyzer.run();

            return matches;

        } catch (error) {

            throw error;

        }

    }

}

export default Patofinder;
