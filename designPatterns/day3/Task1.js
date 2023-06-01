class Shipment {
  constructor(pickDate, deliveryDate, commodities, from, to) {
    this.pickDate = pickDate;
    this.deliveryDate = deliveryDate;
    this.commodities = commodities;
    this.from = from;
    this.to = to;
  }
}

class AirShipment extends Shipment {
  constructor(pickDate, deliveryDate, commodities, from, to) {
    super(pickDate, deliveryDate, commodities, from, to);
    this.type = "airShipment";
  }
}

class GroundShipment extends Shipment {
  constructor(pickDate, deliveryDate, commodities, from, to) {
    super(pickDate, deliveryDate, commodities, from, to);
    this.type = "groundShipment";
  }
}

class ShipmentMethod {
  constructor(type, pickDate, deliveryDate, commodities, from, to) {
    switch (type) {
      case "air":
        return new AirShipment(pickDate, deliveryDate, commodities, from, to);

      case "ground":
        return new GroundShipment(
          pickDate,
          deliveryDate,
          commodities,
          from,
          to
        );
    }
  }
}

const shipment1 = new ShipmentMethod("air", 12, 16, "food", "Cairo", "Sohag");
console.log(shipment1);

const shipment2 = new ShipmentMethod(
  "ground",
  12,
  16,
  "food",
  "Cairo",
  "Sohag"
);
console.log(shipment2);
