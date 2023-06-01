/*
console.log("----------- Task 1 -------------");
class CEO {
  constructor(name, age, address) {
    if (!CEO.instance) {
      this.name = name;
      this.age = age;
      this.address = address;
      CEO.instance = this;
    } else {
      return CEO.instance;
    }
  }
}

let ceo = new CEO("ahmed", 27, "Assiut");
let ceo2 = new CEO("Hassan", 54, "Cairo");

console.log(ceo);
console.log(ceo2);

console.log("----------- Task 2 -------------");

class Car {
  type() {
    console.log(`im' a car`);
  }
}
class Motocycle {
  type() {
    console.log(`im' a motocycle`);
  }
}
class Plane {
  type() {
    console.log(`im' a plane`);
  }
}
class CreateVehicles {
  constructor(type) {
    switch (type) {
      case "car":
        return new Car();
      case "motocycle":
        return new Motocycle();
      case "plane":
        return new Plane();
      default:
        return "invalid option";
    }
  }
}
let vehicle1 = new CreateVehicles("car");
let vehicle2 = new CreateVehicles("motocycle");
let vehicle3 = new CreateVehicles("plane");
console.log(vehicle1, vehicle2, vehicle3);
vehicle1.type();
vehicle2.type();
vehicle3.type();

console.log("----------- Task 3 -------------");
class ToyFactory {
  constructor(color, price, type, name = null) {
    this.color = color;
    this.price = price;
    this.type = type;
    this.name = name;
    switch (this.type) {
      case "duck":
        return new ToyDuck(this.color, this.price);
      case "car":
        return new ToyCar(this.color, this.price, this.name);
      default:
        return "invalid option";
    }
  }
  toyDetails() {}
  // createShapes() {
  //   switch (this.type) {
  //     case "duck":
  //       return new ToyDuck(this.color, this.price);
  //     case "car":
  //       return new ToyCar(this.color, this.price);
  //     default:
  //       return "invalid option";
  //   }
  // }
}
class ToyDuck extends ToyFactory {
  constructor(color, price) {
    super(color, price);
  }
  toyDetails() {
    console.log(`toy: color is ${this.color} and price is ${this.price}`);
  }
}
class ToyCar extends ToyFactory {
  constructor(color, price, name) {
    super(color, price);
    this.name = name;
  }
  toyDetails() {
    console.log(
      `toy: color is ${this.color}, price is ${this.price} and name is ${this.name}`
    );
  }
}
let obj1 = new ToyFactory("red", 300, "duck");
console.log(obj1);
obj1.toyDetails();
// let toy1 = obj1.createShapes();
// console.log(toy1);
let toy2 = new ToyFactory("green", 800, "car", "BMW");
console.log(toy2);
toy2.toyDetails();
*/
console.log("----------- Task 4 -------------");

class ConfigureVals {
  constructor(xpoint = 0, ypoint = 0, shap = null) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.shap = shap;
    return this.getConfiguration();
  }
  getConfiguration() {
    if (!ConfigureVals.instance) {
      ConfigureVals.instance = this;
      return ConfigureVals.instance;
    } else {
      return ConfigureVals.instance;
    }
  }
}
let val1 = new ConfigureVals(5, 15, "circle");
console.log(val1);
let val2 = new ConfigureVals();
console.log(val2);
