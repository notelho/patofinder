import audioExtensions from '../extensions/audio-extensions';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';
import endingRule from '../rules/ending-rule';
import samePathRule from '../rules/same-path-rule';

export const audioSearch: SearchConfig = {

    type: 'audio',

    depth: 'all',

    limit: 1,

    extensions: audioExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filterRule: endingRule,

    equalsRule: samePathRule

};

export default audioSearch;
