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
      airport.land_plane(this);
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
