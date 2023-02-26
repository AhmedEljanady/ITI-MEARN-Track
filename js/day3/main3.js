var date = new Date();
console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
console.log("-------------------");
//--------------------------//

var reg = /[0-9]*(0|2|4|6|8)$/;
var isEven = function (num) {
  reg.test(num) ? console.log("true") : console.log("false");
};
isEven(579);
isEven(578);
console.log("-------------------");
//--------------------------//

let student = [
  { name: "ahmed", degree: 95 },
  { name: "khaled", degree: 85 },
  { name: "hassan", degree: 80 },
  { name: "ali", degree: 50 },
  { name: "hossam", degree: 45 },
];
let result1 = student.find((n) => n.degree > "90").name;
console.log(result1);
console.log("-------------------");
let result2 = student.filter((n) => n.degree < 60);
for (let i = 0; i < result2.length; i++) {
  console.log(result2[i].name);
}
console.log("---------PUSH----------");
student.push({ name: "mahmoud", degree: 70 });
for (key in student) {
  console.log(student[key]);
}
console.log("---------POP----------");
student.pop();
for (key of student) {
  console.log(key);
}
console.log("---------SORT----------");
let result3 = student.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log(result3);
console.log("---------REMOVE----------");
let result4 = student.splice(3, 1);
console.log(result4);
console.log(student);
console.log("---------ADD----------");
let result5 = student;
result5.splice(
  2,
  0,
  { name: "osama", degree: 65 },
  { name: "nady", degree: 85 }
);
console.log(result5);
