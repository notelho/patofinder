import EnvironmentFilter from '../../interfaces/environment-filter';
import emptyPreferences from '../preferences/empty-preferences';

export const img: EnvironmentFilter = {

    analyzer: "filter",

    extensions: [".jpg", ".jpeg", ".svg", ".png", ".gif", ".gifv", ".tiff", ".psd", ".pdf", ".eps", ".ai", ".indd", ".raw", ".ico"],

    preferences: emptyPreferences

};

export default img;
