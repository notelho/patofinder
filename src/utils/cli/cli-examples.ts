import cliHelp from './cli-help';
import chalk from 'chalk';

export function cliExamples(): void {

    'Run patofinder with the --path and --type options to start the application:'

    '- path: the path you want to scan'
    '- type: what do you want to search for'

    'Search for a specific audio in a url:'

    'patofinder --path http://foo.bar.com --type audio'

    'Search for a specific video and enable logs:'

    'patofinder --path http://foo.bar.com --type video --verbose'

    'Available search types (see [types](https://github.com/notelho/patofinder/blob/master/docs/example-types.md) for a more detailed description for each one):'

    '- audio                  # Search in a url for audio types'
    '- css                    # Search in a url for links with css'
    '- font                   # Search in a url for linked fonts'
    '- img                    # Search in a url for images'
    '- javascript             # Search in a url for javascript files'
    '- php                    # Search in a url for php paths'
    '- stream                 # Search in a url for online streaming'
    '- url                    # Search in a url for all linked urls'
    '- video                  # Search in a url for audio video types'

    'Check CLI help with the --help command:'

    cliHelp()

}

export default cliExamples;
