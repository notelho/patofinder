import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import endingRule from '../rules/ending-rule';

export const css: SearchData = {

    type: 'css',

    depth: 'all',

    level: 1,

    extensions: [".css"],

    preferences: emptyPreferences,

    rule: endingRule

};

export default css;
