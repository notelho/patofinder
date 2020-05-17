import SearchDictionary from "../interfaces/search-dictionary";

export const searchDictionary: SearchDictionary = {

    "img": {
        "analyzer": "filter",
        "extensions": [
            "jpg",
            "jpeg",
            "svg",
            "png",
            "gif",
            "gifv",
            "tiff",
            "psd",
            "pdf",
            "eps",
            "ai",
            "indd",
            "raw",
        ]
    },

    "audio": {
        "analyzer": "filter",
        "extensions": [
            "aac",
            "aiff",
            "webm",
            "alac",
            "amr",
            "awb",
            "dct",
            "dss",
            "dvf",
            "flac",
            "gsm",
            "m4a",
            "m4b",
            "m4p",
            "mmf",
            "mp3",
            "mpc",
            "ogg",
            "oga",
            "mogg",
            "opus",
            "ra",
            "rm",
            "raw",
            "rf64",
            "sln",
            "vox",
            "wav",
            "wma",
            "wv",
        ]
    },

    "video": {
        "analyzer": "filter",
        "extensions": [
            "webm",
            "mkv",
            "flv",
            "flv",
            "ogv",
            "ogg",
            "avi",
            "mov",
            "wmv",
            "rmvb",
            "mp4",
            "m4p",
            "m4v",
            "mpg",
            "mp2",
            "mpeg",
            "mpe",
            "mpv",
            "mpg",
            "mpeg",
            "m2v",
            "m4v",
            "mxf",
            "flv",
            "f4v",
            "f4p",
            "f4a",
            "f4b",
        ]
    },

    "stream": {
        "analyzer": "miner",
        "breakpoint": 3
    },

    "javascript": {
        "analyzer": "filter",
        "extensions": [
            "js",
        ]
    },

    "css": {
        "analyzer": "filter",
        "extensions": [
            "css",
        ]
    }

}

export default searchDictionary;
