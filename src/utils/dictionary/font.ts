import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const font: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".ttf", ".otf", ".woff", ".eot", ".svg"],

    preferences: emptyPreferences

};

export default font;
