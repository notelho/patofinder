import audioExtensions from '../extensions/audio-extensions';
import SearchConfig from '../../interfaces/search-config';
import endingFilter from '../filters/ending-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const audioSearch: SearchConfig = {

    type: 'audio',

    depth: 'all',

    limit: 1,

    extensions: audioExtensions,

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default audioSearch;
