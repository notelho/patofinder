import javascriptExtensions from '../extensions/javascript-extensions';
import SearchConfig from '../../interfaces/search-config';
import includesFilter from '../filters/includes-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const javascriptSearch: SearchConfig = {

    type: 'javascript',

    depth: 'all',

    limit: 1,

    extensions: javascriptExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default javascriptSearch;
