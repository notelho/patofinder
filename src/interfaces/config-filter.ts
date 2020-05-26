import ConfigExtensions from "./config-extensions";
import TypePath from "./type-path";

export type ConfigFilter = (path: TypePath, extensions: ConfigExtensions) => Promise<boolean>;

export default ConfigFilter;
