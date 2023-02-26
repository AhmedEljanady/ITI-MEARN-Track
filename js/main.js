// // task 1
// function sum() {
//   var a = prompt("enter first number: ");
//   var b = prompt("enter secound number: ");
//   alert(Number(a) + Number(b));
// }

// // task 2
// // var a = prompt("enter first number: ");
// // var b = prompt("enter secound number: ");
// function lessThan100(a, b) {
//   var c = a + b < 100 ? true : false;
//   return c;
// }
// console.log(lessThan100(38, 65));

// // task 3
// function stringInt(str) {
//   return parseInt(str);
// }
// console.log(stringInt("5615"));

// // task 4
// var t = "";
// // for (let i = 0; i < 5; i++) {
// //   t += "*";
// //   console.log(t);
// // }

// for (let i = 0; i < 6; i++) {
//   t += "*";
//   console.log(t);
//   // for (let j = 0; j < i; j++) {
//   //   break;
//   // }
// }

// // task 5
// let txt = "ahmedkhaled";
// let split = txt.split("");
// console.log(split);
// split.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// console.log(split.join(""));

//--------------------------------------------
/**
 * @param {string} s
 * @return {number}
 */

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// var romanToInt = function (s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if ((s[i] == "I" && s[i + 1] == "V") || (s[i] == "I" && s[i + 1] == "X")) {
//       count -= 2;
//     } else if (
//       (s[i] == "X" && s[i + 1] == "L") ||
//       (s[i] == "X" && s[i + 1] == "C")
//     ) {
//       count -= 20;
//     } else if (
//       (s[i] == "C" && s[i + 1] == "D") ||
//       (s[i] == "C" && s[i + 1] == "M")
//     ) {
//       count -= 200;
//     }
//     switch (s[i]) {
//       case "I":
//         count += 1;
//         break;
//       case "V":
//         count += 5;
//         break;
//       case "X":
//         count += 10;
//         break;
//       case "L":
//         count += 50;
//         break;
//       case "C":
//         count += 100;
//         break;
//       case "D":
//         count += 500;
//         break;
//       case "M":
//         count += 1000;
//         break;
//     }
//   }
//   return count;
// };
// console.log(romanToInt("MCMXCIV"));

// var xx = 0;
// xx--;
// xx -= 100;
// console.log(xx);

// var average = function (salary) {
//   let min = 1;
//   let max = 1;
//   console.log(min, max);
//   let counter = 0;
//   for (let i = 0; i < salary.length; i++) {
//     if (salary[i] < min) {
//       min = salary[i];
//     } else if (salary[i] > max) {
//       max = salary[i];
//     }
//     console.log(min, max);
//   }
//   for (let i = 0; i < salary.length; i++) {
//     if (salary[i] == min || salary[i] == max) {
//       continue;
//     } else {
//       counter += salary[i];
//     }
//   }
//   console.log(counter);
//   return counter;
// };
// console.log(average([4000, 3000, 1000, 2000]));

// let arr = [(r = "red"), (b = "blue"), (g = "green")];
