import TypePath from "../../interfaces/type-path";

export function resolvePath(absolutePath: string, relativePath: string): TypePath | null {

    try {

        const url = new URL(relativePath, absolutePath);

        const path = url.href;

        return path;

    } catch (error) {

        return null;

    }

}

export default resolvePath;
