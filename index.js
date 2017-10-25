function add(x, y) {
    return x + y;
}

function contains(array, toMatch) {
    return array.indexOf(toMatch) !== -1;
}

function isName(input) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    return contains(alphabet, input[0]) &&
           (input.length === 1 || isName(input.substring(1, input.length - 1)));
}

function isNumber(input) {
    let alphabet = "0123456789";

    return contains(alphabet, input[0]) &&
           (input.length === 1 || isName(input.substring(1, input.length - 1)));
}

function isArgs(input) {
    let args = input.split(' ');

    if ((isName(args[0]) || isNumber(args[0]))) {
        return 
    }
}

function tokenise(input) {
    let length = input.length;

    input = input.trim();

    if (input[0] === '(' && input[length - 1] === ')') {
        return tokenise(input.substring(1, length - 1));
    } else if (isName(input)) {
        return [input];
    } else if (isNumber(input)) {
        return [parseInt(input)];
    }

    return [];
}

console.log(tokenise("(add 1 2)"));
console.log(isNumber("abc"));
