import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const video: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".webm", ".mkv", ".flv", ".ogv", ".ogg", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4p", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    preferences: emptyPreferences

};

export default video;
