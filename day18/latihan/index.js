// import module bernama `os`
const os = require('os');
const luasSegitiga = require('./segitiga');

//import module bernama `fs`
const fs = require('fs');
// read file
const isi = fs.readFileSync('./text.txt', 'utf-8');
// write file
const write = fs.writeFileSync('./output', 'ini saya buat dengan index.js');
//import person.json
//const wahyu = require('./create.js');
//const wahyu = require('./person.json');

console.log('Free Memory: ', os.freemem());

console.log('Luas Segitiga: ', luasSegitiga(4, 6));

console.log('Isi File: ', isi);

//console.log(wahyu);