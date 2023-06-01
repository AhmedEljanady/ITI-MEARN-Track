// Each shipment has pickup date , delivery date , commodities , ship from and ship to.
class PickupDate {
  constructor(day) {
    this.day = day;
  }

  print() {
    return this.day;
  }
}
class DeliveryDate {
  constructor(deliveryDay) {
    this.deliveryDay = deliveryDay;
  }

  print() {
    return this.deliveryDay;
  }
}

class Commodities {
  constructor(products) {
    this.products = products;
  }
  print() {
    this.products.forEach((products) => {
      console.log(`${products}`);
    });
  }
}

class ShippingDirection {
  constructor(direction) {
    this.direction = direction;
  }

  print() {
    console.log("From  :Cairo");

    console.log("To : Assiut");
  }
}

var Shipment = [
  new PickupDate(10),
  new DeliveryDate(20),
  new Commodities(["Shoes Men", "Shes Women", "FareFoot", "boots"]),
  new ShippingDirection("direction of shipment "),
];

function printShipmentDetails(Shipment) {
  Shipment.forEach((item) => {
    item.print();
  });
}

printShipmentDetails(Shipment);
