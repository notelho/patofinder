// export * from './public/find';

import find from './public/find';

async function test() {

    const matches = await find('http://radiosaovivo.net/embed/guaruja-florianopolis/', 'streaming');

    // console.log(matches);

}

test();
