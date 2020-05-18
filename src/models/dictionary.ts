import url from '../utils/dictionary/url';
import img from '../utils/dictionary/img';
import audio from '../utils/dictionary/audio';
import video from '../utils/dictionary/video';
import stream from '../utils/dictionary/stream';
import javascript from '../utils/dictionary/javascript';
import css from '../utils/dictionary/css';
import php from '../utils/dictionary/php';

import SearchType from '../interfaces/search-type';
import EnvironmentFilter from '../interfaces/environment-filter';
import EnvironmentMiner from '../interfaces/environment-miner';
import FilterRule from '../interfaces/filter-rule';

export class Dictionary {

    readonly selectedType: SearchType;

    readonly availableTypes = {
        'url': url,
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

    getExtensions() {

        const type: SearchType = this.selectedType;
        const environment: EnvironmentFilter | EnvironmentMiner = this.availableTypes[type];
        const extensions = environment.extensions;

        return extensions;
    }

    getRule() {

        const type: SearchType = this.selectedType;
        const environment: EnvironmentFilter | EnvironmentMiner = this.availableTypes[type];
        const miner = environment as EnvironmentMiner;
        const rule = miner.filterRule;

        return rule;
    }

}



