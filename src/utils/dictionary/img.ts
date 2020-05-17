import SearchEnvironment from "../../interfaces/search-environment";

export const imgDictionary: SearchEnvironment = {
    "analyzer": "filter",
    "extensions": [
        ".jpg",
        ".jpeg",
        ".svg",
        ".png",
        ".gif",
        ".gifv",
        ".tiff",
        ".psd",
        ".pdf",
        ".eps",
        ".ai",
        ".indd",
        ".raw",
    ]
};

export default imgDictionary;
