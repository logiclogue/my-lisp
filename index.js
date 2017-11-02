var interpret = require("./src/interpret");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    console.log(interpret(input).value);
});

module.exports = interpret;
