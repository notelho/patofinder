import SearchConfig from '../../interfaces/search-config';
import streamIgnore from '../ignores/stream-ignore';
import streamFilter from '../filters/stream-filter';
import streamSort from '../sorts/stream-sort';

export const stream: SearchConfig = {

    type: "stream",

    depth: 'first',

    limit: 3,

    extensions: [".aac", ".pls", ".aiff", "m3u", ".webm", ".alac", ".amr", ".awb", ".dct", ".dss", ".dvf", ".flac", ".gsm", ".m4a", ".m4b", ".m4p", ".mmf", ".mp3", ".mpc", ".ogg", ".oga", ".mogg", ".opus", ".ra", ".rm", ".raw", ".rf64", ".sln", ".vox", ".wav", ".wma", ".wv", ".mkv", ".flv", ".ogv", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    sort: streamSort,

    ignore: streamIgnore,

    filter: streamFilter

};

export default stream;
