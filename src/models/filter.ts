import regExpUrl from '../constants/regexp-url';

export class Filter {

    private html: string;

    private src: any;

    constructor(html: string) {
        this.html = html;
        this.src = html;
    }

    paths() {

        const validator = regExpUrl;

        const html = this.html;

        const matches = html.match(validator);

        // console.log('=======================================\n');
        // console.log(this.html);
        // console.log('=======================================\n');
        // console.log(matches);
        // console.log('=======================================\n');

        this.src = matches;


        // string.match(geturl).length
        // 2

        // string.match(geturl)
        // http://vimeo.com/8122132, http://www.flickr.com/photos/pmorgan/32606683/


        return this;
    }

    ignore() {


        return this;
    }

    source() {
        return this.src;
    }

}

export default Filter;
