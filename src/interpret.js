var interpretValue = require("./interpretValue");

// String -> Result
function interpret(input) {
    var trimmedInput = input.trim();

    return interpretValue(trimmedInput);
}

module.exports = interpret;
