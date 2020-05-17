import SearchEnvironment from "../../interfaces/search-environment";

export const audioDictionary: SearchEnvironment = {
    "analyzer": "filter",
    "extensions": [
        ".aac",
        ".aiff",
        ".webm",
        ".alac",
        ".amr",
        ".awb",
        ".dct",
        ".dss",
        ".dvf",
        ".flac",
        ".gsm",
        ".m4a",
        ".m4b",
        ".m4p",
        ".mmf",
        ".mp3",
        ".mpc",
        ".ogg",
        ".oga",
        ".mogg",
        ".opus",
        ".ra",
        ".rm",
        ".raw",
        ".rf64",
        ".sln",
        ".vox",
        ".wav",
        ".wma",
        ".wv",
    ]
};

export default audioDictionary;
