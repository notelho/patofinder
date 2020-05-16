import axios from 'axios';
import SearchUrl from "../interfaces/search-url"
import Filter from "./filter";

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getHtml(): Promise<string> {

        const request = await axios.get(this.url);

        return request.data;

    }

    public async getPaths(): Promise<string[]> {

        const html = await this.getHtml();

        const urls = new Filter(html).paths();

        const paths = urls.ignore().source();

        return paths;
    }

}

export default Scanner;
