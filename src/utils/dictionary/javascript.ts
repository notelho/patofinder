import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import includesRule from '../rules/includes-rule';

export const javascript: SearchData = {

    type: 'javascript',

    depth: 'all',

    level: 1,

    extensions: [".js"],

    preferences: emptyPreferences,

    rule: includesRule

};

export default javascript;
