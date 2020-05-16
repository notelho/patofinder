import SearchUrl from "../interfaces/search-url"
import SearchType from "../interfaces/search-type"
import Scanner from "./scanner";
import { Finder } from "./finder";

export class Patofinder {

    private url: SearchUrl;

    private type: SearchType;

    constructor(url: SearchUrl, type: SearchType) {
        this.url = url;
        this.type = type;
    }

    public async find(): Promise<string[]> {

        try {

            const scanner = new Scanner(this.url);
            const finder = new Finder(this.type);

            const foundUrls = await scanner.getPaths();
            const foundMatches = await finder.find(foundUrls);

            return foundMatches;

        } catch (error) {

            throw error;

        }

    }

}

export default Patofinder;
