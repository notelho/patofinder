// export * from './public/find';


import find from './public/find';

async function test() {

    // const matches = await find('http://radiosaovivo.net/embed/guaruja-florianopolis/', 'stream');
    // const matches = await find('https://massafm.com.br/home/', 'stream');
    const matches = await find('https://radiosaovivo.net/guaruja-florianopolis/', 'img');

    // console.log(matches);

}

test();

