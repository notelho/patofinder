import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import includesRule from '../rules/includes-rule';

export const css: SearchData = {

    type: 'css',

    depth: 'all',

    extensions: [".css"],

    preferences: emptyPreferences,

    rule: includesRule

};

export default css;
