# Cli examples

```bash
Usage: patofinder [options]

Options:
  -V, --version      # output the version number
  -P, --path <url>   # specifies the path for scan [required]
  -T, --type <type>  # specifies the type of search [required]
  -v, --verbose      # enable application search logs (cli only)
  -e, --example      # show command line examples (cli only)
  -h, --help         #display help for command
```

## Search

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

## Types

See example-types for a more detailed description

Available search types:

```bash
- audio:            # Search in a url for audio types
- css:              # Search in a url for links with css
- font:             # Search in a url for linked fonts
- img:              # Search in a url for images
- javascript:       # Search in a url for javascript files
- php:              # Search in a url for php paths
- stream:           # Search in a url for online streaming
- url:              # Search in a url for all linked urls
- video:            # Search in a url for audio video types
```
