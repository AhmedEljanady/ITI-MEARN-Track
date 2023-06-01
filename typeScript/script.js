//console.log("sdds");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var str: string = "string";
// var str: string = "hello";
// console.log(str);
// let num1: number = 6561;
// console.log(num1);
// const arr1: number[] = [65, 57, 5];
// console.log(arr1);
// // const arr2: Array<string> = ["asd", "dfg"];
// const arr2: string[] = ["asd", "dfg"];
// console.log(arr2);
// const mixarr: [string, boolean, number] = ["ahmed", true, 26];
// var any: string | number | boolean;
// any = "asd";
// any = 55;
// console.log(any);
// var a: (string | number)[] = ["sdfss", 354, "sdf", "sd", 54, 654];
// console.log(a);
// var b: string[] | number[];
// a = [54, 684, 23, 8, 6];
// //or
// a = ["qwe", "dfb"];
// enum catigories {
//   laptop = "electronics",
//   chair = "firnature",
// }
// console.log(catigories.laptop);
// function func(n1: number, n2?: number): number {
//   if (n2) {
//     return n1 + n2;
//   } else {
//     return n1;
//   }
// }
// console.log(func(5));
// //Genric function
// function getArray<T>(items: T[]): T[] {
//   return new Array<T>().concat(items);
// }
// var numberValues = getArray<number>([2, 6, 8]);
// console.log(numberValues);
// var stringValues = getArray<string>(["item1", "item2", "item3"]);
// console.log(stringValues);
// var x = getArray<boolean>([true, false]);
// console.log(x);
// //interface
// interface IShape {
//   type: string;
// }
// // interface IRectangle extends IShape {
// //   width: number;
// //   height: number;
// //   calcArea(): void;
// // }
// class Rectangle implements IShape {
//   public type: string;
//   protected width: number;
//   protected height: number;
//   constructor(_type: string, _width: number, _height: number) {
//     this.type = _type;
//     this.width = _width;
//     this.height = _height;
//   }
//   calcArea(): void {
//     console.log(`area: ${(this.width + this.height) * 2} `);
//   }
// }
// var rec1 = new Rectangle("rectangle", 10, 5);
// rec1.calcArea();
//----------------------task 2 & 3-------------------------------//
var Point2D = /** @class */ (function () {
    // x: number;
    // y: number;
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point2D.prototype.calcLength = function () {
        console.log("length between two points ".concat(this.x, ",").concat(this.y, " is: "));
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.calcLength = function () {
        console.log("length between three points ".concat(this.x, ",").concat(this.y, ",").concat(this.z, " is: "));
    };
    return Point3D;
}(Point2D));
var twoP = new Point2D(5, 8);
var threeP = new Point3D(5, 8, 6);
twoP.calcLength();
threeP.calcLength();
//----------------------task 4----------------------------//
console.log("----------------------task 4----------------------------");
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    GenericClass.prototype.getValue = function () {
        return this.value;
    };
    return GenericClass;
}());
var gg = new GenericClass("hello Ahmed");
console.log(gg.getValue());
var hh = new GenericClass(55);
console.log(hh.getValue());
