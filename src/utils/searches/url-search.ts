import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import anyFilter from '../filters/any-filter';
import emptySort from '../sorts/empty-sort';

export const url: SearchConfig = {

    type: 'url',

    depth: 'all',

    limit: 1,

    extensions: [],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: anyFilter

};

export default url;
