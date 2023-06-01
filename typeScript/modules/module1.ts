export interface IShape {
  width: number;
}

export class Rectangle implements IShape {
  width: number;
  height: number;

  constructor(wi, he) {
    this.height = he;
    this.width = wi;
  }
  calcArea() {
    console.log(`area: ${(this.width + this.height) * 2}`);
  }
}
export class Square implements IShape {
  width: number;

  constructor(wi) {
    this.width = wi;
  }
  calcArea() {
    console.log(`area: ${this.width * 2}`);
  }
}
