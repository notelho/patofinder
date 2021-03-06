import resolveAllEndBars from '../utils/functions/resolve-all-end-bars';
import resolveAllPaths from '../utils/functions/resolve-all-paths';
import absolutePathRegexp from '../utils/regexp/absolute-path';
import relativePathRegexp from '../utils/regexp/relative-path';
import TypePath from '../interfaces/type-path';
import axios from 'axios';

export class Scanner {

    private path: TypePath;

    constructor(path: TypePath) {
        this.path = path;
    }

    public async apply(): Promise<TypePath[]> {

        try {

            const data = await this.get();
            const basePath = this.path;

            const singleQuotesAbsolutePaths = data.split('\'').filter(row => row.trim().match(absolutePathRegexp));
            const singleQuotesRelativePaths = data.split('\'').filter(row => row.trim().match(relativePathRegexp));

            const doubleQuotesAbsolutePaths = data.split('\"').filter(row => row.trim().match(absolutePathRegexp));
            const doubleQuotesRelativePaths = data.split('\"').filter(row => row.trim().match(relativePathRegexp));

            const concatedRelativePaths = singleQuotesRelativePaths.concat(doubleQuotesRelativePaths);
            const concatedAbsolutePaths = singleQuotesAbsolutePaths.concat(doubleQuotesAbsolutePaths);

            const resolvedUrlAbsolutePaths = resolveAllPaths(basePath, concatedRelativePaths);
            const resolvedBarAbsolutePaths = resolveAllEndBars([...concatedAbsolutePaths, ...resolvedUrlAbsolutePaths]);

            const finalAbsolutePaths = new Set(resolvedBarAbsolutePaths);
            const finalUniquePaths = Array.from(finalAbsolutePaths);

            return finalUniquePaths as TypePath[];

        } catch (error) {

            return [];

        }

    }

    private async get(): Promise<string> {

        const basePath = this.path;
        const requestResponse = await axios.get(basePath);
        const requestData = requestResponse.data;

        if (typeof requestData !== "string") {
            return JSON.stringify(requestData);
        }

        return requestData;
    }

}

export default Scanner;
