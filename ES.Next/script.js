let x = 5,
  y = 10;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
////////////////////
console.log("//*******************************//");
////////////////////
function maxMinNum(...arg) {
  var max = (min = arg[0]);
  for (let i = 0; i < arg.length; i++) {
    max > arg[i] ? (max = max) : (max = arg[i]);
    min < arg[i] ? (min = min) : (min = arg[i]);
  }
  return `max number is ${max} and min number is ${min}`;
}
const arr = [2, 1, 4, 5, 6, 5, 8, 3];
console.log(maxMinNum(...arr));
////////////////////
console.log("//*******************************//");
////////////////////

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
console.log("a) " + fruits.every((el) => typeof el === "string"));
console.log("b) " + fruits.some((el) => el.toLowerCase().startsWith("a")));
const FilteredArr = fruits.filter(
  (el) => el.toLowerCase().startsWith("b") || el.toLowerCase().startsWith("s")
);
console.log("c) " + FilteredArr);
const mappedArr = fruits.map((el) => `I Love ${el}`);
console.log("d) " + mappedArr);
mappedArr.forEach((el, i) => console.log(`e.${i + 1}) ${el}`));
