import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import includesRule from '../rules/includes-rule';

export const font: SearchData = {

    type: 'font',

    depth: 'all',

    extensions: [".ttf", ".otf", ".woff", ".eot", ".svg"],

    preferences: emptyPreferences,

    rule: includesRule

};

export default font;
