import EnvironmentMiner from '../../interfaces/environment-miner';

export const stream: EnvironmentMiner = {

    type: "miner",

    extensions: [".aac", ".aiff", ".webm", ".alac", ".amr", ".awb", ".dct", ".dss", ".dvf", ".flac", ".gsm", ".m4a", ".m4b", ".m4p", ".mmf", ".mp3", ".mpc", ".ogg", ".oga", ".mogg", ".opus", ".ra", ".rm", ".raw", ".rf64", ".sln", ".vox", ".wav", ".wma", ".wv", ".mkv", ".flv", ".ogv", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    filterRule: async (data: any): Promise<boolean> => {

        const extensions: string[] = data.extensions;
        const ffdata: any = data.ffdata;
        const streams: any[] = ffdata.streams;

        if (extensions && ffdata && streams) {
            for (const streaming of streams) {

                let streamingPoints: number = 0;

                const rules = [
                    { name: 'isValidFormat', value: (extensions.indexOf(`.${streaming.codec_name}`) !== -1) },
                    { name: 'hasntStartTime', value: (typeof streaming.start_time === 'undefined') },
                    { name: 'hasntStartPts', value: (typeof streaming.start_pts === 'undefined') },
                    { name: 'hasntDuration', value: (typeof streaming.duration === 'undefined') },
                    { name: 'hasntDurationTs', value: (typeof streaming.duration_ts === 'undefined') },
                ]

                for (const rule of rules) {
                    if (rule.value) {
                        streamingPoints++;
                    }
                }

                if (streamingPoints >= 3) {
                    return true;
                }
            }
        }

        return false;
    },
};

export default stream;
