import ConfigExtensions from "../interfaces/config-extensions";
import ConfigRule from "../interfaces/config-rule";
import TypePath from "../interfaces/type-path";

export class LevelFilter {

    private readonly extensions: ConfigExtensions;

    private readonly rule: ConfigRule;

    constructor(extensions: ConfigExtensions, rule: ConfigRule) {
        this.extensions = extensions;
        this.rule = rule;
    }

    public async apply(path: TypePath): Promise<boolean> {

        try {

            const extensions = this.extensions;
            const rule = this.rule;

            return await rule(path, extensions);

        } catch (error) {

            return false;

        }

    }

}

export default LevelFilter;
