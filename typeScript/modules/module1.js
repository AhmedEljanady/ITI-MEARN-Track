var Rectangle = /** @class */ (function () {
    function Rectangle(wi, he) {
        this.height = he;
        this.width = wi;
    }
    Rectangle.prototype.calcArea = function () {
        console.log("area: ".concat((this.width + this.height) * 2));
    };
    return Rectangle;
}());
export { Rectangle };
var Square = /** @class */ (function () {
    function Square(wi) {
        this.width = wi;
    }
    Square.prototype.calcArea = function () {
        console.log("area: ".concat(this.width * 2));
    };
    return Square;
}());
export { Square };
