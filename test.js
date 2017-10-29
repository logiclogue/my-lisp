var expect = require("chai").expect;
var interpret = require(".");

describe("interpret", function () {
    context("Given 5", function () {
        it("returns 5", function () {
            expect(interpret("5")).to.equal(5);
        });
    });
});
