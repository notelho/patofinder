import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigFilter from "../../interfaces/config-filter";
import TypePath from "../../interfaces/type-path";

export function anyFilter(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => resolve(true));

}

export default anyFilter as ConfigFilter;
