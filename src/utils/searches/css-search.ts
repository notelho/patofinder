import SearchConfig from '../../interfaces/search-config';
import cssExtensions from '../extensions/css-extensions';
import endingFilter from '../filters/ending-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const cssSearch: SearchConfig = {

    type: 'css',

    depth: 'all',

    limit: 1,

    extensions: cssExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default cssSearch;
