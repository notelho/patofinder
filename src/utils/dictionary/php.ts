import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import includesRule from '../rules/includes-rule';

export const php: SearchData = {

    type: "php",

    extensions: [".php"],

    preferences: emptyPreferences,

    rule: includesRule

};

export default php;
