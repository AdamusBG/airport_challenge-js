describe("Plane", function() {

  beforeEach(function() {
    my_plane = new Plane();
  });

  it("Is not at airport by default", function() {
    expect(my_plane.is_at_airport()).toEqual(false);
  });

  it("Correctly lands at airport when told to do so", function() {
    my_plane.land("airport");
    expect(my_plane.airport).toEqual("airport");
  })

  it("Throws an error when asked to land, but already landed", function() {
    my_plane.land("airport");
    expect(function() {
      my_plane.land("another airport");
    }).toThrow(new Error("This plane is already at an airport"));
  })

  it("Throws an error when asked to take_off, but already taken off", function() {
    expect(function() {
      my_plane.take_off("another airport");
    }).toThrow(new Error("This plane cannot take off as it is not at an airport"));
  })

  it("Throws an error when asked to take_off, from an incorrect airport", function() {
    my_plane.land('airport');
    expect(function() {
      my_plane.take_off("another airport");
    }).toThrow(new Error("The pane can't take off from an airport that it is not at"));
  })

  it("succesful take off leads to airport = -1", function() {
    my_plane.land('airport');
    my_plane.take_off('airport');
    expect(my_plane.airport).toEqual(-1);
  })
});
