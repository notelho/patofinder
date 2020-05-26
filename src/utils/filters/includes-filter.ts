import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigFilter from "../../interfaces/config-filter";
import TypePath from "../../interfaces/type-path";

export function includesFilter(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => {

        for (const extension of extensions) {
            if (path.includes(extension)) {
                resolve(true);
            }
        }

        resolve(false);

    });

}

export default includesFilter as ConfigFilter;
