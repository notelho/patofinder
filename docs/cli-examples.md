# Help

Usage: patofinder [options]

An elegant way to search for urls with web scraping (https://www.npmjs.com/package/patofinder)

Options:
  -V, --version      output the version number
  -P, --path <url>   specifies the path for scan [required]
  -T, --type <type>  specifies the type of search [required]
  -v, --verbose      enable application search logs (cli only)
  -e, --example      show command line examples (cli only)
  -h, --help         display help for command

# Search

- Search for a specific type in a url
```bash
    patofinder --path http://foo.bar.com --type audio
```

- Search for a specific type with logs
```bash
    patofinder --path http://foo.bar.com --type video --verbose
```

- Show examples
```bash
    patofinder --example
```

- Show help
```bash
    patofinder --help
```

# Types
