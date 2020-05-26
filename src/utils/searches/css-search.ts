import SearchConfig from '../../interfaces/search-config';
import emptySort from '../sorts/empty-sort';
import emptyIgnore from '../ignores/empty-ignore';
import endingFilter from '../filters/ending-filter';

export const css: SearchConfig = {

    type: 'css',

    depth: 'all',

    limit: 1,

    extensions: [".css"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default css;
