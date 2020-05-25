import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import regexpRule from '../rules/regexp-rule';

export const img: SearchData = {

    type: 'img',

    depth: 'all',

    extensions: [".jpg", ".jpeg", ".svg", ".png", ".gif", ".gifv", ".tiff", ".psd", ".pdf", ".eps", ".ai", ".indd", ".raw", ".ico"],

    preferences: emptyPreferences,

    rule: regexpRule

};

export default img;
