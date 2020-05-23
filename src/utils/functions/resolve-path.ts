import TypePath from "../../interfaces/type-path";

export function resolvePath(basePath: string, relativePath: string): TypePath | null {

    try {

        const url = new URL(relativePath, basePath);

        const path = url.href;

        return path;

    } catch (error) {

        return null;

    }

}

export default resolvePath;
