import EnvironmentMiner from "../../interfaces/environment-miner";

const ffprobe = require("ffprobe");
const ffprobeStatic = require("ffprobe-static");

export const stream: EnvironmentMiner = {

    analyzer: "miner",

    extensions: [".aac", ".aiff", ".webm", ".alac", ".amr", ".awb", ".dct", ".dss", ".dvf", ".flac", ".gsm", ".m4a", ".m4b", ".m4p", ".mmf", ".mp3", ".mpc", ".ogg", ".oga", ".mogg", ".opus", ".ra", ".rm", ".raw", ".rf64", ".sln", ".vox", ".wav", ".wma", ".wv", ".mkv", ".flv", ".ogv", ".avi", ".mov", ".wmv", ".rmvb", ".mp4", ".m4v", ".mpg", ".mp2", ".mpeg", ".mpe", ".mpv", ".mpg", ".mpeg", ".m2v", ".m4v", ".mxf", ".f4v", ".f4p", ".f4a", ".f4b"],

    preferences: {

        ignoringTypes: ["img", "css", "php"],

        ignoringExtensions: [".min.js", ".min", ".json", ".xml"],

        ignoringKeys: ["google", "youtube", "store", "apple", "cdnjs", "cloudflare", "jquery", "modernizr", "mrp", "ajax", "m2d", "creativebizz", "facebook"],

        searchFor: ["stream", "shout", "play", ";"],

    },

    filterRule: async (data: any): Promise<boolean> => {

        const { extensions, path } = data;

        // console.log('will get deep info for: ' + path + '\n');

        const info = await ffprobe(path, { path: ffprobeStatic.path });

        if (extensions && path && info) {

            const streams: any[] = info.streams;

            for (const streaming of streams) {

                let streamingPoints: number = 0;

                const rules = [
                    { points: 4, name: "isValidFormat", value: (extensions.indexOf(`.${streaming.codec_name}`) !== -1) },
                    { points: 1, name: "hasntStartTime", value: (typeof streaming.start_time === "undefined") },
                    { points: 1, name: "hasntStartPts", value: (typeof streaming.start_pts === "undefined") },
                    { points: 1, name: "hasntDuration", value: (typeof streaming.duration === "undefined") },
                    { points: 1, name: "hasntDurationTs", value: (typeof streaming.duration_ts === "undefined") },
                ]

                for (const rule of rules) {
                    if (rule.value) {
                        streamingPoints += rule.points;
                    }
                }

                if (streamingPoints >= 6) {
                    return true;
                }
            }
        }

        return false;
    }
};

export default stream;
