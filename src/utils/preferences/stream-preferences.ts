import FilterPreferences from '../../interfaces/filter-preferences';
import streamingKeywords from '../fragments/streaming-keywords';
import commonDomains from '../fragments/common-domains';
import commonSocial from '../fragments/common-social';
import commonBlogs from '../fragments/common-blogs';
import commonCodes from '../fragments/common-codes';
import commonWords from '../fragments/common-words';
import commonNames from '../fragments/common-names';

export const streamPreferences: FilterPreferences = {

    ignoringTypes: ['img', 'css', 'php', 'font'],

    ignoringExtensions: ['.min.js', '.min', '.xml', '.swf'],

    ignoringKeys: [

        ...commonDomains,

        ...commonSocial,

        ...commonBlogs,

        ...commonCodes,

        ...commonWords,

        ...commonNames,

    ],

    searchFor: [

        ...streamingKeywords,

    ]

};

export default streamPreferences;
