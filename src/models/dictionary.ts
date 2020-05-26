import ConfigExtensions from '../interfaces/config-extensions';
import ConfigIgnore from '../interfaces/config-ignore';
import ConfigFilter from '../interfaces/config-filter';
import SearchConfig from '../interfaces/search-config';
import SearchDepth from '../interfaces/search-depth';
import SearchType from '../interfaces/search-type';
import ConfigSort from '../interfaces/config-sort';
import TypeLevel from '../interfaces/type-level';
import javascriptSearch from '../utils/searches/javascript-search';
import streamSearch from '../utils/searches/stream-search';
import videoSearch from '../utils/searches/video-search';
import audioSearch from '../utils/searches/audio-search';
import fontSearch from '../utils/searches/font-search';
import urlSearch from '../utils/searches/url-search';
import imgSearch from '../utils/searches/img-search';
import cssSearch from '../utils/searches/css-search';
import phpSearch from '../utils/searches/php-search';

export class Dictionary {

    public readonly type: SearchType;

    public readonly searches = {
        'url': urlSearch,
        'font': fontSearch,
        'img': imgSearch,
        'audio': audioSearch,
        'video': videoSearch,
        'stream': streamSearch,
        'javascript': javascriptSearch,
        'css': cssSearch,
        'php': phpSearch,
    };

    constructor(type: SearchType) {
        this.type = type;
    }

    public get config(): SearchConfig {
        return this.searches[this.type];
    }

    public get depth(): SearchDepth {
        return this.config.depth;
    }

    public get limit(): TypeLevel {
        return this.config.limit;
    }

    public get extensions(): ConfigExtensions {
        return this.config.extensions;
    }

    public get sort(): ConfigSort {
        return this.config.sort;
    }

    public get ignore(): ConfigIgnore {
        return this.config.ignore;
    }

    public get filter(): ConfigFilter {
        return this.config.filter;
    }

}

export default Dictionary;
