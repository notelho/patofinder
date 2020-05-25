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

    readonly selectedType: SearchType;

    readonly availableTypes = {
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
        this.selectedType = type;
    }

    public get environment(): SearchData {
        return this.availableTypes[this.selectedType];
    }

    public get depth(): SearchDepth {
        return this.environment.depth;
    }

    public get level(): TypeLevel {
        return this.environment.level;
    }

    public get extensions(): TypeExtension[] {
        return this.environment.extensions;
    }

    public get preferences(): FilterPreferences {
        return this.environment.preferences;
    }

    public get rule(): FilterRule {
        return this.environment.rule;
    }

}

export default Dictionary;
