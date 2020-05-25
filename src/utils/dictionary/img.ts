import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import endingRule from '../rules/ending-rule';

export const img: SearchData = {

    type: 'img',

    depth: 'all',

    extensions: [".jpg", ".jpeg", ".svg", ".png", ".gif", ".gifv", ".tiff", ".psd", ".pdf", ".eps", ".ai", ".indd", ".raw", ".ico"],

    preferences: emptyPreferences,

    rule: endingRule

};

export default img;
