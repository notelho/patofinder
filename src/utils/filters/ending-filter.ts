import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigFilter from "../../interfaces/config-filter";
import TypePath from "../../interfaces/type-path";

export function endingFilter(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => {

        const extensionsString = `(${extensions.join('|')})`;
        const extensionsRegex = new RegExp("\." + extensionsString + "$");
        const extensionsCheck = extensionsRegex.test(path);

        resolve(extensionsCheck);

    });

}

export default endingFilter as ConfigFilter;
