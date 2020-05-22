// export * from './public/find';

import find from './public/find';

async function test() {

    // https://stackoverflow.com/questions/14780350/convert-relative-path-to-absolute-using-javascript
    // "http://ice.fabricahost.com.br/89aradiorocksp?compat=1"
    // "http://cdn.live.nextdial.com.br/listen/alphafmsp"
    // "https://slave.shoutcast.com/AlphaFM101-7"

    // https://www.radiorock.com.br/player/assets/player/js/start.js?t=65

    // <script type="text/javascript" src="/assets/player/js/start.js?t=65"></script>

    // https://f11.fabricahost.com.br/89aradiorocksp?f=1

    // console.log('===================================================\n');
    // const url2 = 'https://www.radiorock.com.br/';
    // console.log(url2);
    // const matches2 = await find(url2, 'stream');
    // console.log(matches2);
    // console.log('===================================================\n');

    // console.log('===================================================\n');
    // const url3 = 'https://massafm.com.br/home/';
    // console.log(url3 + '\n');
    // const matches3 = await find(url3, 'stream');
    // console.log(matches3 + '\n');
    // console.log('===================================================\n');

    // const url4 = 'http://radiomixfm.com.br/';
    // console.log(url4 + '\n');
    // const matches4 = await find(url4, 'stream');
    // console.log(matches4 + '\n');

    // console.log('===================================================\n');

    // examples
    // 'https://freesound.org/data/previews/518/518425_11289675-lq.mp3',
    // 'http://8903.brasilstream.com.br:8903/stream?1589752897235',

}

test();
