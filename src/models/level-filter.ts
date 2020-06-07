import ConfigExtensions from "../interfaces/config-extensions";
import ConfigRule from "../interfaces/config-rule";
import TypePath from "../interfaces/type-path";
import RuleData from "../interfaces/rule-data";

export class LevelFilter {

    private readonly extensions: ConfigExtensions;

    private readonly basePath: TypePath;

    private readonly rules: ConfigRule[];

    constructor(path: TypePath, extensions: ConfigExtensions, rules: ConfigRule[]) {
        this.extensions = extensions;
        this.basePath = path;
        this.rules = rules;
    }

    public async apply(path: TypePath): Promise<boolean> {

        const data: RuleData = {
            extensions: this.extensions,
            basePath: this.basePath,
            searchPath: path
        }

        const rules = this.rules;

        const results: boolean[] = [];

        for (const rule of rules) {

            try {

                const result = await rule(data);

                results.push(result);

            } catch (error) {

                results.push(false);

            }

        }

        const validRules = rules.length;
        const validResults = results.length;
        const isValid = validResults === validRules;

        return isValid;
    }

}

export default LevelFilter;
