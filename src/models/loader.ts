export class Loader {

    private loaders: string[];

    private index: number;

    constructor() {
        this.loaders = ['-', '/', '|', '\\'];
        this.index = 0;
    }

    public next(): string {
        if (this.index >= this.loaders.length) {
            this.index = 0;
        }
        return this.loaders[this.index++];
    }

}

export default Loader;
