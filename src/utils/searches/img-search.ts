import SearchConfig from '../../interfaces/search-config';
import endingFilter from '../filters/ending-filter';
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

    filter: endingFilter

};

export default imgSearch;
