import minExtensions from "../extensions/min-extensions";
import flashExtensions from "../extensions/flash-extensions";
import xmlExtensions from "../extensions/xml-extensions";
import imgExtensions from "../extensions/img-extensions";
import cssExtensions from "../extensions/css-extensions";
import phpExtensions from "../extensions/php-extensions";
import fontExtensions from "../extensions/font-extensions";
import ConfigIgnore from "../../interfaces/config-ignore";
import commonDomains from '../fragments/common-domains';
import commonSocial from '../fragments/common-social';
import commonBlogs from '../fragments/common-blogs';
import commonCodes from '../fragments/common-codes';
import commonWords from '../fragments/common-words';

export const streamIgnore: ConfigIgnore = {

    extensions: [

        ...minExtensions,

        ...flashExtensions,

        ...xmlExtensions,

        ...imgExtensions,

        ...cssExtensions,

        ...phpExtensions,

        ...fontExtensions,

    ],

    keys: [

        ...commonDomains,

        ...commonSocial,

        ...commonBlogs,

        ...commonCodes,

        ...commonWords,

    ],

};

export default streamIgnore;
