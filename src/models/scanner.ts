import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import TypePath from '../interfaces/type-path';
import absolutePathRegexp from '../utils/regexp/absolute-path';
import relativePathRegexp from '../utils/regexp/relative-path';

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getData(): Promise<string> {

        const request = await axios.get(this.url);
        const data = request.data;

        if (typeof data !== "string") {
            return JSON.stringify(data);
        }

        return data;
    }

    public async getPaths(): Promise<TypePath[]> {

        // console.log('will scan now: ' + this.url + '\n');

        try {

            const data = await this.getData();

            const singleQuotesAbsolutePaths = data.split('\'').filter(row => row.trim().match(absolutePathRegexp));
            const doubleQuotesAbsolutePaths = data.split('\"').filter(row => row.trim().match(absolutePathRegexp));

            // const singleQuotesRelativePaths = data.split('\'').filter(row => row.trim().match(relativePathRegexp));
            // const doubleQuotesRelativePaths = data.split('\"').filter(row => row.trim().match(relativePathRegexp));

            const concatedAbsolutePaths = ([] as string[]).concat(singleQuotesAbsolutePaths, doubleQuotesAbsolutePaths);
            // const concatedRelativePaths = ([] as string[]).concat(singleQuotesRelativePaths, doubleQuotesRelativePaths);

            const concatedAbsoluteSet = new Set(concatedAbsolutePaths);
            const uniquePaths = Array.from(concatedAbsoluteSet);

            return uniquePaths;

        } catch (error) {

            return [];

        }

    }

}

export default Scanner;
