import endingFilter from '../filters/ending-filter';
import SearchConfig from '../../interfaces/search-config';
import emptySort from '../sorts/empty-sort';
import emptyIgnore from '../ignores/empty-ignore';

export const img: SearchConfig = {

    type: 'img',

    depth: 'all',

    limit: 1,

    extensions: [".jpg", ".jpeg", ".svg", ".png", ".gif", ".gifv", ".tiff", ".psd", ".pdf", ".eps", ".ai", ".indd", ".raw", ".ico"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default img;
