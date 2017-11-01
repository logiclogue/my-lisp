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

    var functionResult = interpretFunction(trimmedInput);

    if (functionResult.valid) {
        return functionResult;
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

function getList(tokens, count) {
    var head = _.take(tokens, count).join(" ");

    var tail = _.drop(tokens, count);
    var headResult = interpret(head);
    var tailResult;

    if (headResult.valid && tokens.length === count) {
        return new Result(true, headResult.value);
    } else if (headResult.valid) {
        tailResult = getList(tail, 1);

        if (tailResult.valid) {
            return new Result(true, [headResult.value].concat(tailResult.value));
        }
    }

    if (count > tokens.length) {
        return new Result(false);
    }

    return getList(tokens, count + 1);
}

function interpretFunction(input) {
    var withoutBrackets = input.substring(1, input.length - 1);

    if ("(" + withoutBrackets + ")" !== input) {
        return new Result(false);
    }

    var tokens = withoutBrackets.split(/\s+/g);
    var result = getList(tokens, 1);

    console.log(result);

    if (result.value[0] === "add") {
        return new Result(true, result.value[1] + result.value[2]);
    } else if (result.value[0] === "minus") {
        return new Result(true, result.value[1] - result.value[2]);
    }

    return result;
}

module.exports = interpret;
