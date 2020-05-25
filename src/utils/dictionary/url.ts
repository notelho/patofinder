import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import includesRule from '../rules/includes-rule';

export const url: SearchData = {

    type: 'url',

    depth: 'all',

    extensions: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", ";", ":", "-", ".", "_", "~", "|", "?", "/", "#"],

    preferences: emptyPreferences,

    rule: includesRule

};

export default url;
