var SHA256 = require('crypto-js/sha256');

var input1 = 'Hello World!';
var input2 = {
    id: 1,
    body: 'I am an object',
    time: new Date().getTime().toString()
}

console.log(generateHash(input1));
console.log(generateHash(JSON.stringify(input2)));

function generateHash(input) {
    return SHA256(input);
}