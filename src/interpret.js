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
    if (count >= tokens.length) {
        return new Result(false);
    }

    var head = _.take(tokens, count).join(" ");
    var tail = _.drop(tokens, count);
    var result = interpret(head);

    if (result.valid) {
        var nextItem = getList(tail, 1);

        if (tail.join(" ").trim() === "") {
            return new Result(true, [result.value]);
        } else {
            return new Result(true, result.value.append(nextItem.value));
        }

        return new Result(true, [result.value, tail]);
    }

    return getList(tokens, count + 1);
}

function interpretFunction(input) {
    var tokens = input.split(/\s+/g);
    var result = getList(tokens, 1);

    console.log(result);

    return new Result(false);
}

module.exports = interpret;
