import ConfigRule from "../../interfaces/config-rule";
import RuleData from "../../interfaces/rule-data";

const ffprobe = require("ffprobe");
const ffprobeStatic = require("ffprobe-static");

export async function streamRule(data: RuleData): Promise<boolean> {

    const extensions = data.extensions
    const path = data.searchPath;

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

export default streamRule as ConfigRule;
