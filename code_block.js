var fs = require("fs");

var data = fs.readFileSync('code_block_data.txt');

console.log(data.toString());
console.log("Program Ended");