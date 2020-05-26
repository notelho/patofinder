import SearchConfig from '../../interfaces/search-config';
import emptySort from '../sorts/empty-sort';
import emptyIgnore from '../ignores/empty-ignore';
import includesFilter from '../filters/includes-filter';

export const javascript: SearchConfig = {

    type: 'javascript',

    depth: 'all',

    limit: 1,

    extensions: [".js"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default javascript;
