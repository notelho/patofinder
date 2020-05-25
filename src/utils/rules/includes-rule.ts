import SearchType from "../../interfaces/search-type";
import TypePath from "../../interfaces/type-path";
import Dictionary from "../../models/dictionary";

export function includesRule(path: TypePath, type: SearchType): Promise<boolean> {

    const dictionary = new Dictionary(type);
    const extensions = dictionary.extensions;

    return new Promise(resolve => {

        for (const extension of extensions) {
            if (path.includes(extension)) {
                resolve(true);
            }
        }

        resolve(false);

    });

}

export default includesRule;
