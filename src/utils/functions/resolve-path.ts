import TypePath from "../../interfaces/type-path";

export function resolvePath(basePath: string, relativePath: string): TypePath | undefined {

    try {

        const url = new URL(relativePath, basePath);

        const path = url.href;

        return path;

    } catch (error) {

        return undefined;

    }

}

export default resolvePath;
