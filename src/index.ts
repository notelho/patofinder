// export * as interfaces from './public/interfaces';
// export * as regexp from './public/regexp';
// export * from './public/find';

import find from './public/find';

async function test() {

    console.log('===================================================\n');
    const url2 = 'http://www.radiorock.com.br/player';
    // const url2 = 'http://youtube.com';
    console.log(url2);
    // const matches2 = await find(url2, 'stream');
    const matches2 = await find(url2, 'url');
    console.log(matches2);
    console.log('===================================================\n');

    // "test": "npm run test:build && npm run test:install && npm run test:cli",

    // console.log('===================================================\n');
    // const url4 = 'http://radiomixfm.com.br/';
    // console.log(url4 + '\n');
    // const matches4 = await find(url4, 'stream');
    // console.log(matches4 + '\n');
    // console.log('===================================================\n');

    // condition
    // if rule
    // not-same-rule.ts

}

test();
