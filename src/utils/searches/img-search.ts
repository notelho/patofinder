import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import imgExtensions from '../extensions/img-extensions';
import includesRule from '../rules/includes-rule';
import emptyRule from '../rules/empty-rule';

export const imgSearch: SearchConfig = {

    type: 'img',

    depth: 'all',

    limit: 1,

    extensions: imgExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        includesRule,

    ]

};

export default imgSearch;
