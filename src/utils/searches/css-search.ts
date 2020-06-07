import SearchConfig from '../../interfaces/search-config';
import cssExtensions from '../extensions/css-extensions';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import notSameRule from '../rules/not-same-rule';

export const cssSearch: SearchConfig = {

    type: 'css',

    depth: 'all',

    limit: 1,

    extensions: cssExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        endingRule,

        notSameRule,

    ]

};

export default cssSearch;
