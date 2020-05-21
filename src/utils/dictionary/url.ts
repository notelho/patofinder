import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const url: EnvironmentFilter = {

    analyzer: "filter",

    extensions: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", ";", ":", "-", ".", "_", "~", "|", "?", "/", "#"],

    preferences: emptyPreferences

};

export default url;
