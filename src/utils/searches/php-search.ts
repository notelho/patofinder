import includesFilter from '../filters/includes-filter';
import SearchConfig from '../../interfaces/search-config';
import emptySort from '../sorts/empty-sort';
import emptyIgnore from '../ignores/empty-ignore';

export const php: SearchConfig = {

    type: "php",

    depth: 'all',

    limit: 1,

    extensions: [".php"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default php;
