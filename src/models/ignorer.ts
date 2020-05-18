import TypePaths from "../interfaces/type-paths";
import SearchType from "../interfaces/search-type";
import TypeExtensions from "../interfaces/type-extensions";

export class Ignorer {

    private paths: TypePaths;

    constructor(paths: TypePaths) {
        this.paths = paths;
    }

    ignoreSearchType(type: SearchType): Ignorer {

        return this;
    }

    ignoreCustomTypes(extensions: TypeExtensions): Ignorer {

        return this;
    }

    source() {
        return this.paths;
    }

}

export default Ignorer;
