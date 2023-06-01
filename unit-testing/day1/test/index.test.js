const { capitalizeText, createArray } = require("../index");
const expect = require("chai").expect;
const { assert } = require("chai");
const { describe, it } = require("mocha");

describe("test function capitalize text", function () {
  it("function return text", function () {
    assert(capitalizeText("hello"), "string");
  });
  it("function return capital text", function () {
    // const expect = "hello";
    expect(capitalizeText("hello")).to.equal("HELLO");
  });
  it("function throw error in numbers", function () {
    expect(function () {
      capitalizeText(5);
    }).to.throw();
  });
});

describe("Delay Test", function () {
  it("should delay the testing process by 5 seconds", function (done) {
    setTimeout(function () {
      describe("test function create array", function () {
        it("function return array", function () {
          expect(createArray(5)).to.be.a("Array");
        });
        it("function return same length", function () {
          expect(createArray(3)).to.be.length(3);
        });
        it("function return include", function () {
          expect(createArray(3)).to.be.include(1);
        });
      });
      done();
    }, 5000);
  });
});
