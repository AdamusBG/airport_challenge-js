class Airport {
  constructor(capacity = 20) {
    this.planes_in_hangar = [];
    this.capacity = capacity;
  };

  has_space() {
    if (this.planes_in_hangar.length >= this.capacity) {
      return false;
    } else {
      return true;
    };
  };

  land_plane(plane) {
    this.planes_in_hangar.push(plane);
  };

  good_weather() {
    var roll = Math.floor(Math.random() * 20);
    if (roll == 0) {
      return false;
    } else {
      return true;
    };
  };

};
