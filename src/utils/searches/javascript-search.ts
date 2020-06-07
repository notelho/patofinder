import javascriptExtensions from '../extensions/javascript-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import includesRule from '../rules/includes-rule';
import notSameRule from '../rules/not-same-rule';

export const javascriptSearch: SearchConfig = {

    type: 'javascript',

    depth: 'all',

    limit: 1,

    extensions: javascriptExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        includesRule,

        notSameRule,

    ]

};

export default javascriptSearch;
