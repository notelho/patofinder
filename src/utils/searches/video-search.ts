import videoExtensions from '../extensions/video-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import notSameRule from '../rules/not-same-rule';

export const videoSearch: SearchConfig = {

    type: "video",

    depth: 'all',

    limit: 1,

    extensions: videoExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        endingRule,

        notSameRule

    ]

};

export default videoSearch;
