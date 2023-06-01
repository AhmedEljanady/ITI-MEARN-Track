function AirShipment(pickDate, DeliveryDate, commodities, from, to) {
    this.pickDate = pickDate;
    this.DeliveryDate = DeliveryDate;
    this.commodities = commodities;
    this.from = from;
    this.to = to;
    this.type = "airShipment";
  }
  
  function GroundShipment(pickDate, DeliveryDate, commodities, from, to) {
    this.pickDate = pickDate;
    this.DeliveryDate = DeliveryDate;
    this.commodities = commodities;
    this.from = from;
    this.to = to;
    this.type = "groundShipment";
  }
  
  function ShipmentFactory() {
    this.create = (type, pickDate, DeliveryDate, commodities, from, to) => {
      switch (type) {
        case "airShipment":
          return new AirShipment(pickDate, DeliveryDate, commodities, from, to);
          break;
        case "groundShipment":
          return new GroundShipment(
            pickDate,
            DeliveryDate,
            commodities,
            from,
            to
          );
          break;
      }
    };
  }
  
  const shipment1 = new ShipmentFactory();
  console.log(shipment1.create("airShipment", 12, 16, "food", "Cairo", "Sohag"));
  console.log(
    shipment1.create("groundShipment", 12, 16, "toys", "Cairo", "Alex")
  );