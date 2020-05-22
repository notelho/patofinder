import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import TypePath from '../interfaces/type-path';
import regexpUrl from '../utils/regexp/url';

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

    public async getPaths(): Promise<TypePath[]> {

        // console.log('scanning: ' + this.url + '\n');

        try {

            const data = await this.getData();

            const singleQuotesPaths = data.split('\'').filter(row => row.trim().match(regexpUrl));
            const doubleQuotesPaths = data.split('\"').filter(row => row.trim().match(regexpUrl));

            const concatedPaths = ([] as string[]).concat(singleQuotesPaths, doubleQuotesPaths);

            const concatedSet = new Set(concatedPaths);
            const uniquePaths = Array.from(concatedSet);

            return uniquePaths;

        } catch (error) {

            return [];

        }

    }

}

export default Scanner;
