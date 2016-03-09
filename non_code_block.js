var fs = require("fs");

fs.readFile('code_block_data2.txt', function (err, data) {
    if (err) {
		console.log("failed");
		return console.error(err);		
	}
	else {
    console.log(data.toString());
	}
});

console.log("Program Ended");