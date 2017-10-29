var Result = require("./Result");
var interpret = require("./interpret");
var _ = require("lodash");

function hasOpenBracket(input) {
    return _.head(input) === "(";
}

function hasCloseBracket(input) {
    return _.last(input) === ")";
}

function insideOfBrackets(input) {
    return input.substring(1, input.length - 1);
}

function interpretBrackets(input) {
    if (hasOpenBracket(input) && hasCloseBracket(input)) {
        return interpret(insideOfBrackets(input));
    }

    return new Result(false);
}

module.exports = interpretBrackets;
