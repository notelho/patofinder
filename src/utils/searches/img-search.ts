import SearchConfig from '../../interfaces/search-config';
import includesFilter from '../filters/includes-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import imgExtensions from '../extensions/img-extensions';

export const imgSearch: SearchConfig = {

    type: 'img',

    depth: 'all',

    limit: 1,

    extensions: imgExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default imgSearch;
