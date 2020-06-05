import javascriptExtensions from '../extensions/javascript-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import includesRule from '../rules/includes-rule';
import samePathRule from '../rules/same-path-rule';

export const javascriptSearch: SearchConfig = {

    type: 'javascript',

    depth: 'all',

    limit: 1,

    extensions: javascriptExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filterRule: includesRule,

    equalsRule: samePathRule

};

export default javascriptSearch;
