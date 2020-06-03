# Patofinder

Patofinder is a open-source node library (with CLI included) that resolve urls of a page from a get request. It doesnt just get all paths, but also filter and look for specific types or extensions.

## Installation

Use the node package manager [NPM](https://www.npmjs.com/package/patofinder) to install it. You can install it locally to import the  into your javascript/typescript code or install it globally and use it directly as a command:

``` bash
npm i patofinder -g 
npm i patofinder
```

## Usage

Import the find function into your js/ts code and pass the url target and the selected search type:

``` typescript
import * as patofinder from 'patofinder';

async function foo() {

    /*
     * Get all image paths from foobar.com
     */
    const images = await patofinder.find('http://www.foobar.com/', 'img');

    console.log(images); // ['http://www.foobar.com/logo.jpg', 'http://www.foobar.com/sample.png']

}

foo();
```

Or run directly from your prompt:

``` bash
    patofinder --path http://www.foobar.com/ --type audio
```

## Errors

The library does not throw errors. If a request fails or the provided path is invalid, it will just return a empty array, for example:

``` typescript
import * as patofinder from 'patofinder';

async function foo() {

    const valid = await patofinder.find('http://www.foobar.com/', 'css');

    const invalid = await patofinder.find('http://www.invalidpath.org/', 'php');

    console.log(valid); // ['http://www.foobar.com/styles/main.css']

    console.log(invalid); // []

}

foo();
```

## Examples

The library has few functions and commands, but you can see some use cases in the docs folder:

* Available command line calls: see [cli examples](./docs/example-cli.md)
* Available library func calls: see [lib examples](./docs/example-lib.md)
* Available types and extensions: see [type examples](./docs/example-type.md)

## Contributing

The library is currently in todo implementation and will be finished soon. You can actually contribute by reporting errors or suggesting new features [here](https://github.com/notelho/patofinder/issues).

## Todo

* finish
    - create all tests
    - fix url search
    - update changelog 1.0.0

* todo
    - add depth option
    - add limit option

## License

[MIT](./LICENSE)
