import SearchConfig from '../../interfaces/search-config';
import endingFilter from '../filters/ending-filter';
import emptyIgnore from '../ignores/empty-ignore';
import emptySort from '../sorts/empty-sort';

export const video: SearchConfig = {

    type: "video",

    depth: 'all',

    limit: 1,

    extensions: [".webm", ".mkv", ".flv", ".pls", ".ogv", ".ogg", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4p", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    sort: emptySort,

    ignore: emptyIgnore,

    filter: endingFilter

};

export default video;
