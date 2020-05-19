import TypePath from "./type-path";
import TypeLevel from "./type-level";

export interface SearchLevel {
    path: TypePath;
    level: TypeLevel;
    check?: boolean;
}

export default SearchLevel;
