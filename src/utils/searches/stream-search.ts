import streamExtensions from '../extensions/stream-extensions';
import SearchConfig from '../../interfaces/search-config';
import streamIgnore from '../ignores/stream-ignore';
import streamSort from '../sorts/stream-sort';
import streamRule from '../rules/stream-rule';
import emptyRule from '../rules/empty-rule';

export const streamSearch: SearchConfig = {

    type: "stream",

    depth: 'first',

    limit: 3,

    extensions: streamExtensions,

    sort: streamSort,

    ignore: streamIgnore,

    filterRule: streamRule,

    equalsRule: emptyRule

};

export default streamSearch;
