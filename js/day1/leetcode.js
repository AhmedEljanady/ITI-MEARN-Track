// var isValid = function (s) {
//   let x = [...s];
//   let i = x.length;
//   while (i != 0) {
//     for (let j = 0; j < x.length; j++) {
//       if (x[j] === "(" && x[j + 1] === ")") {
//         x.splice(j, 2);
//         console.log(x);
//       }
//       if (x[j] === "[" && x[j + 1] === "]") {
//         x.splice(j, 2);
//         console.log(x);
//       }
//       if (x[j] === "{" && x[j + 1] === "}") {
//         x.splice(j, 2);
//         console.log(x);
//       }
//     }
//     i--;
//   }
//   if (x.length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// var isValid = function (s) {
//   var array = [];
//   s = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") array.push(")");
//     else if (s[i] === "[") array.push("]");
//     else if (s[i] === "{") array.push("}");
//     else if (s.length === 0 || array[array.length - 1] !== s[i]) return false;
//     else array.pop();
//   }
//   return array.length === 0;
// };
// console.log(isValid("[{]}()"));
// console.log(isValid("(){}[]"));
// console.log(isValid("(){}[()]"));
//-------------------------------------------//
//-------------------------------------------//
// var hammingWeight = function (n) {
//   let x = n.toString(2);
//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] == 1) count++;
//   }
//   return count;
// };
// console.log(hammingWeight(00000000000000000000000010000000));
//-------------------------------------------//
//-------------------------------------------//
// var subtractProductAndSum = function (n) {
//   let c = n.toString();
//   let x = c.split("");
//   let sum = 0;
//   let multi = 1;
//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//     multi *= x[i];
//     console.log(sum, multi);
//   }
//   return multi - sum;
// };
// console.log(subtractProductAndSum(153));

//-------------------------------------------//
//-------------------------------------------//
/////// code make run time error
// var largestPerimeter = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         let a = nums[i];
//         let b = nums[j];
//         let c = nums[k];
//         if (a + b > c && a + c > b && b + c > a) {
//           let max = a + b + c;
//           arr.push(max);
//         }
//       }
//     }
//   }
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return Math.max(...arr);
//   }
// };
// console.log(largestPerimeter());

/////// code from solutions
// var largestPerimeter = function (nums) {
//   nums = nums.sort((a, b) => b - a);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1] + nums[i + 2]) {
//       return nums[i] + nums[i + 1] + nums[i + 2];
//     }
//   }
//   return 0;
// };
// console.log(largestPerimeter([3, 6, 2, 3]));
//-------------------------------------------//
//-------------------------------------------//
// let x;
// list1.length > list2.length ? (x = list1.length) : (x = list2.length);

// var mergeTwoLists = function (list1, list2) {
//   let arr = [];
//   while (list1.length !== 0 || list2.length !== 0) {
//     if (list1[0] > list2[0]) {
//       arr.push(list1[0]);
//       list1.splice(0, 1);
//     } else {
//       arr.push(list2[0]);
//       list2.splice(0, 1);
//     }
//   }
//   if (list1.length === 0 && list2.length !== 0) {
//     arr = [[...arr] + [...list2]];
//   } else if (list2.length === 0 && list1.length !== 0) {
//     arr = [[...arr] + [...list1]];
//   }
//   return arr;
// };
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var mergeTwoLists = function (list1, list2) {
  return [...list1, ...list2].sort((a, b) => a - b);
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([], []));
//-------------------------------------------//
//-------------------------------------------//
// let i=0;i<s.length;i++
