var Result = require("./Result");
var interpretValue = require("./interpretValue");
var interpretBrackets = require("./interpretBrackets");
var _ = require("lodash");

// String -> Result
function interpret(input) {
    var trimmedInput = input.trim();

    var valueResult = interpretValue(trimmedInput);

    if (valueResult.valid) {
        return valueResult;
    }

    var nameResult = interpretName(trimmedInput);

    if (nameResult.valid) {
        return nameResult;
    }

    var bracketsResult = interpretBrackets(trimmedInput);

    if (bracketsResult.valid) {
        return bracketsResult;
    }

    return new Result(false);
}

function isInAlphabet(input) {
    return "abcdefghijklmnopqrstuvwxyz".indexOf(input) !== -1;
}

function isChar(input) {
    return input && input.length === 1 && isInAlphabet(input);
}

function interpretName(input) {
    var isFirstChar = isChar(_.head(input));

    if (isChar(input)) {
        return new Result(true, input);
    } else if (isFirstChar && interpretName(_.tail(input)).valid) {
        return new Result(true, input);
    }

    return new Result(false);
}

function interpretFunction(input) {
    var tokens = input.split(/\s+/g);
}

module.exports = interpret;
