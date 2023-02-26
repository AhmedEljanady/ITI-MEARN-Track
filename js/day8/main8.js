function twoOnly(a, b) {
  try {
    if (arguments.length != 2) throw "invaled parameters";
    return a + b;
  } catch (err) {
    return err;
  }
}
console.log(twoOnly(5));
console.log(twoOnly());
console.log(twoOnly(5, 8, 6));
console.log(twoOnly(5, 8));
console.log("//----------------------------//");
//----------------------------------------//

function sumNumsOnly() {
  let sum = 0;
  try {
    if (arguments.length === 0) throw "No parameters";
    for (let i = 0; i < arguments.length; i++) {
      if (!isFinite(arguments[i])) throw "invaled parameters";
      sum += arguments[i];
    }
  } catch (err) {
    return err;
  }
  return sum;
}
console.log(sumNumsOnly(5, 5.8, 9, 3, "cx"));
console.log(sumNumsOnly());
console.log(sumNumsOnly(5, 5, 8, 9, 3));
console.log("//----------------------------//");
//----------------------------------------//
function reverse1() {
  console.log(arguments);
  console.log([...arguments].reverse());
}
reverse1(1, 2, 3, 4, 5, 6);

function reverse2() {
  console.log([].slice.apply(arguments).reverse());
}
reverse2(1, 2, 3, 4, 5, 6);
console.log("//----------------------------//");
//----------------------------------------//

let emp = {
  fname: "Ahmed",
  age: 26,
  phone: "01095904579",
  salary: "3000$",
  setGetGenerator: function () {
    let obj = {};
    let keys = Object.keys(this);
    for (let key of keys) {
      if (typeof this[key] != "function") {
        obj[`set_${key}`] = (str) => (this[key] = str);
        obj[`get_${key}`] = () => this[key];
      }
    }
    Object.assign(this, obj);
    return "all done...!";
  },
};

let stu = {
  full_name: "Ahmed Khaled",
  address: "Assiut",
};

let setGetGenerator = emp.setGetGenerator;
setGetGenerator.call(stu);

stu.set_address("Egypt");
console.log(stu.get_address());
