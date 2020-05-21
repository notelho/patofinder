import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const javascript: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".js"],

    preferences: emptyPreferences

};

export default javascript;
