class Plane{
  constructor(airport = -1) {
    this.airport = airport;
  };

  is_at_airport() {
    if (this.airport == -1) {
      return false;
    } else {
      return true;
    }
  };

  land(airport) {
    if (this.airport != -1) {
      throw new Error("This plane is already at an airport");
    } else { //note to add in extr aonditionals for airport having no space or bad weather
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
//
//   def at_airport?(airport)
//     return false unless @landed_at == airport
//
//     return true
//   end
// end
