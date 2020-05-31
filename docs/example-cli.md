## Search

Run patofinder with the --path and --type options to start the application:

- path: the path you want to scan  
- type: what do you want to search for  

Search for a specific audio in a url:
```bash
    patofinder --path http://foo.bar.com --type audio
```

Search for a specific video and enable logs:
```bash
    patofinder --path http://foo.bar.com --type video --verbose
```

## Types

Available search types (see [types](https://github.com/notelho/patofinder/blob/master/docs/example-types.md) for a more detailed description for each one):

```bash
- audio                  # Search in a url for audio types
- css                    # Search in a url for links with css
- font                   # Search in a url for linked fonts
- img                    # Search in a url for images
- javascript             # Search in a url for javascript files
- php                    # Search in a url for php paths
- stream                 # Search in a url for online streaming
- url                    # Search in a url for all linked urls
- video                  # Search in a url for audio video types
```

## Help

Check CLI help with the --help command:

```bash
Usage: patofinder [options]

Options:
  -V, --version          # output the version number
  -P, --path <url>       # specifies the path for scan [required]
  -T, --type <type>      # specifies the type of search [required]
  -v, --verbose          # enable application search logs (cli only)
  -e, --example          # check CLI examples (cli only)
  -h, --help             # check CLI help
```
