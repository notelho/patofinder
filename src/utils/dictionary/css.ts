import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const css: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".css"],

    preferences: emptyPreferences

};

export default css;
