import audioExtensions from '../extensions/audio-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import notSameRule from '../rules/not-same-rule';

export const audioSearch: SearchConfig = {

    type: 'audio',

    depth: 'all',

    limit: 1,

    extensions: audioExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    rules: [

        endingRule,

        notSameRule,

    ]

};

export default audioSearch;
