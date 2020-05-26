import ConfigIgnore from "../../interfaces/config-ignore";
import commonDomains from '../fragments/common-domains';
import commonSocial from '../fragments/common-social';
import commonBlogs from '../fragments/common-blogs';
import commonCodes from '../fragments/common-codes';
import commonWords from '../fragments/common-words';

export const streamIgnore: ConfigIgnore = {

    extensions: ['.min.js', '.min.css', '.min', '.xml', '.swf'],

    keys: [

        ...commonDomains,

        ...commonSocial,

        ...commonBlogs,

        ...commonCodes,

        ...commonWords,

    ],

    types: ['img', 'css', 'php', 'font'],

};

export default streamIgnore;
