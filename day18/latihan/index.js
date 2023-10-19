// import module bernama `os`
const os = require('os');
const luasSegitiga = require('./segitiga.js');

//import module bernama `fs`
const fs = require('fs');
const isi = fs.readFileSync('./text.txt', 'utf-8');

console.log('Free Memory: ', os.freemem());

console.log('Luas Segitiga: ', luasSegitiga(4, 6));

console.log('Isi File: ', isi);