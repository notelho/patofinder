import ConfigExtensions from "./config-extensions";
import TypePath from "./type-path";

export type ConfigRule = (path: TypePath, extensions: ConfigExtensions) => Promise<boolean>;

export default ConfigRule;
