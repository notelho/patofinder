import SearchConfig from '../../interfaces/search-config';
import includesFilter from '../filters/includes-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const phpSearch: SearchConfig = {

    type: "php",

    depth: 'all',

    limit: 1,

    extensions: [".php"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default phpSearch;
