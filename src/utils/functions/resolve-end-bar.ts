import TypePath from '../../interfaces/type-path';
import endBarRegexp from '../regexp/end-bar';

export function resolveEndBar(path: TypePath): TypePath {

    return (path.match(endBarRegexp) ? path.slice(0, -1) : path) as TypePath;

}

export default resolveEndBar;
