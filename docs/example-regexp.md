## Regexp

The library exports the regexps of absolute and relative paths that are used to check whether a string matches a link or not.

### Absolute path

Created by [Diego Perini](https://gist.github.com/dperini/729294), the absolute path regexp match all types of web abolute paths.

```typescript

    import * as patofinder from 'patofinder';

    const aboslutePath: Regexp = patofinder.absolutePath;

```

### Relative path

Created by me, the relative path is a simple regexp that matches relative folders paths like:

* /path/to/folder/file.js
* ./path/file2.css
* ../../folder/file3.css

```typescript

    import * as patofinder from 'patofinder';

    const relativePath: Regexp = patofinder.relativePath;

```
