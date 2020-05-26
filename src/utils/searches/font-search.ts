import SearchConfig from '../../interfaces/search-config';
import includesFilter from '../filters/includes-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const fontSearch: SearchConfig = {

    type: 'font',

    depth: 'all',

    limit: 1,

    extensions: [".ttf", ".otf", ".woff", ".eot", ".svg"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default fontSearch;
