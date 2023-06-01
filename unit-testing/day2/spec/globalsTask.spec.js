// const { sum, positive } = require("../index");

// describe("testing math utilities", () => {
//   let pos_vals;
//   let neg_vals;
//   let vals;
//   let sum_of_vals;

//   beforeAll(function () {
//     pos_vals = [1, 2, 4, 2];
//     neg_vals = [-1, -2, -4, -2];
//     vals = pos_vals.concat(neg_vals);
//     sum_of_vals = vals.reduce((x, y) => x + y, 0);
//   });

//   beforeEach(function () {
//     console.log(vals);
//   });

//   afterEach(function () {
//     console.log("done!");
//   });

//   afterAll(function () {
//     pos_vals = 0;
//     neg_vals = 0;
//     vals = 0;
//     sum_of_vals = 0;
//   });

//   it("return of sum function should equal to sum of the values", () => {
//     expect(sum(vals)).toEqual(sum_of_vals);
//   });

//   it("positive function should equal to positive values", () => {
//     expect(positive(vals)).toEqual(pos_vals);
//   });
// });

// // at before all assign pos_vals with array of positive numbers,
// // and assign negative vals with  array of negative numbers,
// // assign vals to pos_vals.concat(neg_vals);
// // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
// // at before each console.log all vals
// // at after each console.log done
// // at after all set all variables to 0
