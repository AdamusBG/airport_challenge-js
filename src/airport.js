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

};

// class Airport
//   attr_reader :planes_in_hangar, :capacity
//
//   def initialize(capacity = 20)
//     @planes_in_hangar = []
//     @capacity = capacity # default capacity of 20
//   end
//
//   def space?
//     return false if @planes_in_hangar.length >= @capacity
//
//     return true
//   end
//
//   def good_weather?
//     roll = rand(1..20) # gives us a 1 in 20 chance of stormy weather
//     return false if roll == 1 # false returned for stormy
//
//     return true # true returned for good weather
//   end
//
// end
