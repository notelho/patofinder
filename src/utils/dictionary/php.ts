import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const php: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".php"],

    preferences: emptyPreferences

};

export default php;
