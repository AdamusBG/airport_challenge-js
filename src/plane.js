class Plane{
  constructor(airport = -1) {
    this.airport = airport;
  };

  at_airport() {
    if (this.airport == -1) {
      return false;
    } else {
      return true;
    }
  };

  land(airport) {
    if (this.airport != -1) {
      throw new Error("This plane is already at an airport");
    } else if (!airport.has_space()) {
      throw new Error("This plane cannot land at that airport as the airport is full");
    } else if (!airport.good_weather()) {
      throw new Error("This plane cannot land at that airport due to bad weather");
    } else {
      this.airport = airport;
    }
  };

  take_off(airport) {
    if (this.airport == -1) {
      throw new Error("This plane cannot take off as it is not at an airport");
    } else if (this.airport != airport) {
      throw new Error("The pane can't take off from an airport that it is not at");
    } else {
      this.airport = -1;
    }
  }
};


// class Plane
//   attr_reader :landed_at
//
//   def initialize(airport = -1)
//     @landed_at = airport # nb that we will consider the value of -1 to mean the airport is in flight
//   end
//
//
//
//   def take_off(airport)
//     raise StandardError.new "This plane cannot take off as it is not at an airport" if @landed_at == -1
//     raise StandardError.new "The pane can't take off from an airport that it is not at" if @landed_at != airport
//     raise StandardError.new "The plane cannot take off from this airport because of stormy weather" unless airport.good_weather?
//
//     @landed_at = -1
//   end
// end
