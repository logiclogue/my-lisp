var Result = require("./Result");
var _ = require("lodash");

function isDigit(input) {
    return input.length === 1 && "0123456789".indexOf(input) !== -1;
}

function value(input) {
    if (isDigit(input) || (isDigit(_.head(input)) && value(input).valid)) {
        return new Result(true, parseInt(input));
    }

    return new Result(false);
}

module.exports = value;
