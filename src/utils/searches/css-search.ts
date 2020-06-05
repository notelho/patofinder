import SearchConfig from '../../interfaces/search-config';
import cssExtensions from '../extensions/css-extensions';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import samePathRule from '../rules/same-path-rule';

export const cssSearch: SearchConfig = {

    type: 'css',

    depth: 'all',

    limit: 1,

    extensions: cssExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filterRule: endingRule,

    equalsRule: samePathRule

};

export default cssSearch;
