import SearchData from '../../interfaces/search-data';
import emptyPreferences from '../preferences/empty-preferences';
import endingRule from '../rules/ending-rule';

export const audio: SearchData = {

    type: 'audio',

    depth: 'all',

    level: 1,

    extensions: [".aac", ".aiff", ".webm", "m3u", ".alac", ".amr", ".awb", ".dct", ".dss", ".dvf", ".flac", ".gsm", ".m4a", ".m4b", ".m4p", ".mmf", ".mp3", ".mpc", ".ogg", ".oga", ".mogg", ".opus", ".ra", ".rm", ".raw", ".rf64", ".sln", ".vox", ".wav", ".wma", ".wv"],

    preferences: emptyPreferences,

    rule: endingRule

};

export default audio;
