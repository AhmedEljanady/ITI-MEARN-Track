class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return `The Area = ${this.width * this.height}`;
  }

  clacParameter() {
    return `The Parameter = ${2 * (this.width + this.height)}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  calcArea() {
    return `The Rectangle Area = ${this.width * this.height}`;
  }

  clacParameter() {
    return `The Rectangle Parameter = ${2 * (this.width + this.height)}`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  calcArea() {
    return `Square Area is :${Math.pow(this.side, 2)}`;
  }

  clacParameter() {
    return `The Square Parameter = ${4 * this.side}`;
  }
}

class Circle extends Rectangle {
  constructor(radiuse) {
    super();
    this.radiuse = radiuse;
  }
  calcArea() {
    return `Circle Area is :${3.14 * Math.pow(this.radiuse, 2)}`;
  }

  //circle have diamter not parameter
  clacDiameter() {
    return `The Circle Diameter  = ${2 * this.radiuse}`;
  }
}

export { Rectangle };
