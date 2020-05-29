import fontExtensions from '../extensions/font-extensions';
import SearchConfig from '../../interfaces/search-config';
import includesFilter from '../filters/includes-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const fontSearch: SearchConfig = {

    type: 'font',

    depth: 'all',

    limit: 1,

    extensions: fontExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: includesFilter

};

export default fontSearch;
