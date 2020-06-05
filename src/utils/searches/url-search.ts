import SearchConfig from '../../interfaces/search-config';
import emptyExtensions from '../extensions/empty-extensions';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import samePathRule from '../rules/same-path-rule';
import emptyRule from '../rules/empty-rule';

export const urlSearch: SearchConfig = {

    type: 'url',

    depth: 'all',

    limit: 1,

    extensions: emptyExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filterRule: emptyRule,

    equalsRule: samePathRule

};

export default urlSearch;
