import TypePath from "../../interfaces/type-path";
import resolvePath from "./resolve-path";

export function resolveAllPaths(basePath: TypePath, relativePaths: TypePath[]): TypePath[] {

    const resolvedPaths: TypePath[] = [];

    for (const relativePath of relativePaths) {

        const resolvedPath = resolvePath(basePath, relativePath);

        if (resolvedPath) {
            resolvedPaths.push(resolvedPath);
        }

    }

    return resolvedPaths;
}

export default resolveAllPaths;
