// import { Rectangle, Square, Circle } from "./oop.js";

// import { Rectangle } from "./oop";
const { Rectangle, Square, Circle } = require("./oop");

//  Task 1
let obj = {
  name: "",
  address: "",
  age: 0,
};

var handler = {
  get: function (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw "Properity not found";
    }
  },
  set: function (target, prop, value) {
    if (prop == "name") {
      if (typeof value != "string" || value.length != 7) {
        throw "Invaild Name";
      }
    }

    if (prop == "address") {
      if (typeof value != "string") {
        throw "Invaild Address";
      }
    }

    if (prop == "age") {
      if (!Number.isInteger(value) || value < 25 || value > 60) {
        throw "Invaild age";
      }
    }
    target[prop] = value;
  },
};

var ahmed = new Proxy(obj, handler);

ahmed.name = "ahmed67";
ahmed.address = "Assiut";
ahmed.age = 27;

console.log(ahmed);
////////////////////////////////////////////
//  Task 2

let rec = new Rectangle(100, 50);
let square = new Square(100);
let circle = new Circle(50);

console.log(rec.calcArea());
console.log(rec.clacParameter());
console.log(square.calcArea());
console.log(square.clacParameter());
console.log(circle.calcArea());
console.log(circle.clacDiameter());
////////////////////////////////////////////
//  Task 3
const iterableObject = {
  name: "Ahmed",
  address: "Assiut",
  age: 27,
  [Symbol.iterator]() {
    let step = 0;
    let properties = Object.keys(this);

    return {
      next() {
        return {
          value: `${properties[step]}:${iterableObject[properties[step]]}`,
          done: step++ === properties.length,
        };
      },
    };
  },
};

for (let prop of iterableObject) {
  console.log(prop);
}
