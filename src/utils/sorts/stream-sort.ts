import ConfigSort from "../../interfaces/config-sort";
import streamingKeywords from "../fragments/streaming-keywords";
import streamingPlayers from "../fragments/streaming-players";
import streamingSearch from "../fragments/streaming-search";

export const streamSort: ConfigSort = {

    keys: [

        ...streamingKeywords,

        ...streamingPlayers,

        ...streamingSearch,

    ]

};

export default streamSort;
