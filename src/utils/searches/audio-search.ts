import endingFilter from '../filters/ending-filter';
import SearchConfig from '../../interfaces/search-config';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const audio: SearchConfig = {

    type: 'audio',

    depth: 'all',

    limit: 1,

    extensions: [".aac", ".aiff", ".webm", "m3u", ".alac", ".amr", ".awb", ".dct", ".dss", ".dvf", ".flac", ".gsm", ".m4a", ".m4b", ".m4p", ".mmf", ".mp3", ".mpc", ".ogg", ".oga", ".mogg", ".opus", ".ra", ".rm", ".raw", ".rf64", ".sln", ".vox", ".wav", ".wma", ".wv"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default audio;
