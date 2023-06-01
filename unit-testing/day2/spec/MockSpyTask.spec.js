var counter = {
  currentValues: function () {
    return 1;
  },
};

function sumOfValues() {
  return counter.currentValues(); //1
}

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect sumOfValues is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
    spyOn(counter, "currentValues").and.callFake(function (num) {
      return num;
    });
    sumOfValues();
    expect(counter.currentValues).toHaveBeenCalled();
    expect(counter.currentValues).toHaveBeenCalledTimes(1);
    expect(counter.currentValues(100)).toEqual(100);
  });

  // mock a function that  return number, call it twice and expect that it is called twice
  it("mocking", function () {
    let fakeFunc = jasmine.createSpy("");
    sumOfValues(fakeFunc());
    sumOfValues(fakeFunc());
    expect(fakeFunc).toHaveBeenCalledTimes(2);
  });
});
