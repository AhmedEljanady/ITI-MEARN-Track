function Shape(x) {
  this.x = x;
  if (this.constructor === Shape) {
    throw `You can't create object from Shape class`;
  }
}
// let s = new Shape();

/*********** */

function Rectangle(w, h, x) {
  /// 1 to inherit from shape
  Shape.call(this, x);
  this.height = w;
  this.width = h;
  /// to increase counter when create instance
  if (this.constructor === Rectangle) {
    Rectangle.counter++;
  } else {
    throw "you can create only one rectangle";
  }

  // console.log(x);
}
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
///  2 in inherit
Rectangle.prototype = Object.create(Shape.prototype);

///  3 in inherit
Rectangle.prototype.constructor = Rectangle;
///  create instances
// let rec1 = new Rectangle(5, 8, 9);
// let rec2 = new Rectangle(5, 8, 9);

//TODO >>>> inherit the square and bonus
function Square(w, h, x) {
  // Shape.call(this, x);
  Rectangle.call(this, w, h);
  if (this.constructor === Square && Square.counter === 0) {
    Square.counter++;
  } else {
    throw "you can create only one square";
  }
}
Square.counter = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let sq1 = new Square(5, 8, 9);
// let sq2 = new Square(5, 8, 9);
// console.log(7);
