import fontExtensions from '../extensions/font-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import includesRule from '../rules/includes-rule';
import emptyRule from '../rules/empty-rule';

export const fontSearch: SearchConfig = {

    type: 'font',

    depth: 'all',

    limit: 1,

    extensions: fontExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        includesRule,

    ]

};

export default fontSearch;
