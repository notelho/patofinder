import SearchUrl from "../interfaces/search-url"

export class Scanner {

    private url: SearchUrl;

    constructor(url: SearchUrl) {
        this.url = url;
    }

    public async getHtml(): Promise<string> {

        return ''

    }

    public async getPaths(): Promise<string[]> {

        return []
    }

}

export default Scanner;
