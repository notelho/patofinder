import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import ratifyRule from '../rules/ratify-rule';

export const url: SearchData = {

    type: 'url',

    depth: 'all',

    extensions: [],

    preferences: emptyPreferences,

    rule: ratifyRule

};

export default url;
