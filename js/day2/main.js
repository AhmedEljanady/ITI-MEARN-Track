// // task 1
let email = prompt("enter your email:");
if (
  email.indexOf("@") == -1 ||
  email[0] == "@" ||
  email[email.length - 1] == "@"
) {
  alert("invalid mail");
} else {
  alert("valid mail");
}
///////////////////////////////////////////////
// task 2

const charCounter = function (char, word) {
  var count = 0;
  for (let i = 0; i < word.length; i++) {
    if (char == word[i]) {
      count++;
    }
  }
  return count;
};
console.log(charCounter("a", "edabit"));
console.log(charCounter("b", "big fat bubble"));

///////////////////////////////////////////////
// task 3
let arr = [5, 8, 12];
// arr[0] = Number(prompt("enter num1:"));
// arr[1] = Number(prompt("enter num2:"));
// arr[2] = Number(prompt("enter num3:"));
let sum = document.querySelector(".sum");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");
sum.innerHTML = `${arr[0]}+${arr[1]}+${arr[2]} = ${arr[0] + arr[1] + arr[2]}`;
multiplication.innerHTML = `${arr[0]}*${arr[1]}*${arr[2]} = ${
  arr[0] * arr[1] * arr[2]
}`;
division.innerHTML = `${arr[0]}/${arr[1]}/${arr[2]} = ${
  arr[0] / arr[1] / arr[2]
}`;

///////////////////////////////////////////////
// task 4
let arr2 = [1, 5, 7, 86, 4, 25];
let val = document.querySelector(".val");
let des = document.querySelector(".des");
let asc = document.querySelector(".asc");
val.innerHTML = `${arr2}`;
arr2.sort((a, b) => a - b);
des.innerHTML = `${arr2}`;
arr2.sort((a, b) => b - a);
asc.innerHTML = `${arr2}`;

///////////////////////////////////////////////
// task 5
// let radius = Number(prompt("enter radius"));
// alert(Math.PI * Math.pow(radius, 2));

// /////////////////////////////////////////////
// // task 6
// let num = Number(prompt("enter number:"));
// alert(`Squar root of ${num} is ${Math.sqrt(num)}`);

///////////////////////////////////////////////
// task 7
let num2 = 90;
let cos = document.querySelector(".cos");
cos.innerHTML = `cos ${num2} is ${Math.cos(num2 * Math.PI) / 180}`;
