import absolutePathRegexp from '../utils/regexp/absolute-path';
import relativePathRegexp from '../utils/regexp/relative-path';
import resolvePath from '../utils/functions/resolve-path';
import SearchUrl from "../interfaces/search-url"
import TypePath from '../interfaces/type-path';
import axios from 'axios';

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getData(): Promise<string> {

        const absolutePath = this.url;
        const requestResponse = await axios.get(absolutePath);
        const requestData = requestResponse.data;

        if (typeof requestData !== "string") {
            return JSON.stringify(requestData);
        }

        return requestData;
    }

    public async getPaths(): Promise<TypePath[]> {

        // console.log('will scan now: ' + this.url + '\n');

        try {

            const data = await this.getData();
            const absolutePath = this.url;

            const singleQuotesAbsolutePaths = data.split('\'').filter(row => row.trim().match(absolutePathRegexp));
            const singleQuotesRelativePaths = data.split('\'').filter(row => row.trim().match(relativePathRegexp));

            const doubleQuotesAbsolutePaths = data.split('\"').filter(row => row.trim().match(absolutePathRegexp));
            const doubleQuotesRelativePaths = data.split('\"').filter(row => row.trim().match(relativePathRegexp));

            const concatedAbsolutePaths = ([] as TypePath[]).concat(singleQuotesAbsolutePaths, doubleQuotesAbsolutePaths);
            const concatedRelativePaths = ([] as TypePath[]).concat(singleQuotesRelativePaths, doubleQuotesRelativePaths);

            const concatedAbsoluteSet = new Set(concatedAbsolutePaths);
            const concatedRelativeSet = new Set(concatedRelativePaths);

            const uniqueAbsolutePaths = Array.from(concatedAbsoluteSet);
            const uniqueRelativePaths = Array.from(concatedRelativeSet);

            const newUniqueAbsolutePaths: TypePath[] = [];

            for (const relativePath of uniqueRelativePaths) {
                const resolvedPath = resolvePath(absolutePath, relativePath);
                if (resolvedPath) {
                    newUniqueAbsolutePaths.push(resolvedPath);
                }
            }

            const concatedPaths = uniqueAbsolutePaths.concat(newUniqueAbsolutePaths);
            const concatedSet = new Set(concatedPaths);
            const uniquePaths = Array.from(concatedSet);

            // console.log(uniquePaths);

            return uniquePaths;

        } catch (error) {

            return [];

        }

    }

}

export default Scanner;
