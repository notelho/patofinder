import ConfigExtensions from "../../interfaces/config-extensions";
import ConfigRule from "../../interfaces/config-rule";
import TypePath from "../../interfaces/type-path";

export function samePathRule(path: TypePath, extensions: ConfigExtensions): Promise<boolean> {

    return new Promise(resolve => {

        for (const extension of extensions) {

            const includePath = extension.includes(path)
            const samePath = extension === path;

            if (samePath || includePath) {
                resolve(false);
            }

        }

        resolve(true);

    });

}

export default samePathRule as ConfigRule;
