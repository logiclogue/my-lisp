var expect = require("chai").expect;
var interpret = require(".");
var interpretValue = require("./src/interpretValue");
var interpretBrackets = require("./src/interpretBrackets");

describe("interpretValue", function () {
    context("Given 5", function () {
        it("returns true and 5", function () {
            var result = interpretValue("5");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(5);
        });
    });

    context("Given 154", function () {
        it("returns true and 154", function () {
            var result = interpretValue("154");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(154);
        });
    });

    context("Given abc", function () {
        it("returns false", function () {
            var result = interpretValue("abc");

            expect(result.valid).to.be.false;
        });
    });

    context("Given empty string", function () {
        it("returns empty string", function () {
            var result = interpretValue("");

            expect(result.valid).to.be.false;
        });
    });
});

describe("interpretBrackets", function () {
    context("Given (5)", function () {
        it("returns true and 5", function () {
            var result = interpretBrackets("(5)");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(5);
        });
    });
});
