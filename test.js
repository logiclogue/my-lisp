var expect = require("chai").expect;
var interpret = require("./src/interpret");

describe("interpret", function () {
    context("Given 5", function () {
        it("returns true and 5", function () {
            var result = interpret("5");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(5);
        });
    });

    context("Given 154", function () {
        it("returns true and 154", function () {
            var result = interpret("154");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(154);
        });
    });

    context("Given empty string", function () {
        it("returns empty string", function () {
            var result = interpret("");

            expect(result.valid).to.be.false;
        });
    });

    context("Given (5)", function () {
        it("returns true and 5", function () {
            var result = interpret("(5)");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(5);
        });
    });

    context("Given jordan", function () {
        it("returns jordan", function () {
            var result = interpret("jordan");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal("jordan");
        });
    });

    context("Given (add 5 2)", function () {
        it("returns 7", function () {
            var result = interpret("(add 5 2)");

            expect(result.valid).to.be.true;
            expect(result.value).to.equal(7);
        });
    });
});
