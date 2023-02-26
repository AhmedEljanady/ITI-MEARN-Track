function Shape() {
  if (this.constructor === Shape) {
    throw `You can't create object from Shape class`;
  }
}
// let s = new Shape();

/*********** */

function Rectangle(w, h) {
  /// 1 to inherit from shape
  Shape.call(this);
  this.height = w;
  this.width = h;
  /// to increase counter when create instance
  //// && Rectangle.counter == 0
  if (this.constructor === Rectangle) {
    Rectangle.counter++;
  }
  // else {
  //   throw "you can create only one rectangle";
  // }

  // console.log(x);
}
///  2 in inherit
Rectangle.prototype = Object.create(Shape.prototype);

///  3 in inherit
Rectangle.prototype.constructor = Rectangle;
/// static variable
Rectangle.counter = 0;
///  create methods
Rectangle.prototype.calculateArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.calculatePerimeter = function () {
  return (this.width + this.height) * 2;
};
///  override method
Rectangle.prototype.toString = function () {
  console.log(
    `rectangle height: ${this.height}, width: ${
      this.width
    }, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`
  );
};
//////////

///  create instances
let rec1 = new Rectangle(5, 8);
let rec2 = new Rectangle(5, 8);

// rec1.calculateArea();

function Square(w, h) {
  Rectangle.call(this, w, h);
  //// && Square.counter === 0
  if (this.constructor === Square) {
    Square.counter++;
  }
  //  else {
  //   throw "you can create only one square";
  // }
}
Square.counter = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let sq1 = new Square(5, 8);
// let sq2 = new Square(5, 8);
// console.log(7854);
