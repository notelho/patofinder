import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import regexpUrl from '../utils/regexp/url';

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

    public async getPaths(): Promise<string[]> {

        const html = await this.getHtml();

        const parsedHtml = html.split('\"');

        const validator = regexpUrl;

        const paths = parsedHtml.filter(row => row.trim().match(validator));

        return paths;
    }

}

export default Scanner;
