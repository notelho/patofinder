## Search

Import patofinder into your code and call it with the path and type options to run:
- path: the path you want to scan  
- type: what do you want to search for  

``` typescript
import patofinder from 'patofinder';

async function foo() {

    /*
     * Get all image paths from foobar.com
     */
    const images = await patofinder.find('http://www.foobar.com/', 'img');

    console.log(images); // ['http://www.foobar.com/logo.jpg', 'http://www.foobar.com/sample.png']

    /*
     * Get all video paths from foobar.com
     */
    const videos = await patofinder.find('http://www.foobar.com/', 'video');

    console.log(videos); // ['http://www.foobar.com/sample1.mp4', 'http://www.foobar.com/sample2.wmv']

    /*
     * Get first online streaming path found from foobar.com
     */
    const streams = await patofinder.find('http://www.foobar.com/', 'stream');

    console.log(streams); // ['http://ice.somecast:8000/live']

}

foo();
```

## Types

Available search types (see [types](./example-types.md) for a more detailed description for each one):

```bash
- audio                  # Search in a url for audio types
- css                    # Search in a url for links with css
- font                   # Search in a url for linked fonts
- img                    # Search in a url for images
- javascript             # Search in a url for javascript files
- php                    # Search in a url for php paths
- stream                 # Search in a url for online streaming
- url                    # Search in a url for all linked urls
- video                  # Search in a url for video types
```
