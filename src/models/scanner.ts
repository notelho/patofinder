import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import regexpUrl from '../utils/regexp/url';
import TypePaths from '../interfaces/type-paths';

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getData(): Promise<string> {
        const request = await axios.get(this.url);
        const data = request.data;
        return data;
    }

    public async getPaths(): Promise<TypePaths> {
        const data = await this.getData();
        const validator = regexpUrl;
        const singleQuotesParsed = data.split('\'');
        const doubleQuotesParsed = data.split('\"');
        const singleQuotesPaths = singleQuotesParsed.filter(row => row.trim().match(validator));
        const doubleQuotesPaths = doubleQuotesParsed.filter(row => row.trim().match(validator));
        const concatedPaths = ([] as string[]).concat(singleQuotesPaths, doubleQuotesPaths);
        const concatedSet = new Set(concatedPaths);
        const uniquePaths = Array.from(concatedSet);
        return uniquePaths;
    }

}

export default Scanner;
