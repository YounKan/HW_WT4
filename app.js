const fs = require('fs');
const data = fs.readFileSync('./file.txt', 'utf8');
console.log(data); // waiting until readFileSync done