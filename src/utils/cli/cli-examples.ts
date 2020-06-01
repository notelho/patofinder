import chalk from 'chalk';

export function cliExamples(): void {

    console.log('');

    console.log('    Run patofinder with the --path and --type options to start the application:');
    console.log('    » path: the path you want to scan');
    console.log('    » type: what do you want to search for');

    console.log('');

    console.log('    Search for a specific audio in a url:');
    console.log('    ' + chalk.bgWhite(chalk.black('patofinder --path http://foo.bar.com --type audio')));
    console.log('    Search for a specific video and enable logs:');
    console.log('    ' + chalk.bgWhite(chalk.black('patofinder --path http://foo.bar.com --type video --verbose')));

    console.log('');

    console.log('    Available search types (check github for a more detailed description for each one):');
    console.log('    » audio                  # Search in a url for audio types');
    console.log('    » css                    # Search in a url for links with css');
    console.log('    » font                   # Search in a url for linked fonts');
    console.log('    » img                    # Search in a url for images');
    console.log('    » javascript             # Search in a url for javascript files');
    console.log('    » php                    # Search in a url for php paths');
    console.log('    » stream                 # Search in a url for online streaming');
    console.log('    » url                    # Search in a url for all linked urls');
    console.log('    » video                  # Search in a url for video types');

    console.log('');

}

export default cliExamples;
