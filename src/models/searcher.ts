import TypePath from "../interfaces/type-path";
import SearchType from "../interfaces/search-type";

export class Searcher {

    private history: TypePath[];

    private paths: TypePath[];

    private level: number;

    private finished: boolean;

    private type: SearchType;

    constructor(path: TypePath, type: SearchType, level: number) {
        this.paths = [path];
        this.history = [path];
        this.type = type;
        this.level = level;
        this.finished = level !== 0;
    }

    public async find(): Promise<TypePath[]> {

        if (!this.finished) {

            const type = this.type;
            const level = this.level;
            const next = (level - 1);
            const finished = (next > 0);

            this.level = level;
            this.finished = finished;

            // const historyPaths = this.history;
            // const sourcePaths = this.paths;
            // let foundPaths: TypePath[] = [];
            // let notIgnoredPaths: TypePath[] = [];
            // let matchesPaths: TypePath[] = [];

            // for (const path of paths) {

            //     const ignorer = new Ignorer(type);

            //     const scanner = new Scanner(path);

            //     const addresses = await scanner.getPaths();

            //     urls.push(addresses);

            // }


            // return matches;
        }


        return []
    }

    public get next(): boolean {
        return !this.finished;
    }

}

export default Searcher;
