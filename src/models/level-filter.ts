import SearchType from "../interfaces/search-type";
import TypePath from "../interfaces/type-path";
import Dictionary from "./dictionary";
import ConfigFilter from "../interfaces/config-filter";
import ConfigExtensions from "../interfaces/config-extensions";

export class LevelFilter {

    private readonly extensions: ConfigExtensions;

    private readonly rule: ConfigFilter;

    constructor(extensions: ConfigExtensions, rule: ConfigFilter) {
        this.extensions = extensions;
        this.rule = rule;
    }

    public async apply(path: TypePath): Promise<boolean> {

        try {

            // console.log('will get deep info for: ' + path + '\n');

            const extensions = this.extensions;
            const rule = this.rule;

            return await rule(path, extensions);

        } catch (error) {

            return false;

        }

    }

}

export default LevelFilter;
