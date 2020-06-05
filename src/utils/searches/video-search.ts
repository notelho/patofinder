import videoExtensions from '../extensions/video-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import samePathRule from '../rules/same-path-rule';

export const videoSearch: SearchConfig = {

    type: "video",

    depth: 'all',

    limit: 1,

    extensions: videoExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filterRule: endingRule,

    equalsRule: samePathRule

};

export default videoSearch;
