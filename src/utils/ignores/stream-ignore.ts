import ConfigIgnore from "../../interfaces/config-ignore";
import commonDomains from '../fragments/common-domains';
import commonSocial from '../fragments/common-social';
import commonBlogs from '../fragments/common-blogs';
import commonCodes from '../fragments/common-codes';
import commonWords from '../fragments/common-words';

export const streamIgnore: ConfigIgnore = {

    types: ['img', 'css', 'php', 'font'],

    extensions: ['.min.js', '.min', '.xml', '.swf'],

    keys: [

        ...commonDomains,

        ...commonSocial,

        ...commonBlogs,

        ...commonCodes,

        ...commonWords,

    ],

};

export default streamIgnore;
