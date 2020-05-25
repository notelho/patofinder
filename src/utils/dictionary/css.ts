import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import regexpRule from '../rules/regexp-rule';

export const css: SearchData = {

    type: 'css',

    depth: 'all',

    extensions: [".css"],

    preferences: emptyPreferences,

    rule: regexpRule

};

export default css;
