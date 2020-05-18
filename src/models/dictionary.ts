import SearchType from '../interfaces/search-type';
import EnvironmentFilter from '../interfaces/environment-filter';
import EnvironmentMiner from '../interfaces/environment-miner';
import FilterRule from '../interfaces/filter-rule';
import TypeExtensions from '../interfaces/type-extensions';
import TypeAnalyzer from '../interfaces/type-analyzer';
import url from '../utils/dictionary/url';
import img from '../utils/dictionary/img';
import audio from '../utils/dictionary/audio';
import video from '../utils/dictionary/video';
import stream from '../utils/dictionary/stream';
import javascript from '../utils/dictionary/javascript';
import css from '../utils/dictionary/css';
import php from '../utils/dictionary/php';

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

    public get environment(): EnvironmentFilter | EnvironmentMiner {
        return this.availableTypes[this.selectedType] as EnvironmentFilter | EnvironmentMiner;
    }

    public get analyzer(): TypeAnalyzer {
        return this.environment.analyzer;
    }

    public get extensions(): TypeExtensions {
        return this.environment.extensions;
    }

    public get filterRule(): FilterRule {
        return (this.environment as EnvironmentMiner).filterRule;
    }

}

export default Dictionary;
