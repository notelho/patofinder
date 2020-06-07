import SearchConfig from '../../interfaces/search-config';
import phpExtensions from '../extensions/php-extensions';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import includesRule from '../rules/includes-rule';
import notSameRule from '../rules/not-same-rule';

export const phpSearch: SearchConfig = {

    type: "php",

    depth: 'all',

    limit: 1,

    extensions: phpExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        includesRule,

        notSameRule,

    ]

};

export default phpSearch;
