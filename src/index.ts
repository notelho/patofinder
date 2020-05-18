// export * from './public/find';


import find from './public/find';

async function test() {

    // const matches = await find('http://radiosaovivo.net/embed/guaruja-florianopolis/', 'stream');
    // const matches = await find('https://massafm.com.br/home/', 'stream');
    // const matches = await find('http://www.radios.com.br/play/14', 'url');

    const matches = await find('http://www.radios.com.br/play/14', 'stream');

    // const matches = await find('http://192.99.44.104:8010/stream', 'stream');

    // 'https://freesound.org/data/previews/518/518425_11289675-lq.mp3',
    // 'http://8903.brasilstream.com.br:8903/stream?1589752897235',

    // const audio = 'https://freesound.org/data/previews/518/518425_11289675-lq.mp3';
    // const stream = 'http://8903.brasilstream.com.br:8903/stream?1589752897235';

    // const path = 'http://192.99.44.104:8010/stream';
    // https://player.painelvox.com/player-ssl/8306/;

    // for (const match of matches) {
    //     console.log(match);
    // }

}

test();
