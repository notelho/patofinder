import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import endingRule from '../rules/ending-rule';

export const video: SearchData = {

    type: "video",

    depth: 'all',

    level: 1,

    extensions: [".webm", ".mkv", ".flv", ".pls", ".ogv", ".ogg", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4p", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    preferences: emptyPreferences,

    rule: endingRule

};

export default video;
