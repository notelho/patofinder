## Regexp

The library exports the regexps of absolute and relative paths that are used to check whether a string matches a link or not.

### Absolute path

Created by [Diego Perini](https://gist.github.com/dperini/729294), the absolute path regexp match all types of web abolute paths.

```typescript

    import patofinder from 'patofinder';

    const aboslutePath: Regexp = patofinder.absolutePath;

    aboslutePath.test('http://www.google.com/'); // true

```

### Relative path

The relative path is a simple regexp that matches relative folders paths:

```typescript

   import patofinder from 'patofinder';

    const relativePath: Regexp = patofinder.relativePath;

    relativePath.test('/path/to/folder/file.js'); // true
    relativePath.test('../../folder/file3.css'); // true
    relativePath.test('./path/file2.css'); // true

```

## Type search

The type search regexp is also a simple regexp that matches valid search type.

```typescript

   import patofinder from 'patofinder';

    const typeSearch: Regexp = patofinder.typeSearch;

    typeSearch.test('audio'); // true
    typeSearch.test('video'); // true
    typeSearch.test('foo'); // false

```

You can see all search types [here](./example-types.md).
