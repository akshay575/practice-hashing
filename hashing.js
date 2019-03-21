var SHA256 = require('crypto-js/sha256');

var input1 = 'Hello World!';
var input2 = {
    id: 1,
    body: 'I am an object',
    time: new Date().getTime().toString()
}

console.log('Hash 1:', generateHash(input1).toString());
console.log('Hash 2:', generateHash(JSON.stringify(input2)));

function generateHash(input) {
    return SHA256(input).toString();
}