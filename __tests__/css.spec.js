import { find, regexp } from '../src';

describe("using patofinder search for css in a page", () => {

    const searchType = 'css';

    it('should find one or more css files', async () => {

        const searchPath = 'https://www.youtube.com/';
        const resultPaths = await find(searchPath, searchType);

        expect(resultPaths).toEqual(
            expect.arrayContaining([
                expect.stringMatching(
                    regexp.absolutePath
                )
            ])
        );

    });

    it('should not find any paths', async () => {

        const searchPath = 'https://www.sampleinvalidpath.com/';
        const resultPaths = await find(searchPath, searchType);

        expect(resultPaths).toStrictEqual([]);

    });

});

// import find from './public/find';

// async function test() {

//     // console.log('===================================================\n');
//     // const url2 = 'http://www.radiorock.com.br/player';
//     // console.log(url2);
//     // const matches2 = await find(url2, 'stream');
//     // console.log(matches2);
//     // console.log('===================================================\n');

//     // console.log('===================================================\n');
//     // const url4 = 'http://radiomixfm.com.br/';
//     // console.log(url4 + '\n');
//     // const matches4 = await find(url4, 'stream');
//     // console.log(matches4 + '\n');
//     // console.log('===================================================\n');

// }

// test();
