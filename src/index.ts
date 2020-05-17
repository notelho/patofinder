// export * from './public/find';


import find from './public/find';

async function test() {

    // const matches = await find('http://radiosaovivo.net/embed/guaruja-florianopolis/', 'stream');
    // const matches = await find('https://massafm.com.br/home/', 'stream');
    // const matches = await find('http://www.radios.com.br/play/14', 'url');
    const matches = await find('http://www.radios.com.br/play/14', 'stream');

    // for (const match of matches) {
    //     console.log(match);
    // }

}

test();
