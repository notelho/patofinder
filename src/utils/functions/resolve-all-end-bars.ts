import TypePath from '../../interfaces/type-path';
import resolveEndBar from './resolve-end-bar';

export function resolveAllEndBars(paths: TypePath[]): TypePath[] {

    const resolvedPaths: TypePath[] = [];

    for (const path of paths) {

        resolvedPaths.push(resolveEndBar(path));

    }

    return resolvedPaths;
}

export default resolveAllEndBars;
