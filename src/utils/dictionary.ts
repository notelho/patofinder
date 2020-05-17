import SearchDictionary from "../interfaces/search-dictionary";
import imgDictionary from './dictionary/img';
import audioDictionary from './dictionary/audio';
import videoDictionary from './dictionary/video';
import streamDictionary from './dictionary/stream';
import javascriptDictionary from './dictionary/javascript';
import cssDictionary from './dictionary/css';

export const searchDictionary: SearchDictionary = {

    "img": imgDictionary,
    "audio": audioDictionary,
    "video": videoDictionary,
    "stream": streamDictionary,
    "javascript": javascriptDictionary,
    "css": cssDictionary,

}

export default searchDictionary;
