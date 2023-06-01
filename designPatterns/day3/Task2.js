// Decorator Pattren

class Pizza {
  type() {}
}

class PeppyPaneer extends Pizza {
  type() {
    console.log("Peppy Paneer Pizza");
  }
}

class Margherita extends Pizza {
  type() {
    console.log("Margherita Pizza");
  }
}

class Chicken extends Pizza {
  type() {
    console.log("Chicken Fiesta Pizza");
  }
}

class Toppings extends Pizza {
  constructor(extra) {
    super();
    this.extra = extra;
  }
  type() {
    this.extra.type();
  }
}

class ExtraCheese extends Toppings {
  type() {
    console.log("Extra Cheese added");
  }
}

var chickenPizza = new Chicken();
chickenPizza.type();

var addCheese = new ExtraCheese(chickenPizza);
addCheese.type();
