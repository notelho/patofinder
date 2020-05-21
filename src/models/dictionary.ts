import FilterPreferences from '../interfaces/filter-preferences';
import EnvironmentFilter from '../interfaces/environment-filter';
import EnvironmentMiner from '../interfaces/environment-miner';
import TypeExtension from '../interfaces/type-extension';
import TypeAnalyzer from '../interfaces/type-analyzer';
import FilterRule from '../interfaces/filter-rule';
import SearchType from '../interfaces/search-type';
import javascript from '../utils/dictionary/javascript';
import stream from '../utils/dictionary/stream';
import video from '../utils/dictionary/video';
import audio from '../utils/dictionary/audio';
import url from '../utils/dictionary/url';
import img from '../utils/dictionary/img';
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

    public get extensions(): TypeExtension[] {
        return this.environment.extensions;
    }

    public get preferences(): FilterPreferences {
        return (this.environment as EnvironmentMiner).preferences;
    }

    public get filterRule(): FilterRule {
        return (this.environment as EnvironmentMiner).rule;
    }

}

export default Dictionary;
