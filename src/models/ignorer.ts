import TypePath from "../interfaces/type-path";
import SearchType from "../interfaces/search-type";
import Dictionary from "./dictionary";

export class Ignorer {

    private type: SearchType;

    // private history: TypePath[];

    constructor(type: SearchType) {
        this.type = type;
        // this.history = [path];
    }

    apply(paths: TypePath[]): TypePath[] {

        // const regexpBar = new RegExp(/\w*\//i);

        const type = this.type;

        const dictionary = new Dictionary(type);

        const preferences = dictionary.preferences;

        const ignoringExtensions = preferences.ignoringExtensions;
        // pra cada extensão criar um dicionario e fazer um for pra ignorar todas as intenções dauqele dicionario

        const ignoringKeys = preferences.ignoringKeys;
        // pra cada item remover a chaved de includes

        const ignoringTypes = preferences.ignoringTypes;
        // pra cada item remover a chaved de includes

        // pra cada item no historico verifica se for igual, se for, retira

        // matches concat history

        // console.log('=======');

        // console.log(paths);

        // ignore paths

        return paths;
    }

}

export default Ignorer;
