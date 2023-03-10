const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
console.log(first);
const second = readFileSync('./content/second.txt', 'utf8');
console.log(second);
writeFileSync(
    './content/third.txt',
    first + second,
    // {flag: 'a',}
    );