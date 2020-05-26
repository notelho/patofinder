import FilterPreferences from '../interfaces/filter-preferences';
import TypeExtension from '../interfaces/type-extension';
import SearchData from '../interfaces/search-data';
import FilterRule from '../interfaces/filter-rule';
import SearchType from '../interfaces/search-type';
import javascript from '../utils/searches/javascript-search';
import stream from '../utils/searches/stream-search';
import video from '../utils/searches/video-search';
import audio from '../utils/searches/audio-search';
import font from '../utils/searches/font-search';
import url from '../utils/searches/url-search';
import img from '../utils/searches/img-search';
import css from '../utils/searches/css-search';
import php from '../utils/searches/php-search';
import SearchDepth from '../interfaces/search-depth';
import TypeLevel from '../interfaces/type-level';

export class Dictionary {

    public readonly type: SearchType;

    public readonly searches = {
        'url': url,
        'font': font,
        'img': img,
        'audio': audio,
        'video': video,
        'stream': stream,
        'javascript': javascript,
        'css': css,
        'php': php,
    };

    constructor(type: SearchType) {
        this.selected = type;
    }

    public get data(): SearchData {
        return this.types[this.selected];
    }

    public get depth(): SearchDepth {
        return this.data.depth;
    }

    public get level(): TypeLevel {
        return this.data.level;
    }

    public get extensions(): TypeExtension[] {
        return this.data.extensions;
    }

    public get preferences(): FilterPreferences {
        return this.data.preferences;
    }

    public get rule(): FilterRule {
        return this.data.rule;
    }

}

export default Dictionary;
