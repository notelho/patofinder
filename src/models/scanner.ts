import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import regexpUrl from '../utils/regexp/url';
import TypePaths from '../interfaces/type-paths';

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getHtml(): Promise<string> {
        const request = await axios.get(this.url);
        const html = request.data;
        return html;
    }

    public async getPaths(): Promise<TypePaths> {
        const html = await this.getHtml();
        const parsedHtml = html.split('\"'); // temp
        const validator = regexpUrl;
        const paths = parsedHtml.filter(row => row.trim().match(validator));
        return paths;
    }

}

export default Scanner;
