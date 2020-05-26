import FilterPreferences from '../interfaces/filter-preferences';
import TypeExtension from '../interfaces/type-extension';
import SearchData from '../interfaces/search-data';
import FilterRule from '../interfaces/filter-rule';
import SearchType from '../interfaces/search-type';
import javascript from '../utils/dictionary/javascript';
import stream from '../utils/dictionary/stream';
import video from '../utils/dictionary/video';
import audio from '../utils/dictionary/audio';
import font from '../utils/dictionary/font';
import url from '../utils/dictionary/url';
import img from '../utils/dictionary/img';
import css from '../utils/dictionary/css';
import php from '../utils/dictionary/php';
import SearchDepth from '../interfaces/search-depth';
import TypeLevel from '../interfaces/type-level';

export class Dictionary {

    public readonly selected: SearchType;

    public readonly types = {
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
