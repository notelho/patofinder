import includesFilter from '../filters/includes-filter';
import emptySort from '../sorts/empty-sort';
import emptyIgnore from '../ignores/empty-ignore';
import SearchConfig from '../../interfaces/search-config';

export const font: SearchConfig = {

    type: 'font',

    depth: 'all',

    limit: 1,

    extensions: [".ttf", ".otf", ".woff", ".eot", ".svg"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default font;
