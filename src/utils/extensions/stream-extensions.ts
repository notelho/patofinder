import ConfigExtensions from '../../interfaces/config-extensions';
import audioExtensions from './audio-extensions';
import videoExtensions from './video-extensions';

export const streamExtensions: ConfigExtensions = [
    ...audioExtensions,
    ...videoExtensions,
];

export default streamExtensions;
