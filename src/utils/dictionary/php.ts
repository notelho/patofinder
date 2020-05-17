import SearchEnvironment from "../../interfaces/search-environment";

export const phpDictionary: SearchEnvironment = {
    "analyzer": "filter",
    "extensions": [
        ".php",
    ]
};

export default phpDictionary;
