class store {
  constructor() {
    this.newprodect = "";
    this.intresteds = [];
  }

  placeNewprodect(prodect) {
    this.newprodect = prodect;

    this.notifyAll();
  }

  notifyAll() {
    this.intresteds.forEach((item) => {
      item.update(this);
    });
  }
  register(interst) {
    this.intresteds.push(interst);
  }

  unregister(interst) {
    this.intresteds = this.intresteds.filter(function (item) {
      return item != interst;
    });
  }
}

class people {
  constructor(name) {
    this.name = name;
  }
  update(prodect) {
    console.log(`new prodect uploaded ${prodect.newprodect} - ${this.name}`);
  }
}

var shop = new store();
var ahmed = new people("ahmed");
shop.register(ahmed);

var hassan = new people("hassan");
shop.register(hassan);
shop.placeNewprodect("phone");

shop.unregister(hassan);
shop.placeNewprodect("labtop");
//-----------------------------------//
console.log("//-----------------------------//");

function Attack() {
  this.plan = (plan) => {
    return "attack";
  };
}
function Defence() {
  this.plan = (plan) => {
    return "defence";
  };
}
function Medium() {
  this.plan = (plan) => {
    return "medium";
  };
}
function plan() {
  this.setplan = "";
  this.setStrategy = (plan) => {
    this.setplan = plan;
  };
  this.changeplan = (plan) => {
    return this.setplan.plan(plan);
  };
}
var attack = new Attack();
var defence = new Defence();
var plane = new plan();

plane.setStrategy(attack);
console.log(plane.changeplan("attack"));

plane.setStrategy(defence);
console.log(plane.changeplan("defence"));
