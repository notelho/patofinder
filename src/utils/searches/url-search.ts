import SearchConfig from '../../interfaces/search-config';
import emptyExtensions from '../extensions/empty-extensions';
import emptyIgnore from '../ignores/empty-ignore';
import anyFilter from '../filters/any-filter';
import emptySort from '../sorts/empty-sort';

export const urlSearch: SearchConfig = {

    type: 'url',

    depth: 'all',

    limit: 1,

    extensions: emptyExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: anyFilter

};

export default urlSearch;
