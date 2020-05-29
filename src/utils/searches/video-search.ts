import videoExtensions from '../extensions/video-extensions';
import SearchConfig from '../../interfaces/search-config';
import endingFilter from '../filters/ending-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const videoSearch: SearchConfig = {

    type: "video",

    depth: 'all',

    limit: 1,

    extensions: videoExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default videoSearch;
