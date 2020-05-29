import streamExtensions from '../extensions/stream-extensions';
import SearchConfig from '../../interfaces/search-config';
import streamIgnore from '../ignores/stream-ignore';
import streamFilter from '../filters/stream-filter';
import streamSort from '../sorts/stream-sort';

export const streamSearch: SearchConfig = {

    type: "stream",

    depth: 'first',

    limit: 3,

    extensions: streamExtensions,

    sort: streamSort,

    ignore: streamIgnore,

    filter: streamFilter

};

export default streamSearch;
