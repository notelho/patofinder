export const regexpFolder = new RegExp(/^(\.?\.?\/)+/ig);

export default regexpFolder;

// const regexp = new RegExp(/^\/?(?!-)[a-z0-9-]+(?<!-)(\/(?!-)[a-z0-9-]+(?<!-))*(\/(?!-\.)[a-z0-9-\.]+(?<!-\.))?$/g);

// const regexp = new RegExp(/^(?!-)[a-z0-9-]+(?<!-)(\/(?!-)[a-z0-9-]+(?<!-))*$/g);
// const regexp = new RegExp(/(\\\\?([^\\/]*[\\/])*)([^\\/]+)$/g);

// https://stackoverflow.com/questions/34691809/regex-match-folder-and-all-subfolders
// folder regexp

// const prefix = /^((..\/)|(.\/))?*/g;

// const regexp = new RegExp(/^((..\/)*|(.\/)*|(\/)*)?(?!-)[a-z0-9-]+(?<!-)(\/(?!-)[a-z0-9-]+(?<!-))*(\/(?!-\.)[a-z0-9-\.]+(?<!-\.))?$/g);
// ================================================
// begin
// match: /testezera/testezera
// match: /testezada/testezito
// match: test/test.png
// match: /cdn/teste/teste.js
// match: F:/fake/windows/paths
// match: file
// match: ./ponto/barra.css
// match: ../teste/teste.png
// match: ../../../js/jabascript.ts
// end
// ================================================

// /(?!-)[a-z0-9-]+(?<!-)(\/(?!-)[a-z0-9-]+(?<!-))*(\/(?!-\.)[a-z0-9-\.]+(?<!-\.))?$/ez

// const regexp = new RegExp(/(^\.|^\/)((..\/)|(.\/)|(\/))+(?!-)[a-z0-9-]/ig);
// const regexp = new RegExp(/^(..\/|.\/|\/)+/ig);
// const regexp = new RegExp(/(^\.|^\/)((..\/)|(.\/)|(\/))+(?!-)[a-z0-9-]/ig);

// const tests = [
//     'C:\Program Files',
//     'C:/Program Files',
//     '/testezera/testezera',
//     '/testezada/testezito',
//     'testezada/testezito/',
//     'test/test.png',
//     '/cdn/teste/teste.js',
//     'freesound.org/data/previews/518/518425_11289675-lq.mp3',
//     'http://8903.brasilstream.com.br:8903/stream?1589752897235',
//     'https://cdn.live.nextdial.com.br/listen/alphafmsp?',
//     '\\smb\paths--',
//     'F:/fake/windows/paths',
//     'C:\traditional\paths',
//     '\file.ext',
//     'file:///some/path/',
//     'file',
//     './ponto/barra.css',
//     '../teste/teste.png',
//     '../../../js/jabascript.ts',
//     '/assets/player/js/player.js?v=1563'
// ]
