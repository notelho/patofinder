import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";

export class Ignorer {

    private type: SearchType;

    private history: TypePath[];

    constructor(type: SearchType) {
        this.type = type;
        this.history = [];
    }

    apply(paths: TypePath[]): TypePath[] {

        let ignoringWords: TypePath[] = [];

        const type = this.type;
        const history = this.history;

        const dictionary = new Dictionary(type);

        const preferences = dictionary.preferences;
        const ignoringTypes = preferences.ignoringTypes;

        for (const ignoringType of ignoringTypes) {

            const excludingDictionary = new Dictionary(ignoringType);
            const excludingExtensions = excludingDictionary.extensions;

            ignoringWords = ignoringWords.concat(excludingExtensions);

        }

        const ignoringExtensions = preferences.ignoringExtensions;
        const ignoringKeys = preferences.ignoringKeys;

        ignoringWords = ignoringWords.concat(ignoringExtensions);
        ignoringWords = ignoringWords.concat(ignoringKeys);
        ignoringWords = ignoringWords.concat(history);

        const matches: TypePath[] = [];

        for (const path of paths) {

            let matchAnyWord: boolean = false;

            for (const ignoringWord of ignoringWords) {
                if (path.includes(ignoringWord)) {
                    matchAnyWord = true;
                    break;
                }
            }

            if (!matchAnyWord) {
                matches.push(path);
            }

        }

        this.history = history.concat(matches);

        return matches;
    }

}

export default Ignorer;
