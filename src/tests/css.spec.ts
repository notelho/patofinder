import * as patofinder from '../';

describe("using patofinder search for css in a page", () => {

    const searchType = 'css';

    it('should find one or more css files', async () => {

        const searchPath = 'https://www.youtube.com/';
        const resultPaths = await patofinder.find(searchPath, searchType);

        console.log('result:');
        console.log(resultPaths);

        expect(resultPaths).toEqual(
            expect.arrayContaining([
                expect.stringMatching(
                    patofinder.regexp.absolutePath
                )
            ])
        );

    });

    it('should not find any paths', async () => {

        const searchPath = 'https://www.sampleinvalidpath.com/';
        const resultPaths = await patofinder.find(searchPath, searchType);

        expect(resultPaths).toStrictEqual([]);

    });

});
