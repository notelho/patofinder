import SearchType from "../../interfaces/search-type";
import TypePath from "../../interfaces/type-path";
import Dictionary from "../../models/dictionary";

export function regexpRule(path: TypePath, type: SearchType): Promise<boolean> {

    const dictionary = new Dictionary(type);
    const extensions = dictionary.extensions;

    return new Promise(resolve => {

        const extensionsString = `(${extensions.join('|')})`;
        const extensionsRegex = new RegExp("\." + extensionsString + "$");
        const extensionsCheck = extensionsRegex.test(path);

        resolve(extensionsCheck);

    });

}

export default regexpRule;
