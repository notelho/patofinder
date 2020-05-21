import FilterPreferences from "../../interfaces/filter-preferences";

export const streamPreferences: FilterPreferences = {

    ignoringTypes: ["img", "css", "php"],

    ignoringExtensions: [".min.js", ".min", ".json", ".xml", ".swf"],

    ignoringKeys: ["google", "youtube", "macromedia", "onelink", "flashplayer", "store", "apple", "cdnjs", "cloudflare", "jquery", "modernizr", "swfobject", "mrp", "purl.org", "w3.org", "Atom", "rss", "ajax", "m2d", "creativebizz", "facebook", "shadowbox.js",],

    searchFor: ["stream", "shout", "virtualcast", "icecast", "cast", "live", "play", ";"]

};

export default streamPreferences;
