var Result = require("./Result");
var _ = require("lodash");

function isDigit(input) {
    return input && input.length === 1 && "0123456789".indexOf(input) !== -1;
}

function isValue(input) {
    return isDigit(input) || (isDigit(_.head(input)) && isValue(_.tail(input)));
}

// String -> Result
function interpretValue(input) {
    if (isValue(input)) {
        return new Result(true, parseInt(input));
    }

    return new Result(false);
}

module.exports = interpretValue;
